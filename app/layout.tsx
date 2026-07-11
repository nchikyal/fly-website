import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

import ChapterDropdown from "./ChapterDropdown";
import FellowDropdown from "./FellowDropdown";

const sans = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FLY Youth Initiative | Financial Literacy for Youth",
  description:
    "FLY Youth Initiative is a student-led nonprofit providing financial literacy education, leadership opportunities, fellowships, and youth advocacy.",
  keywords: [
    "financial literacy",
    "financial literacy for youth",
    "FLY Initiative",
    "student nonprofit",
    "financial education",
    "youth financial literacy",
    "leadership",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.className} bg-white text-[#071A33]`}>

        {/* NAVBAR */}
        <header className="sticky top-0 z-50 bg-[#103058] border-b border-white/10 backdrop-blur">
          <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

            {/* Logo */}
            <Link
              href="/"
              className="text-lg font-semibold tracking-[0.25em] text-white"
            >
              FLY INITIATIVE
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-white/75">

              <Link
                href="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

        

              <FellowDropdown />

              <ChapterDropdown />

              <Link
                href="/board"
                className="hover:text-white transition"
              >
                Board
              </Link>

            </nav>

          </div>
        </header>

        {children}

      </body>
    </html>
  );
}