"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Education() {
  return (
    <div className={`${sans.className} bg-white text-[#071A33]`}>

      {/* HERO */}
      <section className="py-32 px-6 bg-[#103058] text-white text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className={`${serif.className} text-5xl md:text-6xl font-semibold`}>
            Financial Education Resources
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            Providing educators and students with the means to gain the financial knowledge they actually use in the real world.
          </p>
        </motion.div>
      </section>

      {/* WHAT WE TEACH */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            What We Do
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-14">

            {[
              {
                title: "Legisture",
                desc: "Advocating for Financial Literacy mandates to enforce education",
              },
              {
                title: "Curricula & Learning Material",
                desc: "Providing schools & programs with the course material needed to provide students with a quality understanding of money",
              },
              {
                title: "Opportunity",
                desc: "Creating opportunities for students to apply the skills they learn in the future",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="border border gray p-10 text-left hover:shadow-md transition"
              >
                <h3 className={`${serif.className} text-xl font-semibold`}>
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-24 px-6 bg-[#0B2A52] text-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            Why It Matters
          </h2>

          <p className="mt-8 text-white/80 text-lg leading-relaxed">
            Financial literacy is one of the most important life skills, yet it is rarely taught
            in traditional education systems. FLY ensures students gain the knowledge needed to
            navigate real-world financial decisions with confidence.
          </p>

        </div>
      </section>

    </div>
  );
}