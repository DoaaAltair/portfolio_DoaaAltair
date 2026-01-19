'use client';

import { useEffect, useState } from 'react';

type Props = {
    name: string;
    className?: string;
    speedMs?: number;
};

export default function HeroTypewriter({ name, className, speedMs = 110 }: Props) {
    const [text, setText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(name.slice(0, i));
            i += 1;
            if (i > name.length) clearInterval(interval);
        }, speedMs);

        return () => clearInterval(interval);
    }, [name, speedMs]);

    return (
        <h1 className={`font-extrabold tracking-tight text-[var(--text)] ${className ?? ''}`}>
            <span className="inline-block">{text}</span>
        </h1>
    );
}

