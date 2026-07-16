"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Partners() {
  return (
    
<main className={`${sans.className} bg-[#F8FAFC] text-[#071A33]`}>

  {/* ================= HERO ================= */}

  <section className="relative overflow-hidden bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D] text-white">

    {/* Background Glow */}
    <div className="absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-blue-400/10 blur-3xl" />
    <div className="absolute -bottom-32 left-0 h-[420px] w-[420px] rounded-full bg-blue-300/10 blur-3xl" />

    <div className="relative max-w-6xl mx-auto px-6 py-32">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="max-w-4xl"
      >

        <p className="uppercase tracking-[0.35em] text-blue-200 text-sm font-semibold">
          FLY Corporate Strategy Fellowship
        </p>

        <h1 className={`${serif.className} mt-6 text-5xl md:text-7xl leading-[0.95]`}>
          Partner With
          <br />
          FLY.
        </h1>

        <p className="mt-8 max-w-3xl text-lg md:text-xl text-blue-100 leading-relaxed">
          The FLY Corporate Strategy Fellowship connects organizations with
          highly motivated high school students who contribute to strategic
          business projects while developing real-world professional skills.
          Every fellowship is supervised by the FLY Executive Board, allowing
          organizations to receive valuable project deliverables with minimal
          administrative commitment.
        </p>

        <div className="flex flex-wrap gap-5 mt-12">

          <a
            href="https://forms.gle/Tch8pk3MgW1TUP5t8"
            target="_blank"
            className="rounded-full bg-white px-8 py-4 text-[#071A33] font-semibold shadow-xl hover:scale-105 transition"
          >
            Register for a Consultation
          </a>

          <a
            href="#partnership-model"
            className="rounded-full border border-white/30 px-8 py-4 hover:bg-white hover:text-[#071A33] transition"
          >
            Learn More
          </a>

        </div>

      </motion.div>

    </div>

  </section>



  {/* ================= WHY PARTNER ================= */}

  <section className="py-28 px-6">

    <div className="max-w-6xl mx-auto">

      <div className="text-center max-w-3xl mx-auto">

        <p className="uppercase tracking-[0.35em] text-sm text-[#2F80ED] font-semibold">
          Partnership Benefits
        </p>

        <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
          Fresh Perspectives.
          <br />
          Real Deliverables.
        </h2>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          Fellows work directly on strategic initiatives identified by your
          organization, creating practical deliverables while gaining valuable
          professional experience.
        </p>

      </div>


      <div className="grid md:grid-cols-2 gap-8 mt-16">


        {/* Marketing */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white shadow-xl border border-gray-100 p-10"
        >

          <h3 className="text-2xl font-semibold">
            Marketing & Communications
          </h3>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Fellows can assist with marketing strategy, audience research,
            branding initiatives, outreach campaigns, and social media planning
            to help strengthen your organization's public presence.
          </p>

        </motion.div>



        {/* Market Research */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white shadow-xl border border-gray-100 p-10"
        >

          <h3 className="text-2xl font-semibold">
            Market & Competitive Research
          </h3>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Receive competitor analyses, market research, industry trend
            reports, customer insights, and strategic recommendations that
            support informed decision-making.
          </p>

        </motion.div>



        {/* Financial */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-white shadow-xl border border-gray-100 p-10"
        >

          <h3 className="text-2xl font-semibold">
            Financial & Business Analysis
          </h3>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Fellows contribute budgeting research, financial outlooks, growth
            opportunities, operational analyses, and business planning
            resources tailored to your organization's goals.
          </p>

        </motion.div>



        {/* Deliverables */}

        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl bg-[#071A33] text-white shadow-xl p-10"
        >

          <h3 className="text-2xl font-semibold">
            Professional Deliverables
          </h3>

          <p className="mt-5 text-white/80 leading-relaxed">
            Every project concludes with polished reports, presentations,
            executive summaries, or pitch decks that your organization can use
            internally for planning, discussion, and future initiatives.
          </p>

        </motion.div>

      </div>

    </div>

  </section>
        {/* ================= PARTNERSHIP MODEL ================= */}

      <section
        id="partnership-model"
        className="py-28 px-6 bg-[#071A33] text-white"
      >

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-sm text-blue-300 font-semibold">
              Partnership Model
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Designed to Be
              <br />
              Simple & Collaborative
            </h2>

            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Organizations aren't expected to manage students or create
              internship programs. FLY coordinates the fellowship while your
              team provides guidance on a meaningful project.
            </p>

          </div>


          <div className="grid md:grid-cols-4 gap-8 mt-20">


            {/* STEP 1 */}

            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-blue-300">
                Step 1
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Consultation
              </h3>

              <p className="mt-4 text-white/70 leading-relaxed">
                Meet with the FLY Executive Board to discuss your organization,
                current priorities, and identify a project that would create
                meaningful value.
              </p>

            </div>



            {/* STEP 2 */}

            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-blue-300">
                Step 2
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Fellow Matching
              </h3>

              <p className="mt-4 text-white/70 leading-relaxed">
                We carefully match fellows based on their interests,
                experience, and the skills most relevant to your project.
              </p>

            </div>



            {/* STEP 3 */}

            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-blue-300">
                Step 3
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Project Development
              </h3>

              <p className="mt-4 text-white/70 leading-relaxed">
                Fellows work collaboratively throughout the cohort while your
                organization provides occasional feedback and direction when
                appropriate.
              </p>

            </div>



            {/* STEP 4 */}

            <div>

              <p className="uppercase tracking-[0.3em] text-xs text-blue-300">
                Step 4
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Final Presentation
              </h3>

              <p className="mt-4 text-white/70 leading-relaxed">
                At the conclusion of the fellowship, fellows present their
                completed recommendations, research, and deliverables to your
                organization.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= PROFESSIONAL OVERSIGHT ================= */}

      <section className="py-28 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-sm text-[#2F80ED] font-semibold">
              Professional Oversight
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Built Around
              <br />
              Quality & Simplicity
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              The fellowship is structured so organizations can focus on their
              projects while the FLY Executive Board manages fellowship
              logistics, communication, and student support.
            </p>

          </div>



          <div className="grid md:grid-cols-2 gap-8 mt-16">


            <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-10">

              <h3 className="text-2xl font-semibold">
                Executive Board Management
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                The FLY Executive Board oversees fellow onboarding, monitors
                progress throughout the cohort, facilitates communication, and
                serves as the primary point of contact for partner
                organizations.
              </p>

            </div>



            <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-10">

              <h3 className="text-2xl font-semibold">
                Educational Fellowship
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                The Corporate Strategy Fellowship is designed as an educational
                experience that allows students to develop consulting,
                analytical, and communication skills through real-world
                projects.
              </p>

            </div>



            <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-10">

              <h3 className="text-2xl font-semibold">
                Confidentiality
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Fellows are expected to maintain confidentiality regarding any
                non-public information shared during their projects. Additional
                confidentiality agreements may be implemented whenever
                appropriate.
              </p>

            </div>



            <div className="rounded-3xl bg-[#F8FAFC] border border-gray-200 p-10">

              <h3 className="text-2xl font-semibold">
                Independent Decision-Making
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Project deliverables are intended to support organizational
                planning and discussion. Decisions regarding implementation
                remain solely with each partner organization.
              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ================= COMMITMENT ================= */}

      <section className="py-28 px-6 bg-[#F8FAFC]">

        <div className="max-w-6xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-sm text-[#2F80ED] font-semibold">
              Time Commitment
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Designed for Busy Organizations
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We understand that your team has limited time. The fellowship is
              intentionally structured so organizations receive valuable work
              while maintaining minimal administrative involvement.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-3xl bg-white border border-gray-200 shadow-lg p-10">

              <h3 className="text-2xl font-semibold">
                Initial Consultation
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Meet with the FLY Executive Board to discuss your organization,
                identify project goals, and determine how fellows can best
                support your needs.
              </p>

            </div>


            <div className="rounded-3xl bg-[#071A33] text-white shadow-xl p-10">

              <h3 className="text-2xl font-semibold">
                Periodic Check-ins
              </h3>

              <p className="mt-4 text-white/75 leading-relaxed">
                Throughout the cohort, organizations provide occasional
                feedback and answer project-related questions while FLY manages
                all fellowship logistics.
              </p>

            </div>


            <div className="rounded-3xl bg-white border border-gray-200 shadow-lg p-10">

              <h3 className="text-2xl font-semibold">
                Final Presentation
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Fellows present completed research, recommendations, and final
                deliverables for your organization to review and utilize.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ================= ORGANIZATIONS ================= */}

      <section className="py-28 px-6 bg-[#071A33] text-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-sm text-blue-300">
              Who We Work With
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Organizations We Collaborate With
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-white/70">
              The Corporate Strategy Fellowship supports organizations across
              a variety of industries that are interested in mentoring student
              leaders while receiving strategic project support.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-3xl bg-white/10 p-10">
              <h3 className="text-2xl font-semibold">
                Startups
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-10">
              <h3 className="text-2xl font-semibold">
                Small Businesses
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-10">
              <h3 className="text-2xl font-semibold">
                Nonprofit Organizations
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-10">
              <h3 className="text-2xl font-semibold">
                Educational Organizations
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-10">
              <h3 className="text-2xl font-semibold">
                Community Organizations
              </h3>
            </div>

            <div className="rounded-3xl bg-white/10 p-10">
              <h3 className="text-2xl font-semibold">
                Social Enterprises
              </h3>
            </div>

          </div>

        </div>

      </section>



      {/* ================= FAQ ================= */}

      <section className="py-28 px-6 bg-white">

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-sm text-[#2F80ED] font-semibold">
              Frequently Asked Questions
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Common Questions
            </h2>

          </div>


          <div className="space-y-8 mt-16">

            <div className="border-b pb-8">
              <h3 className="text-2xl font-semibold">
                How much time is required?
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Most organizations participate through an initial consultation,
                occasional project feedback, and a final presentation at the
                conclusion of the cohort.
              </p>
            </div>


            <div className="border-b pb-8">
              <h3 className="text-2xl font-semibold">
                Do we supervise the fellows?
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                No. The FLY Executive Board oversees onboarding, communication,
                project coordination, and student support throughout the
                fellowship.
              </p>
            </div>


            <div className="border-b pb-8">
              <h3 className="text-2xl font-semibold">
                Is there a cost to participate?
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                No. The Corporate Strategy Fellowship is offered at no cost to
                participating organizations.
              </p>
            </div>


            <div>
              <h3 className="text-2xl font-semibold">
                Are fellows providing professional consulting services?
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Fellowship deliverables are developed as educational resources
                that support discussion, planning, and strategic thinking.
                Organizations retain full discretion regarding the use or
                implementation of recommendations.
              </p>
            </div>

          </div>

        </div>

      </section>



      {/* ================= CTA ================= */}

      <section className="py-32 px-6 bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D] text-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-blue-300 font-semibold">
            Let's Start the Conversation
          </p>

          <h2 className={`${serif.className} mt-6 text-5xl md:text-6xl leading-tight`}>
            Interested in
            <br />
            Collaborating with FLY?
          </h2>

          <p className="mt-8 text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Register for a consultation with our Executive Board to discuss
            your organization's goals, explore potential projects, and learn
            how the FLY Corporate Strategy Fellowship can support your team.
          </p>

          <a
            href="https://forms.gle/Tch8pk3MgW1TUP5t8"
            target="_blank"
            className="inline-block mt-12 rounded-full bg-white px-10 py-4 text-[#071A33] font-semibold shadow-xl hover:scale-105 transition"
          >
            Register for a Consultation
          </a>

        </div>

     </section>

    </main>
  );
}