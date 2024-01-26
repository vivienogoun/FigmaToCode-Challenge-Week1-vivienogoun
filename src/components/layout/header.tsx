import { sora } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import MainButton from "../buttons/main-button";
import MessageCircleIcon from "../icons/message-circle";
import { MobileNav } from "../mobile-nav";

export default function Header() {
  return (
    <div className="bg-[#F2F7FF] p-8">
      <div className="relative flex justify-around items-end sm:items-center gap-48 sm:m-auto w-full sm:max-w-fit">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt="logo"
            width={166}
            height={65}
            className="sm:w-auto sm:h-auto"
          />
        </Link>

        {/* hamburger menu */}
        <div className="sm:hidden ">
          <MobileNav />
        </div>

        {/* navigation & cta */}
        <div className="sm:flex items-center gap-48 hidden">
          <div className="flex justify-center items-center gap-12">
            <Link
              href={"/"}
              className={`text-blue hover:border-b-2 border-blue ${sora.className} text-[16px]`}
            >
              Home
            </Link>
            <Link
              href={"#"}
              className={`text-second hover:border-b-2 border-blue opacity-80 ${sora.className} text-[16px]`}
            >
              About
            </Link>
            <Link
              href={"#"}
              className={`text-second hover:border-b-2 border-blue opacity-80 ${sora.className} text-[16px]`}
            >
              Services
            </Link>
            <Link
              href={"#"}
              className={`text-second hover:border-b-2 border-blue opacity-80 ${sora.className} text-[16px]`}
            >
              Contact
            </Link>
          </div>

          <MainButton icon={<MessageCircleIcon />} text="Book Now" />
        </div>
      </div>
    </div>
  );
}
