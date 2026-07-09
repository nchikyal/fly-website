"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${sans.className} bg-white text-[#071A33] overflow-hidden`}>

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef6ff] via-white to-white">

        {/* Background Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-36 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <p className="uppercase tracking-[0.4em] text-sm text-[#103058] font-semibold">
              Student-Led • Nonprofit • National
            </p>

            <h1
              className={`${serif.className} mt-8 text-6xl md:text-8xl leading-none`}
            >
              Building the next
              <br />
              generation of
              <span className="text-[#103058]"> financially empowered leaders.</span>
            </h1>

            <p className="max-w-2xl mx-auto mt-8 text-xl text-gray-600 leading-relaxed">
              Financial Literacy for Youth (FLY) equips students with the
              financial knowledge, leadership experience, and policy engagement
              needed to create lasting impact.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-12">

              <a
                href="/Internship"
                className="rounded-full bg-[#103058] px-8 py-4 text-white font-medium shadow-lg hover:scale-105 transition"
              >
                Get Involved
              </a>

              <a
                href="/education"
                className="rounded-full border border-[#103058] px-8 py-4 text-[#103058] font-medium hover:bg-[#103058] hover:text-white transition"
              >
                Learn More
              </a>

            </div>

          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .3 }}
            className="grid md:grid-cols-3 gap-8 mt-28"
          >

            <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-10">
              <h2 className="text-5xl font-bold text-[#103058]">100+</h2>
              <p className="mt-3 text-gray-500">Students Engaged</p>
            </div>

            <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-10">
              <h2 className="text-5xl font-bold text-[#103058]">5+</h2>
              <p className="mt-3 text-gray-500">Programs & Initiatives</p>
            </div>

            <div className="rounded-3xl bg-white shadow-xl border border-gray-100 p-10">
              <h2 className="text-5xl font-bold text-[#103058]">National</h2>
              <p className="mt-3 text-gray-500">Student Network</p>
            </div>

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-36 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.3em] text-sm text-[#103058] font-semibold">
              ABOUT FLY
            </p>

            <h2 className={`${serif.className} text-5xl mt-6`}>
              Financial education
              <br />
              should be accessible
              <br />
              to every student.
            </h2>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed">
              Financial Literacy for Youth (FLY) is a student-led nonprofit
              committed to expanding access to financial education through
              workshops, internships, policy advocacy, research, and community
              leadership.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            <div className="rounded-3xl bg-[#103058] text-white p-10">
              <h3 className="text-2xl font-semibold">
                Education
              </h3>
              <p className="mt-4 text-white/80">
                Interactive financial literacy programs designed by students for
                students.
              </p>
            </div>

            <div className="rounded-3xl bg-[#eef6ff] p-10">
              <h3 className="text-2xl font-semibold">
                Leadership
              </h3>
              <p className="mt-4 text-gray-600">
                Opportunities through internships, fellowships, executive board
                positions, and local chapters.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-10">
              <h3 className="text-2xl font-semibold">
                Policy
              </h3>
              <p className="mt-4 text-gray-600">
                Research and advocacy supporting stronger financial education
                across New Jersey and beyond.
              </p>
            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
}