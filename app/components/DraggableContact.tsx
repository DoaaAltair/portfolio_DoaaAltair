'use client';

import { useEffect, useRef, useState } from 'react';

export default function DraggableContact() {
    const ref = useRef<HTMLDivElement>(null);
    const [drag, setDrag] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            if (!drag) return;
            setPos({ x: e.clientX - 50, y: e.clientY - 20 });
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', () => setDrag(false));

        return () => window.removeEventListener('mousemove', handleMove);
    }, [drag]);

    return (
        <div
            ref={ref}
            onMouseDown={() => setDrag(true)}
            style={{ left: pos.x, top: pos.y }}
            className="fixed cursor-pointer px-6 py-3 rounded-xl bg-[#D6976C] text-white font-bold shadow-xl select-none"
        >
            Sleep mij → Contact
        </div>
    );
}

