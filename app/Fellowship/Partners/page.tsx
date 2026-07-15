"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Partners() {
  return (
    <main className={`${sans.className} bg-[#F8FAFC] text-[#071A33]`}>

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D] text-white">

        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-32 left-0 h-[420px] w-[420px] rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <p className="uppercase tracking-[0.35em] text-blue-200 text-sm">
              FLY Corporate Strategy Fellowship
            </p>

            <h1
              className={`${serif.className} mt-6 text-5xl md:text-7xl leading-tight`}
            >
              Partner with
              <br />
              the Next Generation
              <br />
              of Leaders.
            </h1>

            <p className="mt-8 max-w-3xl text-lg text-blue-100 leading-relaxed">
              Through the FLY Corporate Strategy Fellowship, organizations work
              with ambitious high school students on meaningful consulting
              projects while helping develop the next generation of business
              leaders.
            </p>

            <a
              href="YOUR_PARTNER_FORM"
              target="_blank"
              className="inline-block mt-10 rounded-full bg-white px-10 py-4 text-[#071A33] font-semibold hover:scale-105 transition"
            >
              Become a Partner
            </a>

          </motion.div>

        </div>

      </section>

      {/* WHY PARTNER */}

      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-sm text-[#103058] font-semibold">
              Why Partner?
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Student Talent. Fresh Perspectives.
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Fellows work alongside your organization on strategic projects
              while gaining practical experience under your guidance.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">

            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">
                Strategic Research
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Receive market research, competitor analysis, customer insights,
                and industry research prepared by motivated student fellows.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">
                Marketing Support
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Collaborate with fellows on branding, social media strategy,
                outreach campaigns, and audience growth initiatives.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">
                Business Analysis
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Fellows can develop financial outlooks, analyze performance
                metrics, and identify strategic opportunities.
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-gray-200 p-8 shadow-lg">
              <h3 className="text-2xl font-semibold">
                Professional Deliverables
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Every project concludes with polished presentations, reports,
                and recommendations your organization can implement.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="py-28 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-sm text-[#103058] font-semibold">
              Partnership Process
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              How It Works
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8 mt-16">

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2F80ED]">
                Step 1
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Apply
              </h3>

              <p className="mt-4 text-gray-600">
                Submit a partnership application describing your organization.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2F80ED]">
                Step 2
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Match
              </h3>

              <p className="mt-4 text-gray-600">
                We match your organization with qualified student fellows.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2F80ED]">
                Step 3
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Collaborate
              </h3>

              <p className="mt-4 text-gray-600">
                Fellows work on agreed-upon projects throughout the cohort.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#2F80ED]">
                Step 4
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                Deliver
              </h3>

              <p className="mt-4 text-gray-600">
                Receive reports, presentations, and strategic recommendations.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* IDEAL PARTNERS */}

      <section className="py-28 px-6 bg-[#071A33] text-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-blue-300 text-sm">
              Organizations We Work With
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Ideal Corporate Partners
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-semibold">
                Startups
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-semibold">
                Nonprofits
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-semibold">
                Small Businesses
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-8">
              <h3 className="text-2xl font-semibold">
                Corporate Teams
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-32 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-[#103058] text-sm font-semibold">
            Build the Future
          </p>

          <h2 className={`${serif.className} mt-6 text-5xl`}>
            Become a Corporate Partner
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Help students gain meaningful professional experience while your
            organization benefits from innovative ideas, strategic research,
            and motivated young talent.
          </p>

          <a
            href="YOUR_PARTNER_FORM"
            target="_blank"
            className="inline-block mt-10 rounded-full bg-[#071A33] px-10 py-4 text-white font-semibold hover:scale-105 transition"
          >
            Partner With FLY
          </a>

        </div>

      </section>

    </main>
  );
}