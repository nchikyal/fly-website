"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Pathways() {
  return (
    <main className={`${sans.className} bg-[#F8FAFC] text-[#071A33]`}>

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#071A33] text-white">

        <div className="absolute inset-0 bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D]" />

        <div className="relative max-w-6xl mx-auto px-6 py-32">

          <motion.div
            initial={{opacity:0,y:25}}
            animate={{opacity:1,y:0}}
            transition={{duration:.8}}
            className="max-w-4xl"
          >

            <p className="uppercase tracking-[0.35em] text-sm text-blue-300">
              Chapter Pathways
            </p>


            <h1 className={`${serif.className} mt-8 text-5xl md:text-7xl leading-tight`}>
              Choose how your
              <br/>
              chapter creates
              <br/>
              <span className="text-blue-300">
                impact.
              </span>
            </h1>


            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
              Every FLY chapter is unique. Leaders can choose initiatives
              based on their community's needs, interests, and goals while
              advancing financial literacy education.
            </p>


          </motion.div>

        </div>

      </section>





      {/* PATHWAYS */}

      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto">


          <div className="grid md:grid-cols-2 gap-8">


            {/* POLICY */}

            <motion.div
              whileHover={{y:-8}}
              className="rounded-3xl bg-[#071A33] text-white p-10 shadow-xl"
            >

              <p className="text-blue-300 uppercase tracking-widest text-sm">
                Pathway 01
              </p>


              <h2 className={`${serif.className} mt-5 text-4xl`}>
                Public Policy
              </h2>


              <p className="mt-5 text-white/70 leading-relaxed">
                Explore the intersection of financial education and policy.
                Chapters can research financial literacy initiatives, follow
                education policy developments, and advocate for stronger
                access to financial education.
              </p>


              <div className="mt-8">

                <h3 className="font-semibold">
                  Possible Initiatives
                </h3>


                <ul className="mt-4 space-y-2 text-white/70 text-sm">

                  <li>
                    • Research financial education policies
                  </li>

                  <li>
                    • Create policy briefs
                  </li>

                  <li>
                    • Support financial literacy advocacy
                  </li>

                </ul>

              </div>


            </motion.div>





            {/* FUNDRAISING */}

            <motion.div
              whileHover={{y:-8}}
              className="rounded-3xl bg-white border border-gray-200 p-10 shadow-lg"
            >

              <p className="text-blue-600 uppercase tracking-widest text-sm">
                Pathway 02
              </p>


              <h2 className={`${serif.className} mt-5 text-4xl`}>
                Fundraising & Grants
              </h2>


              <p className="mt-5 text-gray-600 leading-relaxed">
                Help expand access to financial education by supporting future
                fundraising efforts and grant initiatives that provide resources
                to schools and communities in need.
              </p>


              <div className="mt-8">

                <h3 className="font-semibold">
                  Possible Initiatives
                </h3>


                <ul className="mt-4 space-y-2 text-gray-600 text-sm">

                  <li>
                    • Develop fundraising campaigns
                  </li>

                  <li>
                    • Build community partnerships
                  </li>

                  <li>
                    • Support future FLY grant programs
                  </li>

                </ul>

              </div>


            </motion.div>





            {/* EDUCATION */}

            <motion.div
              whileHover={{y:-8}}
              className="rounded-3xl bg-white border border-gray-200 p-10 shadow-lg"
            >

              <p className="text-blue-600 uppercase tracking-widest text-sm">
                Pathway 03
              </p>


              <h2 className={`${serif.className} mt-5 text-4xl`}>
                Youth Engagement & Instruction
              </h2>


              <p className="mt-5 text-gray-600 leading-relaxed">
                Bring financial literacy directly to students through
                interactive workshops, educational events, and community
                programming.
              </p>


              <div className="mt-8">

                <h3 className="font-semibold">
                  Possible Initiatives
                </h3>


                <ul className="mt-4 space-y-2 text-gray-600 text-sm">

                  <li>
                    • Teach financial literacy workshops
                  </li>

                  <li>
                    • Host student events
                  </li>

                  <li>
                    • Create educational campaigns
                  </li>

                </ul>


              </div>


            </motion.div>





            {/* CURRICULUM */}

            <motion.div
              whileHover={{y:-8}}
              className="rounded-3xl bg-[#EAF3FF] p-10 shadow-lg"
            >

              <p className="text-blue-600 uppercase tracking-widest text-sm">
                Pathway 04
              </p>


              <h2 className={`${serif.className} mt-5 text-4xl`}>
                Resource Allocation & Curriculum Formation
              </h2>


              <p className="mt-5 text-gray-600 leading-relaxed">
                Help design the resources that allow financial education
                programs to scale. Chapters can contribute to curriculum
                development and educational materials.
              </p>


              <div className="mt-8">

                <h3 className="font-semibold">
                  Possible Initiatives
                </h3>


                <ul className="mt-4 space-y-2 text-gray-600 text-sm">

                  <li>
                    • Develop lesson materials
                  </li>

                  <li>
                    • Improve curriculum resources
                  </li>

                  <li>
                    • Organize educational content
                  </li>

                </ul>


              </div>


            </motion.div>


          </div>


        </div>

      </section>





      {/* CTA */}

      <section className="py-28 px-6 bg-[#071A33] text-white text-center">


        <div className="max-w-3xl mx-auto">


          <h2 className={`${serif.className} text-5xl`}>
            Ready to create impact?
          </h2>


          <p className="mt-6 text-white/70 text-lg">
            Start your chapter and choose the pathway that best matches your
            community's goals.
          </p>


          <a
            href="/chapter/chapterapply"
            className="inline-block mt-10 px-10 py-4 rounded-full bg-white text-[#071A33] font-semibold hover:scale-105 transition"
          >
            Start a Chapter
          </a>


        </div>


      </section>


    </main>
  );
}