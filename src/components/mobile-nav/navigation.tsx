import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menu-item";
import Link from "next/link";
import { sora } from "@/app/fonts";
import WhiteButton from "../buttons/white-button";
import WhatsappIcon from "../icons/whatsapp";

const variants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 201px 40px)`,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  }),
  closed: {
    clipPath: "circle(0px at 201px 40px)",
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-4">
        <p
          className={`text-white ${sora.className} text-2xl font-medium leading-10`}
        >
          <Link href={"/"} className="hover:border-b-2 border-white">
            Home
          </Link>
        </p>
        <p
          className={`text-white ${sora.className} text-2xl font-medium leading-10 opacity-80`}
        >
          <Link href={"#"} className="hover:border-b-2 border-white">
            About
          </Link>
        </p>
        <p
          className={`text-white ${sora.className} text-2xl font-medium leading-10 opacity-80`}
        >
          <Link href={"#"} className="hover:border-b-2 border-white">
            Services
          </Link>
        </p>
        <p
          className={`text-white ${sora.className} text-2xl font-medium leading-10 opacity-80`}
        >
          <Link href={"#"} className="hover:border-b-2 border-white">
            Contact
          </Link>
        </p>
      </div>
      <WhiteButton icon={<WhatsappIcon stroke="#3A8EF6" />} text="Book now" />
    </div>
    {/* {itemIds.map((i) => (
      <MenuItem i={i} key={i} />
    ))} */}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];
