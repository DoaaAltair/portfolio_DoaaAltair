'use client';

import Link from 'next/link';

type Section = {
    id: string;
    label: string;
};

type Props = {
    sections: Section[];
    activeSection: string;
};

export default function NavBar({ sections, activeSection }: Props) {
    return (
        <header className="flex items-center justify-between py-5">
            <nav className="flex items-center gap-6 sm:gap-8">
                {sections.map((section) => (
                    <Link
                        key={section.id}
                        href={`/#${section.id}`}
                        className={`nav-link ${activeSection === section.id ? 'is-active' : ''}`}
                    >
                        {section.label}
                    </Link>
                ))}
            </nav>

            <div className="flex items-center gap-3 text-[var(--muted)]">
                {[
                    {
                        href: 'https://vercel.com/doaa1devs-projects',
                        label: 'Vercel',
                        src: '/vercel.svg',
                    },
                    {
                        href: 'https://www.linkedin.com/in/doaa-altair',
                        label: 'LinkedIn',
                        src: '/linkedin.svg',
                    },
                    {
                        href: 'https://github.com/DoaaAltair',
                        label: 'GitHub',
                        src: '/github.svg',
                    },
                ].map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="glass h-10 w-10 rounded-full grid place-items-center text-[var(--text)] hover:text-[var(--bg)] hover:bg-[var(--text)] transition-colors"
                        aria-label={item.label}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={item.src}
                            alt={item.label}
                            width={20}
                            height={20}
                            className="h-5 w-5"
                            loading="lazy"
                        />
                    </a>
                ))}
            </div>
        </header>
    );
}

