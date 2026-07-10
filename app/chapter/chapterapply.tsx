"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Apply() {
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
              Start Your Chapter
            </p>


            <h1 className={`${serif.className} mt-8 text-5xl md:text-7xl leading-tight`}>
              Bring FLY to
              <br/>
              your
              <br/>
              <span className="text-blue-300">
                community.
              </span>
            </h1>


            <p className="mt-8 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed">
              Ready to create a student-led movement for financial literacy?
              Submit your application to start an official FLY chapter at your
              school or within your community.
            </p>


          </motion.div>

        </div>

      </section>




      {/* BEFORE APPLYING */}

      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto">


          <div className="text-center">

            <p className="uppercase tracking-[0.3em] text-sm text-blue-600 font-semibold">
              Before Applying
            </p>


            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Make sure your team is ready.
            </h2>

          </div>




          <div className="grid md:grid-cols-2 gap-6 mt-14">


            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

              <h3 className="text-xl font-semibold">
                Student Leadership
              </h3>

              <p className="mt-3 text-gray-600">
                Chapter leaders must be enrolled in Grades 9–12 and maintain
                at least two student leaders.
              </p>

            </div>



            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

              <h3 className="text-xl font-semibold">
                Interested Members
              </h3>

              <p className="mt-3 text-gray-600">
                Your chapter should have at least 3–5 students interested in
                building financial literacy initiatives.
              </p>

            </div>



            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

              <h3 className="text-xl font-semibold">
                Commitment
              </h3>

              <p className="mt-3 text-gray-600">
                Chapters must remain student-led and actively participate in
                FLY programming and reporting.
              </p>

            </div>



            <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">

              <h3 className="text-xl font-semibold">
                Community Connection
              </h3>

              <p className="mt-3 text-gray-600">
                Chapters may operate through a school or independently within
                their community.
              </p>

            </div>


          </div>


        </div>

      </section>





      {/* APPLICATION PROCESS */}

      <section className="py-24 px-6 bg-[#EAF3FF]">


        <div className="max-w-5xl mx-auto">


          <h2 className={`${serif.className} text-4xl text-center`}>
            What happens after you apply?
          </h2>



          <div className="grid md:grid-cols-3 gap-8 mt-14">


            <div>

              <p className="text-blue-600 font-bold text-xl">
                01
              </p>

              <h3 className="mt-3 font-semibold text-xl">
                Application Review
              </h3>

              <p className="mt-3 text-gray-600">
                The FLY team reviews your application and goals.
              </p>

            </div>



            <div>

              <p className="text-blue-600 font-bold text-xl">
                02
              </p>

              <h3 className="mt-3 font-semibold text-xl">
                Approval & Onboarding
              </h3>

              <p className="mt-3 text-gray-600">
                Approved leaders complete onboarding forms and receive chapter
                resources.
              </p>

            </div>



            <div>

              <p className="text-blue-600 font-bold text-xl">
                03
              </p>

              <h3 className="mt-3 font-semibold text-xl">
                Chapter Launch
              </h3>

              <p className="mt-3 text-gray-600">
                Your chapter officially begins creating financial literacy
                opportunities.
              </p>

            </div>


          </div>


        </div>


      </section>





      {/* APPLY CTA */}

      <section className="py-32 px-6 bg-[#071A33] text-white text-center">


        <div className="max-w-3xl mx-auto">


          <h2 className={`${serif.className} text-5xl`}>
            Ready to start?
          </h2>


          <p className="mt-6 text-white/70 text-lg">
            Submit your application and take the first step toward bringing
            financial literacy education to your community.
          </p>



          <a
            href="https://forms.gle/Ypn6cgjhMTPUtdNDA"
            target="_blank"
            className="inline-block mt-10 px-10 py-4 rounded-full bg-white text-[#071A33] font-semibold hover:scale-105 transition"
          >
            Apply to Start a Chapter
          </a>


        </div>


      </section>


    </main>
  );
}