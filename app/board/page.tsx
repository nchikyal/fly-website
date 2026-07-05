"use client";

import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Board() {
  return (
    <div className={`${sans.className} text-[#071A33] bg-white`}>

      {/* HERO */}
      <section className="py-28 px-6 bg-[#071A33] text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className={`${serif.className} text-5xl md:text-6xl font-semibold`}>
            FLY Executive Board
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            The student leaders driving Financial Literacy for Youth forward.
          </p>
        </div>
      </section>

      {/* MEET THE BOARD */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            Meet the Board
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14 text-left">

            {/* MEMBER 1 */}
            <div>
              <img
                src="/board/nishka.png"
                className="w-full h-64 object-contain bg-gray-100"
                alt="Board Member"
              />
              <p className="mt-4 font-semibold">Nishka Chikyal</p>
              <p className="text-sm text-gray-600">Biotechnology High School</p>
              <p className="text-sm text-gray-600">New Jersey, USA</p>
              <p className="text-sm text-gray-600">Founder & Executive Director</p>
            </div>

            {/* MEMBER 2 */}
            <div>
              <img
                src="/board/areninan.jpg"
                className="w-full h-64 object-contain bg-gray-100"
                alt="Board Member"
              />
              <p className="mt-4 font-semibold">Aren Inan</p>
              <p className="text-sm text-gray-600">Bergen County Technical Schools </p>
              <p className="text-sm text-gray-600">New Jersey, USA</p>
              <p className="text-sm text-gray-600">Chief Operating Officer</p>
            </div>

            {/* MEMBER 3 */}
            <div>
              <img
                src="/board/paakhi.png"
                className="w-full h-64 object-contain bg-gray-100"
                alt="Board Member"
              />
              <p className="mt-4 font-semibold">Paakhi Shanker</p>
              <p className="text-sm text-gray-600">Marlboro Township High School</p>
              <p className="text-sm text-gray-600">New Jersey, USA</p>
              <p className="text-sm text-gray-600">Director of Grants & Development</p>
            </div>
            
           
            <div>
              <img
                src="/board/avani.png"
                className="w-full h-64 object-contain bg-gray-100"
                alt="Board Member"
              />
              <p className="mt-4 font-semibold">Avani Menon</p>
              <p className="text-sm text-gray-600">Biotechnology High School</p>
              <p className="text-sm text-gray-600">New Jersey, USA</p>
              <p className="text-sm text-gray-600">Director of Outreach</p>
            </div>


            <div>
              <img
                src="/board/yashica.png"
                className="w-full h-64 object-contain bg-gray-100"
                alt="Board Member"
              />
              <p className="mt-4 font-semibold">Yashica Uppuganti</p>
              <p className="text-sm text-gray-600">Mountain House High School</p>
              <p className="text-sm text-gray-600">California, USA</p>
              <p className="text-sm text-gray-600">Director of West Coast Operations</p>
            </div>
 {/* MEMBER 4 */}
            <div>
              <img
                src="/board/nishi.png"
                className="w-full h-64 object-contain bg-gray-100"
                alt="Board Member"
              />
              <p className="mt-4 font-semibold">Nishitha Ravi</p>
              <p className="text-sm text-gray-600">Biotechnology High School</p>
              <p className="text-sm text-gray-600">New Jersey, USA</p>
              <p className="text-sm text-gray-600">Director of Social Media Outreach</p>
            </div>
          </div>
        </div>
      </section> 


      {/* WHAT THEY DO */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            What We Do
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            Board members oversee initiatives, manage outreach, and guide the strategic direction
            of FLY. They ensure programs are impactful, organized, and scalable.
          </p>

        </div>
      </section>

      {/* APPLY */}
      <section className="py-28 px-6 bg-[#103058] text-white text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            Join the Board
          </h2>

          <p className="mt-6 text-white/80">
            Applications open for leadership positions in marketing, operations, and recruitment.
          </p>

          <a
            href="https://forms.gle/2pjJbWENsbNc23YC7"
            className="inline-block mt-10 px-8 py-3 bg-white text-[#103058] uppercase text-sm tracking-widest"
          >
            Apply Now
          </a>

        </div>
      </section>

    </div>
  );
}