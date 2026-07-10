"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${sans.className} bg-[#F8FAFC] text-[#071A33]`}>

      {/* ================= ANNOUNCEMENT BAR ================= */}

      <div className="bg-[#071A33] text-white text-center py-3 px-4 text-sm tracking-wide">
        Applications for the{" "}
        <span className="font-semibold">
          FLY Corporate Fellowship
        </span>{" "}
        are now open.
        <a
          href="/internship"
          className="ml-3 underline underline-offset-4 hover:text-blue-200 transition"
        >
          Apply →
        </a>
      </div>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        {/* Background */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477d]" />

        {/* Glow */}

        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 lg:py-44">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            className="max-w-4xl"
          >

            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 text-xs uppercase tracking-[0.35em] text-blue-100">

              International Student-Led Nonprofit

            </div>

            <h1
              className={`${serif.className} mt-10 text-white text-5xl md:text-7xl lg:text-8xl leading-[0.95]`}
            >
              Building the
              <br />
              next generation
              <br />
              of financially
              <span className="text-blue-300"> empowered leaders.</span>
            </h1>

            <p className="mt-10 max-w-2xl text-lg md:text-xl text-blue-100 leading-relaxed">
              Financial Literacy for Youth (FLY) equips students with practical
              financial knowledge, leadership opportunities, and community
              impact through education, chapters, and the FLY Corporate
              Fellowship.
            </p>

            <div className="flex flex-wrap gap-5 mt-12">

              <a
                href="/internship"
                className="rounded-full bg-white px-8 py-4 text-[#071A33] font-semibold shadow-xl hover:scale-105 transition"
              >
                Join FLY
              </a>

              <a
                href="/chapter"
                className="rounded-full border border-white/30 px-8 py-4 text-white backdrop-blur hover:bg-white hover:text-[#071A33] transition"
              >
                Start a Chapter
              </a>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ================= IMPACT PREVIEW ================= */}

      <section className="-mt-20 relative z-20 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white shadow-2xl p-8"
          >
            <h2 className="text-5xl font-bold text-[#103058]">
              5+
            </h2>

            <p className="mt-3 text-gray-500">
              International Chapters
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white shadow-2xl p-8"
          >
            <h2 className="text-5xl font-bold text-[#103058]">
              100+
            </h2>

            <p className="mt-3 text-gray-500">
              Students Impacted
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white shadow-2xl p-8"
          >
            <h2 className="text-5xl font-bold text-[#103058]">
              2026
            </h2>

            <p className="mt-3 text-gray-500">
              Founded
            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-white shadow-2xl p-8"
          >
            <h2 className="text-5xl font-bold text-[#103058]">
              Student
            </h2>

            <p className="mt-3 text-gray-500">
              Led Organization
            </p>

          </motion.div>

        </div>

      </section>

    </main>
  );
}