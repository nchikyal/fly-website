"use client";

import { motion } from "framer-motion";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${sans.className} text-[#071A33] bg-white`}>

      {/* HERO */}
      <section className="min-h-[70vh] flex items-center justify-center text-center px-6 bg-[#eaf3ff]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1
            className={`${serif.className} text-6xl md:text-7xl font-semibold leading-tight`}
          >
            <span className="text-[#103058]">Financial Literacy</span>{" "}
            for Youth
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-gray-600 text-lg leading-relaxed"
          >
            A student-led initiative building real financial understanding
            through education, opportunity, and leadership.
          </motion.p>
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 px-6 bg-[#103058] text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className={`${serif.className} text-3xl font-semibold`}>
            About FLY
          </h2>

          <p className="mt-6 text-white/80 text-lg leading-relaxed">
            Financial Literacy for Youth (FLY) is a student-led organization
            focused on closing the gap between classroom learning and real-world
            financial skills through programs, internships, and youth
            leadership.
          </p>
        </motion.div>
      </section>

    </div>
  );
}