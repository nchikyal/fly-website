"use client";

import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Internship() {
  return (
    <div className={`${sans.className} text-[#071A33] bg-white`}>

      {/* HERO */}
      <section className="py-28 px-6 bg-[#0B2A52] text-white text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className={`${serif.className} text-5xl md:text-6xl font-semibold`}>
            FLY Internship Program
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            A free opportunity for students to apply financial knowledge to real-world projects.
          </p>

          {/* TOP APPLY BUTTON */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc17rFSCREN3UG14sBa92u8Qsc5IPGmBTZbMyEeFuF9v6dNpg/viewform?usp=header"
            target="_blank"
            className="inline-block mt-10 px-8 py-3 bg-white text-[#0B2A52] uppercase text-sm tracking-widest"
          >
            Apply Now
          </a>

        </div>
      </section>

      {/* HOW TO APPLY (STEPS) */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            How to Apply
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14 text-left">

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Step 1
              </p>
              <h3 className="mt-2 font-semibold">Fill Out Application</h3>
              <p className="mt-3 text-sm text-gray-600">
                Complete the Google Form with your basic information and interests.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Step 2
              </p>
              <h3 className="mt-2 font-semibold">Interview Round</h3>
              <p className="mt-3 text-sm text-gray-600">
                Once your application is approved by our board, you will participate in a brief interview.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">
                Step 3
              </p>
              <h3 className="mt-2 font-semibold">Get Selected</h3>
              <p className="mt-3 text-sm text-gray-600">
                If our board decides that you are a good fit for the program, we will connect you to a 
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHAT YOU WILL DO */}
      <section className="py-24 px-6 bg-[#eaf3ff]">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            What You Will Do
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14 text-left">

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="font-semibold">Financial Projects</h3>
              <p className="mt-3 text-sm text-gray-600">
                Work on real initiatives in financial literacy and education.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="font-semibold">Policy & Research</h3>
              <p className="mt-3 text-sm text-gray-600">
                Explore how financial education connects to schools and systems.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="font-semibold">Leadership Skills</h3>
              <p className="mt-3 text-sm text-gray-600">
                Build communication, teamwork, and execution experience.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY DO IT */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            Why Do It
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            This program gives students real exposure to finance, leadership, and impact-driven work,
            helping build skills that go beyond the classroom.
          </p>

        </div>
      </section>

      {/* FINAL APPLY */}
      <section className="py-28 px-6 bg-[#071A33] text-white text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            Ready to Apply?
          </h2>

          <p className="mt-6 text-white/80">
            Take the first step toward joining the FLY Internship Program.
          </p>

          {/* BOTTOM APPLY BUTTON */}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc17rFSCREN3UG14sBa92u8Qsc5IPGmBTZbMyEeFuF9v6dNpg/viewform?usp=header"
            target="_blank"
            className="inline-block mt-10 px-8 py-3 bg-white text-[#071A33] uppercase text-sm tracking-widest"
          >
            Apply Now
          </a>

        </div>
      </section>

    </div>
  );
}