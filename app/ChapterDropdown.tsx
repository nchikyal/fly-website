"use client";

import { useState } from "react";
import Link from "next/link";

export default function ChapterDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 hover:text-white transition"
      >
        Chapters

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
            href="/page"
            className="block px-4 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Chapter Overview
          </Link>


          <Link
            href="/howto"
            className="block px-4 py-3 rounded-lg hover:bg-white/10 transition"
          >
            How to Start a Chapter
          </Link>


          <Link
            href="/pathways"
            className="block px-4 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Chapter Pathways
          </Link>


          <Link
            href="/chapter/chapterapply"
            className="block px-4 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Apply to Start a Chapter
          </Link>


        </div>
      )}

    </div>
  );
}