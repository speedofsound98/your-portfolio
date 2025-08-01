'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Home() {
  return (
    <main className="bg-black text-white font-sans leading-relaxed">
      {/* Top-left N.H Home Button */}
      <header className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-black bg-opacity-80 backdrop-blur">
        <Link href="/">
      <span className="text-2xl font-serif italic font-light">N.H</span>
      </Link>
      </header>

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight mb-4">
            Creative Producer. Strategist. Writer.
          </h1>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif mb-4">About</h2>
          <p className="text-gray-300 text-lg">
            I’m an Electrical Engineering and CS student passionate about Cyber Security, Hardware and AI.
            I’ve led creative campaigns, crafted digital narratives, and worked across mediums
            to bring brand stories to life.
          </p>
        </motion.div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-3xl mx-auto px-4 py-24 bg-neutral-900">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif mb-4">Experience</h2>
          <ul className="space-y-4 text-gray-300">
            <li>
              <strong>Company A</strong> – Creative Lead (2021–Present)
            </li>
            <li>
              <strong>Company B</strong> – Content Strategist (2019–2021)
            </li>
          </ul>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="max-w-3xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-serif mb-4">Contact</h2>
          <p className="text-lg text-gray-300">
            Let's connect: <a href="mailto:nadav.hardof@gmail.com" className="underline">nadav.hardof@gmail.com</a>
          </p>
        </motion.div>
      </section>
    </main>
  );
}
