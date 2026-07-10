import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";
import Link from "next/link";
const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FLY Youth Initiative | Financial Literacy for Youth",
  description:
    "FLY Youth Initiative is a student-led nonprofit providing financial literacy education, internships, leadership opportunities, and youth advocacy.",
  keywords: [
    "financial literacy",
    "financial literacy for youth",
    "FLY Youth Initiative",
    "FLY Initiative",
    "student nonprofit",
    "financial education",
    "youth financial literacy",
    "financial literacy nonprofit",
    "financial education students",
    "student-led nonprofit",
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

        {/* TOP NAVBAR */}
        <header className="sticky top-0 z-50 bg-[#103058] text-white">
          <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">

            <h1 className="tracking-widest font-semibold text-lg text-center md:text-left">
              FLY INITIATIVE
            </h1>

            <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70">
              <a href="/" className="hover:text-white">Home</a>
              <a href="/education" className="hover:text-white">Education</a>
              <a href="/Internship" className="hover:text-white">Internship</a>
              <a href="/board" className="hover:text-white">Board</a>
            <div className="relative group">

  <Link
    href="/chapter/page"
    className="hover:text-white"
  >
    Chapters
  </Link>

  <div className="absolute hidden group-hover:block top-6 left-0 bg-[#071A33] rounded-xl shadow-xl w-64 p-3">

    <Link
      href="/chapter/howto"
      className="block px-4 py-3 rounded-lg hover:bg-white/10"
    >
      How to Start a Chapter
    </Link>

    <Link
      href="/chapter/pathways"
      className="block px-4 py-3 rounded-lg hover:bg-white/10"
    >
      Chapter Pathways
    </Link>

    <Link
      href="/chapter/chapterapply"
      className="block px-4 py-3 rounded-lg hover:bg-white/10"
    >
      Apply to Start a Chapter
    </Link>

  </div>

</div>
            </nav>

          </div>
        </header>

        {children}

      </body>
    </html>
  );
}