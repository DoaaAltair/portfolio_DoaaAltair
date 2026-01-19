'use client';

import { useEffect, useRef } from 'react';

export default function BackgroundCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const ctx = canvas.getContext('2d')!;

        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);

        const handleResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        let mouseX = 0;
        let mouseY = 0;

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function draw() {
            ctx.clearRect(0, 0, w, h);

            ctx.fillStyle = '#8F917B';
            ctx.fillRect(0, 0, w, h);

            ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
            for (let x = 0; x < w; x += 80) {
                const offset = Math.sin((mouseY + x) * 0.002) * 40;
                ctx.fillRect(x + offset, 0, 2, h);
            }

            requestAnimationFrame(draw);
        }

        draw();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0" />;
}

