"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Fellowship() {
  return (
    <main className={`${sans.className} bg-[#F8FAFC] text-[#071A33]`}>

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D] text-white">

        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-28">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <p className="uppercase tracking-[0.35em] text-blue-200 text-sm">
              FLY Corporate Strategy Fellowship
            </p>

            <h1
              className={`${serif.className} mt-6 text-5xl md:text-7xl leading-tight`}
            >
              Become a
              <br />
              High School Corporate Strategy Fellow.
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-blue-100 leading-relaxed">
              Work directly with businesses and nonprofit organizations on
              real consulting projects while developing leadership,
              communication, and strategic thinking skills.
            </p>

            <a
              href="YOUR_APPLICATION_LINK"
              target="_blank"
              className="inline-block mt-10 px-10 py-4 rounded-full bg-white text-[#071A33] font-semibold hover:scale-105 transition"
            >
              Apply Now
            </a>

          </motion.div>

        </div>

      </section>
{/* ================= WHY JOIN ================= */}

<section className="py-28 px-6 bg-white">

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

    <div>

      <p className="uppercase tracking-[0.35em] text-sm text-[#2F80ED] font-semibold">
        Why Join?
      </p>

      <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl leading-tight`}>
        Real Business
        <br />
        Experience.
        <br />
        Before College.
      </h2>

      <p className="mt-8 text-lg text-gray-600 leading-relaxed">
        The FLY Corporate Strategy Fellowship connects ambitious high school
        students with businesses and nonprofit organizations to solve real
        strategic challenges. Fellows gain hands-on experience, collaborate
        with professionals, and build a portfolio of meaningful work while
        developing leadership, communication, and analytical skills.
      </p>

    </div>


    <div className="grid gap-6">

      <div className="rounded-3xl bg-[#071A33] text-white p-8">

        <h3 className="text-2xl font-semibold">
          Completely Free
        </h3>

        <p className="mt-3 text-white/70">
          There are no application fees or program costs to participate.
        </p>

      </div>

      <div className="rounded-3xl bg-[#EAF3FF] p-8">

        <h3 className="text-2xl font-semibold text-[#071A33]">
          Fully Virtual
        </h3>

        <p className="mt-3 text-gray-600">
          Collaborate remotely with organizations from anywhere.
        </p>

      </div>

      <div className="rounded-3xl border border-gray-200 p-8">

        <h3 className="text-2xl font-semibold">
          Designed for High School Students
        </h3>

        <p className="mt-3 text-gray-600">
          Gain professional experience before entering college or internships.
        </p>

      </div>

    </div>

  </div>

</section>
      {/* WHAT YOU'LL DO */}

<section className="py-28 px-6">

  <div className="max-w-6xl mx-auto">

    <div className="text-center">

      <p className="uppercase tracking-[0.35em] text-[#103058] text-sm font-semibold">
        Fellowship Experience
      </p>

      <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
        Work on Real Business Challenges
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
        Fellows are matched with corporate partners to contribute to
        meaningful strategic initiatives while building practical business
        experience through collaborative consulting projects.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      {/* Marketing */}

      <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8 hover:-translate-y-2 transition">

        <h3 className="text-2xl font-semibold">
          Marketing & Social Media Strategy
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Develop marketing campaigns, identify target audiences, and create
          strategies that help organizations grow their reach.
        </p>

      </div>

      {/* Market/Data */}

      <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8 hover:-translate-y-2 transition">

        <h3 className="text-2xl font-semibold">
          Market & Data Analysis
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Conduct market research, evaluate competitors, analyze trends, and
          transform data into actionable business insights.
        </p>

      </div>

      {/* Financial */}

      <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8 hover:-translate-y-2 transition">

        <h3 className="text-2xl font-semibold">
          Financial Outlooks
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Explore revenue projections, budgeting considerations, and financial
          opportunities that support long-term organizational growth.
        </p>

      </div>

      {/* Pitch Decks */}

      <div className="rounded-3xl bg-white border border-gray-100 shadow-lg p-8 hover:-translate-y-2 transition md:col-span-2">

        <h3 className="text-2xl font-semibold">
          Professional Pitch Decks & Presentations
        </h3>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Create polished presentations that communicate research findings,
          strategic recommendations, and business proposals to corporate
          partners and stakeholders.
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= PROGRAM BENEFITS ================= */}

<section className="py-28 px-6 bg-[#F8FAFC]">

  <div className="max-w-6xl mx-auto">

    <div className="text-center">

      <p className="uppercase tracking-[0.35em] text-sm text-[#103058] font-semibold">
        Program Benefits
      </p>

      <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
        More Than Just an Internship
      </h2>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
        Fellows leave with tangible experience, professional skills, and a
        portfolio that demonstrates real business impact.
      </p>

    </div>


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

        <h3 className="text-2xl font-semibold">
          Capstone Portfolio
        </h3>

        <p className="mt-4 text-gray-600">
          Build a professional portfolio showcasing the consulting projects,
          research, presentations, and strategic work you complete.
        </p>

      </div>


      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

        <h3 className="text-2xl font-semibold">
          Professional Experience
        </h3>

        <p className="mt-4 text-gray-600">
          Work with businesses and nonprofits on projects that create measurable
          value and practical experience.
        </p>

      </div>


      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

        <h3 className="text-2xl font-semibold">
          Leadership Development
        </h3>

        <p className="mt-4 text-gray-600">
          Strengthen communication, teamwork, problem-solving, and project
          management skills.
        </p>

      </div>


      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

        <h3 className="text-2xl font-semibold">
          Resume Builder
        </h3>

        <p className="mt-4 text-gray-600">
          Showcase meaningful consulting experience when applying for college,
          internships, scholarships, and future opportunities.
        </p>

      </div>


      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8">

        <h3 className="text-2xl font-semibold">
          Flexible Participation
        </h3>

        <p className="mt-4 text-gray-600">
          Participate during the Fall, Spring, or Summer cohort based on your
          schedule.
        </p>

      </div>


      <div className="bg-[#071A33] text-white rounded-3xl shadow-xl p-8">

        <h3 className="text-2xl font-semibold">
          Continue Growing
        </h3>

        <p className="mt-4 text-white/70">
          Fellows may reapply for future cohorts to continue working with
          organizations and expand their professional portfolio.
        </p>

      </div>

    </div>

  </div>

</section>
{/* ================= COHORTS ================= */}

<section className="py-28 px-6 bg-[#F8FAFC]">

  <div className="max-w-6xl mx-auto">

    <div className="text-center max-w-3xl mx-auto">

      <p className="uppercase tracking-[0.35em] text-sm text-[#103058] font-semibold">
        Fellowship Cohorts
      </p>

      <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
        Choose a Cohort That Fits Your Schedule
      </h2>

      <p className="mt-6 text-lg text-gray-600 leading-relaxed">
        The FLY Corporate Strategy Fellowship is offered throughout the year,
        allowing students to participate during the fall, spring, or summer.
        Fellows may reapply for future cohorts to continue building their
        professional experience.
      </p>

    </div>

    <div className="grid md:grid-cols-3 gap-8 mt-16">

      {/* FALL */}

      <div className="rounded-3xl bg-white border border-gray-200 shadow-lg p-10">

        <p className="uppercase tracking-[0.3em] text-xs text-[#2F80ED] font-semibold">
          Fall Cohort
        </p>

        <h3 className="mt-5 text-3xl font-semibold">
          September 5
        </h3>

        <p className="text-gray-500">
          through December 21
        </p>

        <div className="mt-8 border-t pt-6">

          <p className="text-gray-600">
            Perfect for students looking to gain consulting experience during
            the academic year while balancing school commitments.
          </p>

        </div>

      </div>

      {/* SPRING */}

      <div className="rounded-3xl bg-[#071A33] text-white shadow-xl p-10">

        <p className="uppercase tracking-[0.3em] text-xs text-blue-300 font-semibold">
          Spring Cohort
        </p>

        <h3 className="mt-5 text-3xl font-semibold">
          January 5
        </h3>

        <p className="text-white/70">
          through May 21
        </p>

        <div className="mt-8 border-t border-white/10 pt-6">

          <p className="text-white/70">
            Continue building your professional portfolio while working on
            real projects alongside corporate partners.
          </p>

        </div>

      </div>

      {/* SUMMER */}

      <div className="rounded-3xl bg-white border border-gray-200 shadow-lg p-10">

        <p className="uppercase tracking-[0.3em] text-xs text-[#2F80ED] font-semibold">
          Summer Cohort
        </p>

        <h3 className="mt-5 text-3xl font-semibold">
          June 1
        </h3>

        <p className="text-gray-500">
          through September 1
        </p>

        <div className="mt-8 border-t pt-6">

          <p className="text-gray-600">
            Applications are reviewed on a rolling basis, making summer an
            excellent opportunity for students with greater availability.
          </p>

        </div>

      </div>

    </div>

    {/* Bottom Note */}

    <div className="mt-14 rounded-3xl bg-[#EAF3FF] border border-[#D5E7FF] p-8 text-center">

      <h3 className="text-2xl font-semibold">
        Continue Your Fellowship Journey
      </h3>

      <p className="mt-4 max-w-3xl mx-auto text-gray-600 leading-relaxed">
        Fellows are encouraged to apply for multiple cohorts. Participants may
        continue working with the same corporate partner (subject to
        availability and performance) or request placement with a new
        organization to broaden their consulting experience and expand their
        professional portfolio.
      </p>

    </div>

  </div>

</section>
{/* ================= FINAL CTA ================= */}

<section className="py-32 px-6 bg-[#071A33] text-white">

  <div className="max-w-4xl mx-auto text-center">

    <p className="uppercase tracking-[0.35em] text-sm text-blue-300 font-semibold">
      Join the Next Cohort
    </p>

    <h2 className={`${serif.className} mt-6 text-4xl md:text-6xl leading-tight`}>
      Ready to gain
      <br />
      real-world business experience?
    </h2>

    <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
      Join a community of ambitious students working alongside businesses and
      nonprofit organizations to solve real challenges, develop professional
      skills, and create measurable impact through strategic consulting.
    </p>

    <div className="mt-12 flex justify-center">

      <a
        href="YOUR_APPLICATION_LINK"
        target="_blank"
        className="rounded-full bg-white px-10 py-4 text-[#071A33] font-semibold shadow-xl hover:scale-105 transition"
      >
        Apply Now
      </a>

    </div>

  </div>

</section>

    </main>
  );
}