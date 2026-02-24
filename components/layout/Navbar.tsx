"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Menu, Search, User } from "lucide-react";

const NAV_LINKS = ["Resin", "Wood", "Accessories", "Clothing", "About"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock scroll on mobile/tablet when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav
          className="
            relative flex items-center justify-between
            h-14 sm:h-16 md:h-20
            px-4 sm:px-6 md:px-10
            bg-black/70 backdrop-blur-md
            border-b border-white/5
          "
        >
          {/* LEFT */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="cursor-pointer"
            >
              <Menu size={24} />
            </button>

            {/* Search */}
            <button aria-label="Search" className="cursor-pointer">
              <Search size={24} />
            </button>
          </div>

          {/* CENTER BRAND (TRUE CENTER, ALL DEVICES) */}
          <Link
            href="/"
            className="
              absolute left-1/2 -translate-x-1/2
              text-xs sm:text-sm md:text-lg
              tracking-[0.25em] sm:tracking-[0.3em]
              font-semibold
              text-neutral-100
              whitespace-nowrap
            "
          >
            LuxeTryst
          </Link>

          {/* RIGHT */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-5 text-neutral-100">
            <button aria-label="Wishlist" className="cursor-pointer">
              <Heart size={24} />
            </button>
            <button aria-label="Profile" className="cursor-pointer">
              <User size={24} />
            </button>
          </div>
        </nav>
      </header>

      {/* DRAWER MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              className="
                fixed top-0 left-0 h-full
                w-[90%] sm:w-[75%] md:w-105
                bg-black z-50
              "
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.5,
                ease: [0.77, 0, 0.18, 1],
              }}
            >
              <div className="px-5 sm:px-6 md:px-8 py-8">
                {/* Close */}
                <button
                  onClick={() => setOpen(false)}
                  className="mb-10 text-neutral-100 text-xl"
                >
                  ✕
                </button>

                {/* Links */}
                <ul className="flex flex-col gap-5 sm:gap-6 text-lg sm:text-xl text-neutral-200">
                  {NAV_LINKS.map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <Link href={`/${item}`} onClick={() => setOpen(false)}>
                        {item}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
