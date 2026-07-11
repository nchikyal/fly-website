"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

const boardMembers = [
  {
    name: "Nishka Chikyal",
    school: "Biotechnology High School",
    location: "New Jersey, USA",
    role: "Founder & Executive Director",
    image: "/board/nishka.png",
  },
  {
    name: "Aren Inan",
    school: "Bergen County Technical Schools",
    location: "New Jersey, USA",
    role: "Chief Operating Officer",
    image: "/board/areninan.jpg",
  },
  {
    name: "Paakhi Shanker",
    school: "Marlboro Township High School",
    location: "New Jersey, USA",
    role: "Director of Grants & Development",
    image: "/board/paakhi.png",
  },
  {
    name: "Avani Menon",
    school: "Biotechnology High School",
    location: "New Jersey, USA",
    role: "Director of Outreach",
    image: "/board/avani.png",
  },
  {
    name: "Yashica Uppuganti",
    school: "Mountain House High School",
    location: "California, USA",
    role: "Director of West Coast Operations",
    image: "/board/yashica.png",
  },
  {
    name: "Nishitha Ravi",
    school: "Biotechnology High School",
    location: "New Jersey, USA",
    role: "Director of Social Media Outreach",
    image: "/board/nishi.png",
  },
];

export default function Board() {
  return (
    <main className={`${sans.className} bg-[#F8FAFC] text-[#071A33]`}>

      {/* HERO */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#071A33] via-[#103058] to-[#18477D] text-white">

        <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-28">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <p className="uppercase tracking-[0.35em] text-blue-200 text-sm">
              Leadership
            </p>

            <h1
              className={`${serif.className} mt-6 text-5xl md:text-7xl leading-tight`}
            >
              Meet the
              <br />
              Executive Board
            </h1>

            <p className="mt-8 max-w-2xl text-lg text-blue-100 leading-relaxed">
              FLY is led by students committed to expanding financial literacy
              through education, advocacy, partnerships, and innovation.
              Together, our leadership team works to make financial education
              more accessible for students around the world.
            </p>

          </motion.div>

        </div>

      </section>

      {/* BOARD */}

      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.35em] text-sm text-[#103058] font-semibold">
              Our Leadership
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              Student Leaders Making an Impact
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Our Executive Board oversees FLY's educational programming,
              strategic growth, partnerships, fundraising, and nationwide
              outreach.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">

            {boardMembers.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white border border-gray-100 shadow-lg overflow-hidden"
              >

                <div className="bg-gray-100 h-72 flex items-center justify-center">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-semibold">
                    {member.name}
                  </h3>

                  <p className="mt-2 text-[#2F80ED] font-medium">
                    {member.role}
                  </p>

                  <div className="mt-6 space-y-2 text-gray-600">

                    <p>{member.school}</p>
                    <p>{member.location}</p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* RESPONSIBILITIES */}

      <section className="py-28 px-6 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="text-center">

            <p className="uppercase tracking-[0.35em] text-sm text-[#103058] font-semibold">
              Responsibilities
            </p>

            <h2 className={`${serif.className} mt-5 text-4xl md:text-5xl`}>
              What Our Board Does
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">
                Strategic Growth
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Develop long-term initiatives that expand FLY's reach,
                partnerships, and educational impact.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">
                Program Leadership
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Oversee chapters, fellowships, educational resources, and
                student programming across the organization.
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold">
                Community Outreach
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Build relationships with schools, nonprofits, businesses, and
                student leaders to advance financial literacy.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* JOIN */}

      <section className="py-32 px-6 bg-[#071A33] text-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-blue-300 font-semibold">
            Leadership Opportunities
          </p>

          <h2 className={`${serif.className} mt-6 text-4xl md:text-6xl leading-tight`}>
            Interested in joining
            <br />
            the Executive Board?
          </h2>

          <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Applications open periodically for leadership positions across
            operations, outreach, communications, fundraising, curriculum,
            partnerships, and strategic initiatives.
          </p>

          <a
            href="https://forms.gle/2pjJbWENsbNc23YC7"
            target="_blank"
            className="inline-block mt-12 rounded-full bg-white px-10 py-4 text-[#071A33] font-semibold shadow-xl hover:scale-105 transition"
          >
            Apply for Leadership
          </a>

        </div>

      </section>

    </main>
  );
}