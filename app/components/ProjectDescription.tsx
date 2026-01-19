'use client';

type Props = {
    description: string;
};

type ElementType = 'paragraph' | 'subtitle' | 'bullet';

type Element = {
    type: ElementType;
    content: string;
};

export default function ProjectDescription({ description }: Props) {
    const lines = description.split('\n');
    const elements: Element[] = [];

    let paragraphBuffer: string[] = [];

    const flushParagraph = () => {
        if (paragraphBuffer.length === 0) return;

        const text = paragraphBuffer.join(' ').trim();
        if (text) {
            elements.push({ type: 'paragraph', content: text });
        }
        paragraphBuffer = [];
    };

    const isBullet = (line: string) => line.trim().startsWith('•');

    const isSubtitle = (line: string, nextLine?: string) => {
        const trimmed = line.trim();
        if (!trimmed) return false;

        const noPunctuation = !/[.!?:]$/.test(trimmed);
        const nextEmpty = !nextLine || !nextLine.trim();
        const nextBullet = nextLine?.trim().startsWith('•');

        return trimmed.length < 100 && noPunctuation && (nextEmpty || nextBullet);
    };

    // -------- Parse text into elements --------
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const nextLine = lines[i + 1];
        const trimmed = line.trim();

        if (!trimmed) {
            flushParagraph();
            continue;
        }

        if (isSubtitle(trimmed, nextLine)) {
            flushParagraph();
            elements.push({ type: 'subtitle', content: trimmed });
            continue;
        }

        if (isBullet(trimmed)) {
            flushParagraph();
            elements.push({
                type: 'bullet',
                content: trimmed.slice(1).trim(),
            });
            continue;
        }

        paragraphBuffer.push(trimmed);
    }

    flushParagraph();

    // -------- Render --------
    const rendered: JSX.Element[] = [];
    let bulletBuffer: string[] = [];
    let key = 0;

    const listClass =
        'space-y-1 list-disc list-outside pl-4 marker:text-[var(--muted)] marker:text-[10px]';
    const listItemClass =
        'text-[var(--muted)] text-sm font-normal leading-normal';

    const flushList = () => {
        if (bulletBuffer.length === 0) return;

        rendered.push(
            <ul key={`list-${key++}`} className={listClass}>
                {bulletBuffer.map((item, i) => (
                    <li key={i} className={listItemClass}>
                        {item}
                    </li>
                ))}
            </ul>
        );

        bulletBuffer = [];
    };

    for (const el of elements) {
        if (el.type === 'bullet') {
            bulletBuffer.push(el.content);
            continue;
        }

        flushList();

        if (el.type === 'subtitle') {
            rendered.push(
                <h3
                    key={key++}
                    className="text-base font-semibold text-[var(--text)]"
                >
                    {el.content}
                </h3>
            );
        }

        if (el.type === 'paragraph') {
            rendered.push(
                <p
                    key={key++}
                    className="text-[var(--muted)] text-sm leading-relaxed"
                >
                    {el.content}
                </p>
            );
        }
    }

    flushList();

    return <div className="space-y-5">{rendered}</div>;
}
