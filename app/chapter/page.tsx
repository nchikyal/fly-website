"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Chapter() {
  return (
    <main className={`${sans.className} bg-[#F8FAFC] text-[#071A33]`}>

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#071A33] text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D]" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">

          <motion.div
            initial={{opacity:0, y:25}}
            animate={{opacity:1, y:0}}
            transition={{duration:.8}}
            className="max-w-4xl"
          >

            <p className="uppercase tracking-[0.35em] text-sm text-blue-300">
              FLY Chapter Network
            </p>


            <h1 className={`${serif.className} mt-8 text-5xl md:text-7xl leading-tight`}>
              Bring financial
              <br/>
              literacy to
              <br/>
              <span className="text-blue-300">
                your community.
              </span>
            </h1>


            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
              Create an official Financial Literacy for Youth chapter at your
              school or community. Empower students through financial education,
              leadership opportunities, and meaningful community impact.
            </p>


            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/chapterapply"
                className="rounded-full bg-white text-[#071A33] px-8 py-4 font-semibold hover:scale-105 transition"
              >
                Start a Chapter
              </a>


              <a
                href="/pathways"
                className="rounded-full border border-white/30 px-8 py-4 hover:bg-white hover:text-[#071A33] transition"
              >
                Learn How It Works
              </a>

            </div>


          </motion.div>

        </div>

      </section>



      {/* ================= WHY START ================= */}

      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">


          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.3em] text-sm text-blue-600 font-semibold">
              Why Start a Chapter?
            </p>


            <h2 className={`${serif.className} mt-6 text-5xl`}>
              Create opportunities.
              <br/>
              Build impact.
            </h2>


            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              FLY chapters allow students to bring financial literacy education
              directly to their communities while developing leadership,
              communication, and organizational skills.
            </p>


          </div>



          <div className="grid md:grid-cols-3 gap-8 mt-16">


            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

              <h3 className="text-2xl font-semibold">
                Leadership
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Lead a student organization, manage initiatives, and gain
                experience building programs from the ground up.
              </p>

            </div>



            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

              <h3 className="text-2xl font-semibold">
                Financial Education
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Teach students essential financial skills through workshops,
                programs, and educational initiatives.
              </p>

            </div>



            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">

              <h3 className="text-2xl font-semibold">
                Community Impact
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Build solutions that expand access to financial literacy in
                schools and communities.
              </p>

            </div>


          </div>


        </div>

      </section>





      {/* ================= CHAPTER JOURNEY PREVIEW ================= */}

      <section className="py-28 px-6 bg-[#EAF3FF]">


        <div className="max-w-6xl mx-auto">


          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-[#103058] font-semibold">
              The Process
            </p>


            <h2 className={`${serif.className} mt-6 text-5xl`}>
              From idea to impact.
            </h2>

          </div>



          <div className="grid md:grid-cols-4 gap-8 mt-16">


            {[
              {
                number:"01",
                title:"Apply",
                text:"Submit your chapter application and share your vision."
              },
              {
                number:"02",
                title:"Onboard",
                text:"Complete onboarding and receive chapter resources."
              },
              {
                number:"03",
                title:"Launch",
                text:"Create your chapter and begin programming."
              },
              {
                number:"04",
                title:"Impact",
                text:"Choose your pathway and grow your initiatives."
              }
            ].map((step)=>(
              
              <div
                key={step.number}
                className="bg-white rounded-3xl p-8 shadow-md"
              >

                <p className="text-blue-600 font-bold text-xl">
                  {step.number}
                </p>

                <h3 className="mt-4 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {step.text}
                </p>

              </div>

            ))}


          </div>



          <div className="text-center mt-14">

            <a
              href="/howto"
              className="text-[#103058] font-semibold hover:underline"
            >
              How to Start a Chapter in Your Region →
            </a>

          </div>


        </div>


      </section>





      {/* ================= FINAL CTA ================= */}

      <section className="py-28 px-6 bg-[#071A33] text-white text-center">


        <div className="max-w-3xl mx-auto">


          <h2 className={`${serif.className} text-5xl`}>
            Ready to bring FLY to your community?
          </h2>


          <p className="mt-6 text-white/70 text-lg">
            Join a growing network of student leaders working to make
            financial literacy accessible for everyone.
          </p>


          <a
            href="/apply"
            className="inline-block mt-10 bg-white text-[#071A33] rounded-full px-10 py-4 font-semibold hover:scale-105 transition"
          >
            Apply to Start a Chapter
          </a>


        </div>


      </section>


    </main>
  );
}