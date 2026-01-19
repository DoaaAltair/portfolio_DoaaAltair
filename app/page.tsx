'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { Route } from 'next';
import HeroTypewriter from './components/HeroTypewriter';
import NavBar from './components/NavBar';
import ScrollIndicator from './components/ScrollIndicator';
import { allProjects } from './data/projects';
import MorphWords from './components/MorphWords'
import { motion } from "framer-motion";


const sections = [
    { id: 'over', label: 'Over' },
    { id: 'projecten', label: 'Projecten' },
    { id: 'vaardigheden', label: 'Vaardigheden' },
];

export default function Home() {
    const [activeSection, setActiveSection] = useState<string>('over');
    const [codeTyped, setCodeTyped] = useState('');

    useEffect(() => {
        const line = 'const Doco = FrontendDeveloper();';
        let i = 0;
        const interval = setInterval(() => {
            setCodeTyped(line.slice(0, i));
            i += 1;
            if (i > line.length) clearInterval(interval);
        }, 70);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) {
                    setActiveSection(visible[0].target.id);
                }
            },
            { rootMargin: '-20% 0px -40% 0px', threshold: [0.25, 0.5, 0.75] },
        );

        sections.forEach((section) => {
            const el = document.getElementById(section.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const progress = useMemo(() => {
        const idx = sections.findIndex((s) => s.id === activeSection);
        if (idx < 0 || sections.length <= 1) return 0;
        return idx / (sections.length - 1);
    }, [activeSection]);

    return (
        <main className="relative min-h-screen overflow-hidden">
            <div className="bg-shapes" />
            <ScrollIndicator progress={progress} />

            {/* FIXED HEADER WITH NAV */}
            <div className="fixed top-0 left-0 right-0 z-30 bg-[var(--bg)]/80 backdrop-blur-md border-b border-white/5">
                <div className="mx-auto max-w-6xl px-6 lg:px-10">
                    <NavBar sections={sections} activeSection={activeSection} />
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 lg:px-10 pt-32">

                <section
                    id="over"
                    className="grid items-center gap-16 pb-32 lg:grid-cols-2"
                >
                    <div className="space-y-7">
                        <div className="relative">
                            <HeroTypewriter
                                name="Doaa Altair"
                                className="text-5xl sm:text-6xl lg:text-7xl"
                            />
                            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[var(--muted)]">
                                Ik ben een front-end developer uit Tilburg, Nederland.
                                Ik bouw moderne, toegankelijke webinterfaces met React en Next.js, waarbij ik
                                designs omzet in strakke, responsieve code die op elk apparaat goed presteert.
                            </p>
                            <p className="text-[15px] leading-relaxed text-[var(--muted)]">
                                Ik heb een passie voor gebruiksvriendelijke interfaces, vloeiende interacties en het
                                continu verbeteren van de gebruikerservaring. Ik leer graag nieuwe technieken en zoek
                                altijd naar manieren om websites sneller, duidelijker en prettiger in gebruik te maken.
                            </p>
                            <div className="pt-4">
                                <a className="btn-primary" href="#contact">
                                    Neem contact op
                                    <svg
                                        aria-hidden="true"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M5 12h14" />
                                        <path d="m13 6 6 6-6 6" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-[380px] sm:w-[440px] lg:w-[520px] rounded-full overflow-hidden">
                        <img
                            src="/design-development.png"
                            alt="Design en Development"
                            className="w-full h-full object-cover brightness-60 drop-shadow-xl"
                            loading="lazy"
                        />
                    </div>


                </section>

                <section id="projecten" className="pb-20">
                    <div className="space-y-3 pb-6">
                        <h2 className="text-4xl font-extrabold text-[var(--accent-strong)] sm:text-[44px]">
                            Projecten
                        </h2>
                        <p className="max-w-2xl text-[15px] text-[var(--muted)]">
                            Selectie van werk dat de mix laat zien van design, performance en toegankelijkheid.
                        </p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {allProjects.slice(0, 4).map((project) => {
                            const shortDescription =
                                project.shortDescription ??
                                project.description.split('\n')[0].substring(0, 120) + '...';
                            return (
                                <Link
                                    key={project.slug}
                                    href={`/projecten/${project.slug}` as Route}
                                    className="glass group relative overflow-hidden rounded-2xl border border-white/10 p-4 transition-transform hover:-translate-y-1 flex flex-col cursor-pointer"
                                >
                                    <div className="space-y-3 flex-1">
                                        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white/5 border border-white/5">
                                            <img
                                                src={`/${project.image}`}
                                                alt={project.title}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105 group-hover:rotate-[0.5deg]"
                                            />
                                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-80 group-hover:opacity-90 transition" />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-xl font-extrabold text-[var(--text)]">{project.title}</h3>
                                            <p className="text-[13px] text-[var(--muted)] leading-relaxed">
                                                {shortDescription}{' '}
                                                <span className="text-[12px] text-[var(--accent-strong)] hover:font-bold underline">
                                                    Lees meer →
                                                </span>
                                            </p>
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {project.tech.map((t) => (
                                                    <span
                                                        key={t}
                                                        className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-[var(--text)]"
                                                    >
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 flex gap-2">
                                        {project.liveHref && project.liveHref !== '#' && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (typeof window !== 'undefined') {
                                                        window.open(project.liveHref, '_blank', 'noopener,noreferrer');
                                                    }
                                                }}
                                                className="btn-primary flex-1 h-9 px-3 text-xs justify-center color-[#2c332a] hover:color-[#2c332a] hover:shadow-lg"
                                            >
                                                Live demo
                                            </button>
                                        )}
                                        {project.moreHref && project.moreHref !== '#' && (
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    if (typeof window !== 'undefined') {
                                                        window.open(project.moreHref, '_blank', 'noopener,noreferrer');
                                                    }
                                                }}
                                                className="btn-primary flex-1 h-9 px-3 text-xs justify-center bg-transparent text-[var(--text)] border border-white/20 hover:bg-white/10 hover:text-[#2c332a]"
                                            >
                                                Code
                                            </button>
                                        )}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </section>

                <section id="vaardigheden" className="pb-24">
                    <div className="space-y-3 pb-6">
                        <h2 className="text-3xl font-extrabold text-[var(--text)] sm:text-[36px]">
                            Vaardigheden
                        </h2>
                        <p className="max-w-2xl text-[15px] text-[var(--muted)]">
                            Gericht op solide fundamenten (HTML/CSS/JavaScript), sterke basis in React/Next.js,
                            nette code met Git/GitHub, en praktische UX/UI & AI tooling - altijd met oog voor
                            performance en een soepele ervaring op mobiel en desktop.
                        </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            'Next.js & React',
                            'TypeScript',
                            'HTML & CSS',
                            'JAVASCRIPT',
                            'Tailwind, CSS animaties',
                            'GIT & GITHUB',
                            'UI/UX Design',
                            'AI',
                        ].map((skill) => (
                            <div
                                key={skill}
                                className="glass flex items-center gap-3 rounded-xl px-4 py-3 text-[var(--text)]"
                            >
                                <span className="h-2 w-2 rounded-full bg-[var(--accent-strong)] shadow-[0_0_0_6px_rgba(241,190,33,0.09)]" />
                                <span className="text-[15px] text-[var(--muted)]">{skill}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section
                    id="contact"
                    className="glass flex flex-col gap-3 rounded-2xl px-6 py-6 text-[var(--text)] sm:flex-row sm:items-center sm:justify-between"
                >
                    <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
                            Klaar voor de volgende stap
                        </div>
                        <h3 className="text-2xl font-extrabold">Samen aan de slag?</h3>
                        <p className="text-sm text-[var(--muted)]">
                            Vertel me over je project; ik reageer snel.
                        </p>
                    </div>
                    <a className="btn-primary" href="mailto:altair.doaa1994@hotmail.com">
                        Stuur een bericht
                    </a>
                </section>
            </div>
        </main>
    );
}

