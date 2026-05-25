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

      {/* UPCOMING EVENTS */}
      <section id="events" className="py-28 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className={`${serif.className} text-3xl font-semibold`}>
            Upcoming Events
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 border border-gray-200 bg-white p-10 text-left hover:shadow-md transition"
          >
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Coming Soon: May 27th, 2026
            </p>

            <h3 className="mt-2 text-xl font-semibold">
              NJ Virtual Legislative Briefing: Bill S3462
            </h3>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              A briefing focused on Bill S3462 sponsored by Senator Vin Gopal
              featuring Professor John Longo and the Futures Financials
              initiative.
            </p>

            {/* FLYER */}
            <div className="mt-6">
              <img
                src="/events/s3462-flyer.png"
                alt="Event Flyer"
                className="w-full max-w-md border border-gray-200 shadow-sm"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="YOUR_RSVP_LINK"
                target="_blank"
                className="px-5 py-3 bg-[#103058] text-white text-xs uppercase tracking-widest hover:opacity-90 transition"
              >
                RSVP
              </a>

              <a
                href="YOUR_ZOOM_LINK"
                target="_blank"
                className="px-5 py-3 border border-[#103058] text-[#103058] text-xs uppercase tracking-widest hover:bg-[#103058] hover:text-white transition"
              >
                Join Zoom
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}