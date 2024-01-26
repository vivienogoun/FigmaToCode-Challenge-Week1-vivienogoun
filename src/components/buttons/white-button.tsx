"use client";

import { sora } from "@/app/fonts";
import { ButtonProps } from "./main-button";
import { motion } from "framer-motion";

export default function WhiteButton({ icon, text }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center py-4 px-6 sm:px-10 gap-3 rounded-[100px] bg-white shadow-[0_8px_23px_0_rgba(65,132,247,0.24)]"
    >
      {icon}
      <span
        className={`text-blue ${sora.className} text-[16px] sm:text-lg font-semibold`}
      >
        {text}
      </span>
    </motion.button>
  );
}
