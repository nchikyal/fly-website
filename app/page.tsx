"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${sans.className} bg-white text-[#071A33]`}>

      {/* ================= STICKY ANNOUNCEMENT ================= */}

      <div className="sticky top-0 z-50 bg-[#0A2347] text-white border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-3 text-sm">

          <span className="font-semibold text-blue-300">
            Applications Open
          </span>

          <span className="hidden md:inline">
            FLY Corporate Fellowship
          </span>

          <a
            href="/internship"
            className="underline underline-offset-4 hover:text-blue-200 transition"
          >
            Apply →
          </a>

        </div>

      </div>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#071A33] via-[#103058] to-[#1B4C86]">

        {/* Glow */}

        <div className="absolute left-1/2 top-[-200px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT */}

            <motion.div

              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8 }}

            >

              <div className="inline-flex rounded-full bg-white/10 backdrop-blur-lg border border-white/20 px-5 py-2 text-blue-100 text-xs uppercase tracking-[0.3em]">

                International Student-Led Nonprofit

              </div>

              <h1
                className={`${serif.className} mt-10 text-white text-5xl md:text-6xl lg:text-7xl leading-tight`}
              >

                Building the Next Generation of

                <span className="block text-blue-300">
                  Financially Empowered Leaders.
                </span>

              </h1>

              <p className="mt-8 max-w-xl text-lg text-blue-100 leading-relaxed">

                Financial Literacy for Youth (FLY) equips students with
                financial education, leadership experience, and opportunities
                to create meaningful change through chapters, advocacy, and
                the FLY Corporate Fellowship.

              </p>

              <div className="flex flex-wrap gap-5 mt-12">

                <a
                  href="/internship"
                  className="rounded-full bg-[#2F80ED] px-8 py-4 text-white font-semibold shadow-2xl hover:scale-105 transition"
                >
                  Become a Member
                </a>

                <a
                  href="/chapter"
                  className="rounded-full border border-white/30 px-8 py-4 text-white hover:bg-white hover:text-[#071A33] transition"
                >
                  Start a Chapter
                </a>

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div

              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: .9 }}

              className="space-y-6"

            >


              <div className="rounded-3xl bg-[#163F73] border border-blue-400/30 p-8">

                <p className="uppercase tracking-[0.25em] text-xs text-blue-300">
                  Featured Opportunity
                </p>

                <h3 className="mt-4 text-3xl font-semibold text-white">

                  FLY Corporate Fellowship

                </h3>

                <p className="mt-4 text-blue-100 leading-relaxed">

                  Gain real-world experience through leadership,
                  finance, policy, and nonprofit initiatives.

                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>
            {/* ================= WHO WE ARE ================= */}

      <section className="bg-white py-32">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
              className="lg:col-span-7"
            >

              <p className="uppercase tracking-[0.35em] text-[#2F80ED] text-sm font-semibold">
                WHO WE ARE
              </p>

              <h2
                className={`${serif.className} mt-6 text-5xl md:text-6xl leading-tight`}
              >
                Financial literacy
                <br />
                should be a right,
                <br />
                not a privilege.
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600 max-w-2xl">

                Financial Literacy for Youth (FLY) is an international
                student-led nonprofit dedicated to making financial education
                accessible, engaging, and impactful. Through leadership,
                education, and community initiatives, students gain practical
                financial skills while creating meaningful change within their
                schools and communities.

              </p>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="lg:col-span-5"
            >

              <div className="rounded-[36px] bg-gradient-to-br from-[#071A33] to-[#103058] p-10 shadow-2xl">

                <div className="space-y-10">

                  <div className="border-b border-white/10 pb-8">

                    <h3 className="text-white text-2xl font-semibold">
                      Education
                    </h3>

                    <p className="mt-3 text-blue-100 leading-7">
                      Workshops, curriculum, and real-world financial
                      education designed for today's students.
                    </p>

                  </div>

                  <div className="border-b border-white/10 pb-8">

                    <h3 className="text-white text-2xl font-semibold">
                      Leadership
                    </h3>

                    <p className="mt-3 text-blue-100 leading-7">
                      Fellowships, executive positions, chapter leadership,
                      and hands-on nonprofit experience.
                    </p>

                  </div>

                  <div>

                    <h3 className="text-white text-2xl font-semibold">
                      Community Impact
                    </h3>

                    <p className="mt-3 text-blue-100 leading-7">
                      Helping students bring financial literacy to schools
                      across the world through local chapters.
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================= PROGRAMS ================= */}

      <section className="py-32 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[0.35em] text-[#2F80ED] text-sm font-semibold">
              OUR PROGRAMS
            </p>

            <h2
              className={`${serif.className} mt-6 text-5xl md:text-6xl leading-tight`}
            >
              Opportunities
              <br />
              to lead,
              <br />
              learn, and create impact.
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mt-20">

            {/* CARD */}

            <motion.a
              href="/internship"
              whileHover={{ y: -10 }}
              className="group rounded-[32px] border border-gray-200 p-10 bg-white hover:shadow-2xl transition"
            >

              <p className="text-xs uppercase tracking-[0.3em] text-[#2F80ED]">
                Fellowship
              </p>

              <h3 className="mt-8 text-3xl font-semibold group-hover:text-[#103058] transition">

                Corporate Fellowship

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Collaborate on finance,
                operations, outreach,
                research, and nonprofit
                initiatives while building
                professional experience.

              </p>

            </motion.a>

            {/* CARD */}

            <motion.a
              href="/chapter"
              whileHover={{ y: -10 }}
              className="rounded-[32px] bg-[#071A33] text-white p-10 shadow-2xl"
            >

              <p className="uppercase tracking-[0.3em] text-blue-300 text-xs">
                Chapters
              </p>

              <h3 className="mt-8 text-3xl font-semibold">

                Start a Chapter

              </h3>

              <p className="mt-6 text-blue-100 leading-8">

                Bring FLY to your
                school and empower
                students through
                financial education
                and leadership.

              </p>

            </motion.a>

            {/* CARD */}

            <motion.a
              href="/education"
              whileHover={{ y: -10 }}
              className="group rounded-[32px] border border-gray-200 p-10 bg-[#F8FAFC] hover:shadow-2xl transition"
            >

              <p className="uppercase tracking-[0.3em] text-[#2F80ED] text-xs">
                Education
              </p>

              <h3 className="mt-8 text-3xl font-semibold">

                Learning Hub

              </h3>

              <p className="mt-6 text-gray-600 leading-8">

                Explore practical
                financial resources,
                workshops, and
                educational content
                created for students.

              </p>

            </motion.a>

          </div>

        </div>

      </section>
            {/* ================= FEATURED INITIATIVE ================= */}

      <section className="bg-[#071A33] text-white py-32 overflow-hidden relative">

        <div className="absolute inset-0 bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D]" />

        <div className="absolute right-[-200px] top-[-120px] h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute left-[-250px] bottom-[-180px] h-[500px] w-[500px] rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.35em] text-blue-300 text-sm font-semibold">
              FEATURED PROGRAM
            </p>

            <h2 className={`${serif.className} text-5xl md:text-6xl mt-6 leading-tight`}>
              The FLY
              <br />
              Corporate
              <br />
              Fellowship
            </h2>

            <p className="mt-8 text-lg text-blue-100 leading-8 max-w-xl">
              The Corporate Fellowship gives students practical experience
              working on real nonprofit initiatives in finance, operations,
              communications, outreach, and strategic growth while making a
              measurable impact.
            </p>

            <a
              href="/internship"
              className="inline-flex mt-10 rounded-full bg-white text-[#071A33] px-8 py-4 font-semibold hover:scale-105 transition"
            >
              Learn More
            </a>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <div className="rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/10 p-10">

              <div className="space-y-10">

                <div>
                  <h3 className="text-2xl font-semibold">
                    Real Experience
                  </h3>

                  <p className="mt-3 text-blue-100">
                    Build tangible leadership experience while contributing to
                    an international nonprofit.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Meaningful Projects
                  </h3>

                  <p className="mt-3 text-blue-100">
                    Work on outreach, finance, education, partnerships, and
                    organizational growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold">
                    Student Leadership
                  </h3>

                  <p className="mt-3 text-blue-100">
                    Collaborate with ambitious students from different schools
                    and communities.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>



      {/* ================= FINAL CTA ================= */}

      <section className="bg-white py-32">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[0.35em] text-[#2F80ED] text-sm font-semibold">
              JOIN THE MOVEMENT
            </p>

            <h2
              className={`${serif.className} text-5xl md:text-7xl mt-6 leading-tight`}
            >
              Every student
              <br />
              deserves financial
              <br />
              confidence.
            </h2>

            <p className="mt-10 max-w-3xl mx-auto text-xl text-gray-600 leading-9">
              Whether you're interested in becoming a fellow, launching a
              chapter, or supporting financial education in your community,
              there's a place for you at FLY.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mt-14">

              <a
                href="/internship"
                className="rounded-full bg-[#071A33] text-white px-10 py-5 font-semibold hover:bg-[#103058] transition"
              >
                Become a Fellow
              </a>

              <a
                href="/chapter"
                className="rounded-full border border-[#071A33] px-10 py-5 font-semibold hover:bg-[#071A33] hover:text-white transition"
              >
                Start a Chapter
              </a>

            </div>

          </motion.div>

        </div>

      </section>



      {/* ================= FOOTER ================= */}

      <footer className="border-t border-gray-200 bg-[#F8FAFC]">

        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">

          <div>

            <h3 className={`${serif.className} text-3xl`}>
              FLY
            </h3>

            <p className="mt-5 max-w-md text-gray-600 leading-7">
              Financial Literacy for Youth is an international student-led
              nonprofit dedicated to expanding access to financial education
              through leadership, community engagement, and innovation.
            </p>

          </div>

          <div className="grid grid-cols-2 gap-14 text-sm">

            <div>

              <p className="font-semibold mb-4">
                Organization
              </p>

              <div className="space-y-3">

                <a href="/" className="block hover:text-[#103058]">
                  Home
                </a>

                <a href="/education" className="block hover:text-[#103058]">
                  Education
                </a>

                <a href="/internship" className="block hover:text-[#103058]">
                  Fellowship
                </a>

                <a href="/chapter" className="block hover:text-[#103058]">
                  Chapters
                </a>

              </div>

            </div>

            <div>

              <p className="font-semibold mb-4">
                Connect
              </p>

              <div className="space-y-3">

                <a href="mailto:info@fly-initiative.org">
                  Email
                </a>

                <a href="#">
                  Instagram
                </a>

                <a href="#">
                  LinkedIn
                </a>

              </div>

            </div>

          </div>

        </div>

      </footer>
</main>
  );
}
