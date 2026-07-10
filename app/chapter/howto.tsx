"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Roadmap() {
  return (
    <main className={`${sans.className} bg-[#F8FAFC] text-[#071A33]`}>

      {/* HERO */}

      <section className="relative bg-[#071A33] text-white overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D]" />

        <div className="relative max-w-6xl mx-auto px-6 py-32">

          <motion.div
            initial={{opacity:0,y:25}}
            animate={{opacity:1,y:0}}
            transition={{duration:.8}}
            className="max-w-4xl"
          >

            <p className="uppercase tracking-[0.35em] text-sm text-blue-300">
              Chapter Roadmap
            </p>


            <h1 className={`${serif.className} mt-8 text-5xl md:text-7xl leading-tight`}>
              From application
              <br/>
              to
              <br/>
              <span className="text-blue-300">
                community impact.
              </span>
            </h1>


            <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed">
              Starting a FLY chapter is a guided process designed to help
              students build successful, sustainable financial literacy
              initiatives.
            </p>


          </motion.div>

        </div>

      </section>



      {/* ROADMAP */}

      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto">


          <div className="space-y-16">


            {/* STEP 1 */}

            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">

              <div className="text-blue-600 text-5xl font-bold">
                01
              </div>


              <div>

                <h2 className={`${serif.className} text-4xl`}>
                  Submit Your Application
                </h2>


                <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                  Complete the FLY Chapter Application and share information
                  about your school, leadership team, and goals for bringing
                  financial literacy to your community.
                </p>


                <div className="mt-6 bg-[#EAF3FF] rounded-2xl p-6">

                  <h3 className="font-semibold">
                    What happens next?
                  </h3>

                  <p className="mt-2 text-gray-600">
                    The FLY team reviews your application and responds within
                    3–5 business days.
                  </p>

                </div>


              </div>

            </div>





            {/* STEP 2 */}

            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">


              <div className="text-blue-600 text-5xl font-bold">
                02
              </div>


              <div>

                <h2 className={`${serif.className} text-4xl`}>
                  Complete Chapter Onboarding
                </h2>


                <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                  Once approved, chapter leaders complete onboarding to
                  officially become part of the FLY network.
                </p>


                <div className="grid md:grid-cols-2 gap-5 mt-8">


                  <div className="bg-white border border-gray-200 rounded-2xl p-6">

                    <h3 className="font-semibold">
                      Sign Required Forms
                    </h3>

                    <p className="mt-3 text-gray-600 text-sm">
                      Complete chapter agreements and required documentation.
                    </p>

                  </div>



                  <div className="bg-white border border-gray-200 rounded-2xl p-6">

                    <h3 className="font-semibold">
                      Receive Resources
                    </h3>

                    <p className="mt-3 text-gray-600 text-sm">
                      Gain access to chapter guidelines, resources, and support.
                    </p>

                  </div>


                </div>


              </div>


            </div>





            {/* STEP 3 */}

            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">


              <div className="text-blue-600 text-5xl font-bold">
                03
              </div>


              <div>

                <h2 className={`${serif.className} text-4xl`}>
                  Launch Your Chapter
                </h2>


                <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                  After completing onboarding, your chapter officially begins.
                  Build your leadership team, recruit members, and start
                  creating financial literacy opportunities.
                </p>


                <div className="mt-6 bg-[#071A33] text-white rounded-3xl p-8">

                  <h3 className="text-xl font-semibold">
                    Your first steps:
                  </h3>


                  <ul className="mt-4 space-y-3 text-white/80">

                    <li>
                      • Establish chapter leadership roles
                    </li>

                    <li>
                      • Recruit interested members
                    </li>

                    <li>
                      • Plan your first initiative
                    </li>

                    <li>
                      • Connect with the FLY network
                    </li>

                  </ul>


                </div>


              </div>


            </div>





            {/* STEP 4 */}

            <div className="grid md:grid-cols-[120px_1fr] gap-8 items-start">


              <div className="text-blue-600 text-5xl font-bold">
                04
              </div>


              <div>

                <h2 className={`${serif.className} text-4xl`}>
                  Choose Your Impact Pathway
                </h2>


                <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                  Every community has different needs. After launching,
                  chapters can choose areas of focus that align with their
                  goals.
                </p>


                <a
                  href="/chapter/pathways"
                  className="inline-block mt-8 text-[#103058] font-semibold hover:underline"
                >
                  Explore Chapter Pathways →
                </a>


              </div>


            </div>


          </div>


        </div>


      </section>





      {/* CTA */}

      <section className="py-28 px-6 bg-[#071A33] text-white text-center">


        <div className="max-w-3xl mx-auto">


          <h2 className={`${serif.className} text-5xl`}>
            Ready to begin?
          </h2>


          <p className="mt-6 text-white/70 text-lg">
            Start your application and take the first step toward creating
            financial literacy opportunities in your community.
          </p>


          <a
            href="/chapter/apply"
            className="inline-block mt-10 bg-white text-[#071A33] rounded-full px-10 py-4 font-semibold hover:scale-105 transition"
          >
            Apply Now
          </a>


        </div>


      </section>


    </main>
  );
}