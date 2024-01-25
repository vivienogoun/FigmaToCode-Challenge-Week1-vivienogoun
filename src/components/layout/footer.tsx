import Image from "next/image";
import YoutubeIcon from "../icons/footer/youtube";
import FacebookIcon from "../icons/footer/facebook";
import WhatsappIcon from "../icons/footer/whatsapp";
import { sora } from "@/app/fonts";
import Link from "next/link";

export default function Footer() {
  return (
    // wrapper
    <div className="flex justify-center items-center bg-[#1678F2] py-16">
      {/* content */}
      <div className="flex flex-col items-center gap-14">
        {/* infos */}
        <div className="flex gap-24">
          {/* part 1 */}
          <div className="inline-flex flex-col items-start gap-6 mr-16">
            <div className="flex flex-col items-start gap-6">
              {/* logo */}
              <Link href={"/"}>
                <Image
                  src={"/logo-footer.png"}
                  alt="logo"
                  width={140}
                  height={50}
                />
              </Link>

              {/* address */}
              <p className="text-white text-[16px] italic font-light">
                8 W. South St.Buford, GA 30518 <br /> 5Briarwood LaneVienna, VA
                22180 RER
              </p>
            </div>

            {/* social icons */}
            <div className="flex items-start gap-8">
              <YoutubeIcon />
              <FacebookIcon />
              <WhatsappIcon />
            </div>
          </div>

          {/* part 2 */}
          <div className="inline-flex flex-col items-start gap-6">
            <p className="text-white text-xl font-semibold">Company Info</p>
            <div className="flex flex-col items-start gap-4">
              <p
                className={`text-white ${sora.className} text-[16px] opacity-80`}
              >
                <Link href={"#"} className="hover:border-b-2 border-white">
                  About
                </Link>
              </p>
              <p
                className={`text-white ${sora.className} text-[16px] opacity-80`}
              >
                <Link href={"#"} className="hover:border-b-2 border-white">
                  Services
                </Link>
              </p>
              <p
                className={`text-white ${sora.className} text-[16px] opacity-80`}
              >
                <Link href={"#"} className="hover:border-b-2 border-white">
                  Blog
                </Link>
              </p>
            </div>
          </div>

          {/* part 3 */}
          <div className="inline-flex flex-col items-start gap-6">
            <p className="text-white text-xl font-semibold">Book Now</p>
            <p
              className={`text-white ${sora.className} text-[16px] opacity-80`}
            >
              <Link href={"#"} className="hover:border-b-2 border-white">
                Appointment
              </Link>
            </p>
          </div>

          {/* part 4 */}
          <div className="inline-flex flex-col items-start gap-6">
            <p className="text-white text-xl font-semibold">Contact</p>
            <div className="flex flex-col items-start gap-4">
              <p
                className={`text-white ${sora.className} text-[16px] opacity-80`}
              >
                +1 123456789
              </p>
              <p
                className={`text-white ${sora.className} text-[16px] opacity-80`}
              >
                remmcal@mail.com
              </p>
              <p
                className={`text-white ${sora.className} text-[16px] opacity-80`}
              >
                Phone: +1 12345678
              </p>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="w-[1110px] h-[1px] opacity-60 bg-white"></div>
        <p className={`text-white ${sora.className} text-[16px] opacity-80`}>
          © Doctor all rights 2023 - Designed by remmcal
        </p>
      </div>
    </div>
  );
}
