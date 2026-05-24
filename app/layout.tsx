import "./globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });

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
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">

            <h1 className="tracking-widest font-semibold text-lg">
              FLY INITIATIVE
            </h1>

            <nav className="flex gap-8 text-xs uppercase tracking-[0.25em] text-white/70">

              <a href="/" className="hover:text-white">Home</a>
              <a href="/education" className="hover:text-white">Education</a>
              <a href="/Internship" className="hover:text-white">Internship</a>
              <a href="/board" className="hover:text-white">Board</a>
              <a href="/chapter" className="hover:text-white">Create a Chapter</a>
            </nav>

          </div>
        </header>

        {children}

      </body>
    </html>
  );
}