"use client";

import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Chapter() {
  return (
    <div className={`${sans.className} text-[#071A33] bg-white`}>

      {/* HERO */}
      <section className="py-28 px-6 bg-[#0B2A52] text-white text-center">
        <div className="max-w-4xl mx-auto">

          <h1 className={`${serif.className} text-5xl md:text-6xl font-semibold`}>
            Create a FLY Chapter
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            Start a Financial Literacy for Youth chapter at your school.
          </p>

          <a
            href="https://docs.google.com/forms"
            target="_blank"
            className="inline-block mt-10 px-8 py-3 bg-white text-[#0B2A52] uppercase text-sm tracking-widest"
          >
            Apply
          </a>

        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-24 px-6 bg-[#eaf3ff]">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            Requirements
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14 text-left">

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="font-semibold">Team</h3>
              <p className="mt-3 text-sm text-gray-600">
                3–5 committed students to lead the chapter.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="font-semibold">Initiative</h3>
              <p className="mt-3 text-sm text-gray-600">
                Willingness to host events and promote financial literacy.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-200">
              <h3 className="font-semibold">Leadership</h3>
              <p className="mt-3 text-sm text-gray-600">
                A student leader to coordinate communication.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* STEPS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            How to Start
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14 text-left">

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">Step 1</p>
              <h3 className="mt-2 font-semibold">Apply</h3>
              <p className="mt-3 text-sm text-gray-600">
                Submit your application form.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">Step 2</p>
              <h3 className="mt-2 font-semibold">Review</h3>
              <p className="mt-3 text-sm text-gray-600">
                We evaluate your school and team.
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-400">Step 3</p>
              <h3 className="mt-2 font-semibold">Launch</h3>
              <p className="mt-3 text-sm text-gray-600">
                Your chapter is approved and activated.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FINAL APPLY */}
      <section className="py-28 px-6 bg-[#071A33] text-white text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            Start Your Chapter
          </h2>

          <p className="mt-6 text-white/80">
            Bring FLY to your school community.
          </p>

          <a
            href="https://docs.google.com/forms"
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