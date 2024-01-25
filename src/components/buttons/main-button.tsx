"use client";

import { sora } from "@/app/fonts";
import React from "react";
import { motion } from "framer-motion";

export interface ButtonProps {
  icon: React.ReactNode;
  text: string;
}

export default function MainButton({ icon, text }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center py-4 px-10 gap-3 rounded-[100px] shadow-[0_8px_23px_0_rgba(65,132,247,0.24)]"
      style={{
        background: "linear-gradient(96deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
      }}
    >
      {icon}
      <span className={`text-white ${sora.className} text-lg font-semibold`}>
        {text}
      </span>
    </motion.button>
  );
}
