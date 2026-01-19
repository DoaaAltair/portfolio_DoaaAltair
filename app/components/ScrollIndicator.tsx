'use client';

type Props = {
    progress: number;
};

export default function ScrollIndicator({ progress }: Props) {
    const clamped = Math.max(0, Math.min(1, progress));
    const top = `calc(${clamped * 100}% - 6px)`;

    return (
        <div className="scroll-indicator" aria-hidden="true">
            <div className="thumb" style={{ top }} />
        </div>
    );
}

