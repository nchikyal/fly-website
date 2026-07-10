"use client";

import { useState } from "react";
import Link from "next/link";

export default function FellowDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/70"
      >
        FLY Corporate Strategy Fellowship 

        <span
          className={`text-sm transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>

      </button>


      {open && (
        <div className="absolute top-8 left-0 bg-[#071A33] rounded-xl shadow-xl w-64 p-3 border border-white/10">

          <Link
            href="/Fellowship"
            className="block px-4 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Fellows
          </Link>


          <Link
            href="/Fellowship/Partners"
            className="block px-4 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Corporate Partners
          </Link>



        </div>
      )}

    </div>
  );
}