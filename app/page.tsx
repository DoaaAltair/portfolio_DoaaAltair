'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [showCV, setShowCV] = useState(false);
  return (
    <div className="min-h-screen bg-[#022436] text-[#E5E7EB]">
      {/* Header */}
      <header className="w-full">
        <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-12 items-center">
          <div className="col-span-6 sm:col-span-4">
            <Link href="/" aria-label="Ga naar home">
              <Image src="/logo.png" alt="Doaa Altair Logo" width={120} height={40} className="h-10 w-auto" />
            </Link>
          </div>
          <div className="col-span-6 sm:col-span-8 md:col-span-8 flex justify-end items-center gap-6">
            <a href="https://www.linkedin.com/in/doaa-altair-488998195?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" aria-label="LinkedIn" className="w-8 h-8 bg-white rounded flex items-center justify-center shadow hover:scale-105 transition-transform">
              <span className="text-[#022436] font-bold text-sm">in</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-screen-xl mx-auto p-6">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-stretch min-h-[60vh]">
            {/* Photo Column - First on mobile, second on desktop */}
            <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative h-full w-full max-w-none lg:max-w-none flex items-center justify-end overflow-hidden">
                <div className="relative h-full w-full lg:w-auto lg:h-full max-h-[75vh] sm:max-h-[70vh]">
                  {/* Easter egg removed */}
                  <Image src="/portfolio-foto.png" alt="Doaa Altair Profile" width={800} height={800} className="relative z-10 h-full w-auto object-cover pointer-events-none scale-110 sm:scale-100" />
                  {showCV && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="fixed inset-0 z-30 flex items-center justify-center p-4 sm:p-0"
                    >
                      <div className="absolute inset-0 bg-black/40" onClick={() => setShowCV(false)} />
                      <Image
                        src="/portfolio-foto-cv.jpg"
                        alt="CV van Doaa Altair"
                        width={900}
                        height={1200}
                        className="relative cv-grow rounded-xl shadow-[0_0_22px_rgba(14,165,233,0.28)] max-w-[95vw] max-h-[90vh] w-auto h-auto"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
            {/* Text Column - Second on mobile, first on desktop */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="col-span-12 lg:col-span-7 space-y-4 self-center order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white font-russo">Doaa Altair</h1>
              <p className="text-lg sm:text-xl md:text-2xl uppercase text-white/90 font-roboto">FRONTEND DEVELOPER MET EEN PASSIE VOOR DESIGN, CODE & GROEI</p>
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-roboto">IK BOUW MODERNE, GEBRUIKSVRIENDELIJKE WEBSITES DIE TECHNIEK EN CREATIVITEIT COMBINEREN.</p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => {
                    const element = document.getElementById('projecten');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="px-6 py-3 rounded-md border-2 border-[#0EA5E9]/40 text-white shadow-lg hover:bg-[#0EA5E9]/20 transition-colors font-russo cursor-pointer"
                >
                  Bekijk mijn werk
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projecten" className="w-full">
        <div className="max-w-screen-xl mx-auto p-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-left mb-8 sm:mb-10 md:mb-12 font-russo text-white"
          >
            Projecten die ik met trots heb gebouwd
          </motion.h2>

          <div className="grid grid-cols-12 gap-6">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="col-span-12 md:col-span-4 bg-[#002B3A] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <a
                href="https://yahtzee-spel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-xl overflow-hidden block"
                aria-label="Open live versie van Game project"
              >
                <Image
                  src="/yahtzee.png"
                  alt="Game Project"
                  width={640}
                  height={360}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </a>
              <h3 className="text-2xl text-white font-russo pt-4 pb-1 tracking-wide">Game</h3>
              <div className="flex flex-wrap gap-3 pb-2 items-center">
                {[
                  { src: "/html.png", alt: "HTML" },
                  { src: "/css.png", alt: "CSS" },
                  { src: "/js.png", alt: "JavaScript" },
                ].map((logo, index) => (
                  <Image
                    key={`${logo.src}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={28}
                    height={28}
                    className="rounded-md shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-3">
                <Link
                  href="/projecten/yahtzee-spel"
                  className="w-full py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                >
                  Meer info
                </Link>
                <div className="flex justify-between gap-2">
                  <a
                    href="https://yahtzee-spel.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/DoaaAltair/yahtzee-spel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="col-span-12 md:col-span-4 bg-[#002B3A] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <a
                href="https://easter-eggs-beta.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-xl overflow-hidden block"
                aria-label="Open live versie van Easter Egg project"
              >
                <Image
                  src="/enorm.png"
                  alt="Easter Egg Project"
                  width={640}
                  height={360}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </a>
              <h3 className="text-2xl text-white font-russo pt-4 pb-1 tracking-wide">Easter Egg</h3>
              <div className="flex flex-wrap gap-3 pb-2 items-center">
                {[
                  { src: "/react.png", alt: "React" },
                  { src: "/js.png", alt: "JavaScript" },
                  { src: "/html.png", alt: "HTML" },
                  { src: "/css.png", alt: "CSS" },
                ].map((logo, index) => (
                  <Image
                    key={`${logo.src}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={28}
                    height={28}
                    className="rounded-md shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-3">
                <Link
                  href="/projecten/easter-egg"
                  className="w-full py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                >
                  Meer info
                </Link>
                <div className="flex justify-between gap-2">
                  <a
                    href="https://easter-eggs-beta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/DoaaAltair/Easter-Eggs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-12 md:col-span-4 bg-[#002B3A] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <a
                href="https://biljarttafel.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full rounded-xl overflow-hidden block"
                aria-label="Open live versie van Billiards Game project"
              >
                <Image
                  src="/biljardtafel.png"
                  alt="Billiards Game Project"
                  width={640}
                  height={360}
                  className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </a>
              <h3 className="text-2xl text-white font-russo pt-4 pb-1 tracking-wide">Billiards Game</h3>
              <div className="flex flex-wrap gap-3 pb-2 items-center">
                {[
                  { src: "/html.png", alt: "HTML5" },
                  { src: "/js.png", alt: "JavaScript" },
                  { src: "/css.png", alt: "CSS" },
                ].map((logo, index) => (
                  <Image
                    key={`${logo.src}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    width={28}
                    height={28}
                    className="rounded-md shadow-sm"
                  />
                ))}
              </div>
              <div className="flex flex-col gap-2 pt-3">
                <Link
                  href="/projecten/biljarttafel"
                  className="w-full py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                >
                  Meer info
                </Link>
                <div className="flex justify-between gap-2">
                  <a
                    href="https://biljarttafel.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/DoaaAltair/biljarttafel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-lg bg-[#0EA5E9]/10 text-[#E5E7EB] font-russo text-sm hover:bg-[#0EA5E9]/20 hover:scale-105 transition-all duration-300 text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Skills Section */}
      <section className="w-full py-16">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-russo mb-4 drop-shadow-md text-white">
              Technische Vaardigheden
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-roboto">
              Naast mijn frontend-ervaring in HTML, CSS, JAVASCRIPT, React en Next.js beschik ik over extra vaardigheden
              die mij helpen efficiënter, consistenter en creatiever te ontwikkelen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center"
          >
            {[
              { name: 'Tailwind CSS', icon: '/tailwind-logo.png' },
              { name: 'GitHub', icon: '/github-log.png' },
              { name: 'Cursor AI', icon: '/ai-logo.png' },
              { name: 'Figma', icon: '/figma-logo.png' },
              { name: 'VS Code', icon: '/vscode-logo.png' },
              { name: 'Vercel', icon: '/vercel-logo.png' },
              { name: 'mysql', icon: '/mysql-logo.png' },
              { name: 'Responsive Design', icon: '/responsieve-logo.png' },
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300"
              >
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="mb-4 object-contain"
                />
                <p className="text-white font-roboto text-lg">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* "Meer dan alleen code" Section */}
      <section className="w-full relative overflow-visible" >
        <div className="absolute inset-0 bg-[#022436]/75" aria-hidden="true"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-russo mb-4 drop-shadow-md text-white">
              Meer dan alleen code
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto font-roboto">
              Wanneer ik niet aan het coderen ben, breng ik graag tijd door met mijn kind, sport ik of werk ik aan persoonlijke webprojecten. Ik geloof dat een gezonde balans tussen gezin, sport en creativiteit de sleutel is tot groei en innovatie.
            </p>
          </motion.div>
          {/* Right Column - Hobby icon (hidden on mobile) */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-full flex items-center justify-center py-4">
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-screen-xl mx-auto px-6 pt-6"
        >
          <div className="border-t border-white/20 mb-6"></div>
        </motion.div>
        <div className="max-w-screen-xl mx-auto p-6 text-center">
          <p className="text-white/70 font-alumni text-sm">© 2025 – Ontworpen en ontwikkeld door Doaa Altair</p>
        </div>
      </footer>
    </div>
  );
}