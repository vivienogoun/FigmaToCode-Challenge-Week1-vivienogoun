"use client";

import { sora } from "@/app/fonts";
import MainButton from "../buttons/main-button";
import WhatsappIcon from "../icons/whatsapp";
import Image from "next/image";
import { motion } from "framer-motion";

interface Section3ServicesItemProps {
  pathToImage: string;
  title: string;
  description: string;
}

export default function Section3ServicesItem({
  pathToImage,
  title,
  description,
}: Section3ServicesItemProps) {
  return (
    // wrapper
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="flex flex-col items-start p-8 rounded-3xl bg-white shadow-[0_24px_32px_-3px_rgba(3,9,50,0.04)]"
    >
      {/* content */}
      <div className="flex flex-col items-start gap-8">
        {/* image container */}
        <div className="flex justify-center items-center gap-10 self-stretch">
          {/* image */}
          <Image
            src={pathToImage}
            alt={title}
            width={200}
            height={200}
            className="w-[200px] h-[200px]"
          />
        </div>
        {/* informations */}
        <div className="flex flex-col items-start gap-4">
          {/* title */}
          <p className="text-black text-2xl font-medium leading-[21px]">
            {title}
          </p>
          {/* description */}
          <p
            className={`text-second ${sora.className} text-sm leading-5 max-w-[282px]`}
          >
            {description}
          </p>
        </div>
        {/* cta button */}
        <MainButton icon={<WhatsappIcon />} text="Book an Appointment" />
      </div>
    </motion.div>
  );
}
