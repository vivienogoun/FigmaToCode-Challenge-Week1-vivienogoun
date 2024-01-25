import { sora } from "@/app/fonts";
import React from "react";

interface Section1ListItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Section1ListItem({
  icon,
  title,
  description,
}: Section1ListItemProps) {
  return (
    <div
      className="flex py-2 px-4 items-center gap-4 rounded-xl shadow-[0_8px_23px_0_rgba(65,132,247,0.24)]"
      style={{
        background: "linear-gradient(145deg, #1678F2 3.73%, #65A8FB 132.69%)",
      }}
    >
      {icon}
      <div className="flex flex-col justify-center items-start max-w-[185px]">
        <p className="text-white text-center text-lg leading-normal font-semibold">
          {title}
        </p>
        <p
          className={`text-white ${sora.className} text-xs leading-[16.8px] opacity-80`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
