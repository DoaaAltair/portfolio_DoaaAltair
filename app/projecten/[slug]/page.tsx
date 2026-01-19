'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { getProjectBySlug } from '../../data/projects';
import NavBar from '../../components/NavBar';
import ProjectDescription from '../../components/ProjectDescription';
import Link from 'next/link';

type Props = {
  params: { slug: string };
};

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);
  const { scrollYProgress } = useScroll();

  const sections = [
    { id: 'over', label: 'Over' },
    { id: 'projecten', label: 'Projecten' },
    { id: 'vaardigheden', label: 'Vaardigheden' },
  ];

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] grid place-items-center">
        <div className="glass p-6 rounded-2xl">
          <h1 className="text-3xl font-bold mb-4">Project niet gevonden</h1>
          <Link href="/" className="text-[var(--accent-strong)] underline">
            Terug naar home
          </Link>
        </div>
      </div>
    );
  }

  // FOTO VERDWIJNT BIJ SCROLL
  const imgOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.85]);
  const imgY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);

  return (
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] overflow-hidden">

      {/* NAV */}
      <div className="fixed top-0 left-0 right-0 z-30 bg-[var(--bg)]/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <NavBar sections={sections} activeSection="projecten" />
        </div>
      </div>

      <main className="pt-28 pb-40 max-w-4xl mx-auto px-6 relative z-10">

        {/* ---------- PROJECT FOTO (KLEINER) ---------- */}
        <motion.div
          style={{ opacity: imgOpacity, scale: imgScale, y: imgY }}
          className="flex justify-center"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 max-w-xl w-full">
            <img
              src={`/${project.image}`}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* ---------- TEKST DIRECT ONDER FOTO ---------- */}
        <div className="mt-12 max-w-3xl mx-auto text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold" style={{ color: '#1F2A1E' }}>
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-lg text-[var(--muted)]">{project.subtitle}</p>
          )}

          <ProjectDescription description={project.description} />

          {/* ---------- BUTTONS ---------- */}
          <div className="flex gap-4 pt-4">
            {project.liveHref !== '#' && (
              <a href={project.liveHref} target="_blank" className="btn-primary">
                Live demo →
              </a>
            )}

            {project.moreHref !== '#' && (
              <a
                href={project.moreHref}
                target="_blank"
                className="btn-primary bg-transparent border border-white/20 hover:bg-white/10"
              >
                Code →
              </a>
            )}
          </div>
        </div>

        {/* ---------- TECHNOLOGIEËN ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-28 glass rounded-2xl p-6 border border-white/10 shadow-xl text-left"
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: '#a4775a' }}>
            Technologieën
          </h2>

          <div className="flex flex-wrap gap-3">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-white/5 border border-white/20"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>

      </main>
    </div>
  );
}
