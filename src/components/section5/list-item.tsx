import { sora } from "@/app/fonts";
import React from "react";

interface Section5ListItemProps {
  icon: React.ReactNode;
  text: string;
}

export default function Section5ListItem({
  icon,
  text,
}: Section5ListItemProps) {
  return (
    <div
      className="flex py-2 px-4 items-center gap-4 rounded-xl shadow-[0_8px_23px_0_rgba(65,132,247,0.24)]"
      style={{
        background: "linear-gradient(145deg, #1678F2 3.73%, #65A8FB 132.69%)",
      }}
    >
      {icon}
      <span className="text-white text-center text-lg leading-normal font-semibold">
        {text}
      </span>
    </div>
  );
}
