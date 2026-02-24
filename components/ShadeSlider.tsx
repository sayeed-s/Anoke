"use client";

import { motion } from "framer-motion";
import { BRAND_COLORS } from "@/styles/colors";

export default function ShadeSlider() {
  return (
    <div className="fixed inset-0 z-99 flex pointer-events-none">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.18, 1] }}
        style={{ backgroundColor: BRAND_COLORS.shade }}
        className="w-1/2 h-full"
      />

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.4, ease: [0.77, 0, 0.18, 1] }}
        style={{ backgroundColor: BRAND_COLORS.shade }}
        className="w-1/2 h-full"
      />
    </div>
  );
}
