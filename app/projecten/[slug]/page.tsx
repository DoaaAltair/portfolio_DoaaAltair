'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { use } from "react";
import { getProjectBySlug } from "@/app/data/projects";

type Props = {
    params: Promise<{ slug: string }>;
};

export default function ProjectDetailPage({ params }: Props) {
    const { slug } = use(params);
    const project = getProjectBySlug(slug);

    if (!project) {
        return (
            <div className="min-h-screen bg-[#022A3A] text-[#E5E7EB] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-russo mb-4">Project niet gevonden</h1>
                    <Link href="/" className="text-[#0EA5E9] hover:underline">
                        Terug naar home
                    </Link>
                </div>
            </div>
        );
    }

    const techFileMap: Record<string, string> = {
        HTML: "/html.png",
        CSS: "/css.png",
        JS: "/js.png",
        React: "/react.png",
    };

    return (
        <div className="min-h-screen relative text-[#E5E7EB]">
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#031E2A] via-[#022A3A] to-[#031E2A]" />
            <div className="pointer-events-none absolute -z-10 inset-0 [mask-image:radial-gradient(70%_50%_at_50%_0%,black,transparent)]">
                <div className="mx-auto h-64 w-[90%] max-w-5xl blur-3xl bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.18),transparent_60%)]" />
            </div>

            {/* Header */}
            <header className="w-full sticky top-0 z-20">
                <div className="max-w-screen-xl mx-auto p-4 sm:p-6 grid grid-cols-12 items-center">
                    <div className="col-span-6 sm:col-span-4">
                        <Link href="/" aria-label="Ga naar home">
                            <Image
                                src="/logo.png"
                                alt="Doaa Altair Logo"
                                width={120}
                                height={40}
                                className="h-9 w-auto sm:h-10"
                            />
                        </Link>
                    </div>
                    <div className="col-span-6 sm:col-span-8 md:col-span-8 flex justify-end items-center gap-3 sm:gap-6">
                        <a
                            href="https://www.linkedin.com/in/doaa-altair-488998195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank"
                            aria-label="LinkedIn"
                            className="w-8 h-8 bg-white rounded flex items-center justify-center shadow hover:scale-105 transition-transform"
                        >
                            <span className="text-[#022436] font-bold text-sm">in</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Project Detail */}
            <section className="w-full">
                <div className="max-w-screen-xl mx-auto p-6">
                    <nav className="mb-5 text-white/60 text-xs sm:text-sm" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2">
                            <li>
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            </li>
                            <li className="opacity-50">/</li>
                            <li>
                                <Link href="/#projecten" className="hover:text-white transition-colors">Projecten</Link>
                            </li>
                            <li className="opacity-50">/</li>
                            <li className="text-white line-clamp-1 max-w-[60vw] sm:max-w-none">{project.title}</li>
                        </ol>
                    </nav>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 gap-8 pt-2"
                    >
                        {/* Left Column - Content */}
                        <div className="space-y-6">
                            {/* Title Section */}
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-white font-russo mb-2 tracking-tight">
                                        {project.title}
                                    </h1>
                                    {project.subtitle && (
                                        <p className="text-white/70 text-base font-roboto">{project.subtitle}</p>
                                    )}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-[0_0_24px_rgba(14,165,233,0.15)]">
                                <h2 className="text-xl font-russo text-white mb-3">Over dit project</h2>
                                <p className="text-white/85 text-base sm:text-lg leading-relaxed whitespace-pre-line font-roboto">
                                    {project.description}
                                </p>
                            </div>

                            {/* Technologies */}
                            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-[0_0_24px_rgba(14,165,233,0.15)]">
                                <h2 className="text-xl font-russo text-white mb-4">Technologieën</h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.tech.map((t) => {
                                        const fileName = techFileMap[t];
                                        return (
                                            <div key={t} className="flex items-center gap-2 bg-white/10 rounded-xl px-4 py-2.5 border border-white/10 hover:border-[#0EA5E9]/40 transition-colors">
                                                <Image
                                                    src={fileName}
                                                    alt={`${t} icon`}
                                                    width={22}
                                                    height={22}
                                                    className="opacity-95"
                                                />
                                                <span className="text-white/85 font-roboto text-sm">{t}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                {project.liveHref && project.liveHref !== "#" && (
                                    <a
                                        href={project.liveHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-white/10 bg-white/5 text-white font-russo text-sm sm:text-base hover:border-[#0EA5E9]/40 hover:bg-[#0EA5E9]/15 hover:scale-[1.01] transition-all duration-300"
                                    >
                                        <span className="opacity-90">Live Demo</span>
                                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                    </a>
                                )}
                                {project.moreHref && project.moreHref !== "#" && (
                                    <a
                                        href={project.moreHref}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-white/10 text-white font-russo text-sm sm:text-base hover:border-[#0EA5E9]/40 hover:bg-white/5 hover:scale-[1.01] transition-all duration-300"
                                    >
                                        <span className="opacity-90">Code</span>
                                        <span className="transition-transform group-hover:translate-x-0.5">→</span>
                                    </a>
                                )}
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
}

