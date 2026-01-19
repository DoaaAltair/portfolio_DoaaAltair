'use client';

import { useEffect, useState } from 'react';

const words = ['DESIGN', 'DEVELOPMENT', 'UI/UX', 'CODE'];

export default function MorphWords() {
    const [index, setIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setFade(true);
            }, 300);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-10 overflow-hidden">
            <span
                className={`block text-xl font-bold tracking-wide text-[var(--accent-strong)] transition-all duration-500 ${fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                    }`}
            >
                {words[index]}
            </span>
        </div>
    );
}
