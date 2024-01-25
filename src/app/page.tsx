"use client";

import Image from "next/image";
import { sora } from "./fonts";
import MainButton from "@/components/buttons/main-button";
import MessageCircleIcon from "@/components/icons/message-circle";
import Section1ListItem from "@/components/section1/list-item";
import ClockIcon from "@/components/icons/clock";
import CheckCircleIcon from "@/components/icons/check-circle";
import MedicalSymbolIcon from "@/components/icons/medical-symbol";
import WhatsappIcon from "@/components/icons/whatsapp";
import PlusIcon from "@/components/plus-icon";
import Section3ServicesItem from "@/components/section3/services-item";
import WhiteButton from "@/components/buttons/white-button";
import Section5ListItem from "@/components/section5/list-item";
import ChevronLeft from "@/components/icons/chevron-left";
import ChevronRight from "@/components/icons/chevron-right";
import Review from "@/components/section6/review";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // main content of the page i.e without header and footer
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#F9FBFC] dark:bg-second">
      {/* section 1: presentation */}
      <section className="bg-[#F2F7FF] flex flex-col items-center w-full p-24 pb-0 relative">
        <div className="flex items-center m-auto mb-32">
          {/* text content */}
          <div className="w-[50%] flex justify-center">
            <div className="inline-flex flex-col items-start gap-8">
              <div className="flex flex-col items-start gap-4">
                <p className="text-green text-[22px] leading-normal font-medium tracking-[.44px]">
                  Dr. Matthew Anderson
                </p>
                <p className="text-[#031432] text-5xl font-bold tracking-[120%] max-w-[500px]">
                  A dedicated doctor you can trust
                </p>
                <p
                  className={`${sora.className} text-second text-[16px] leading-6 max-w-[480px]`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Elementum eget vel, nunc nulla feugiat. Metus ut.
                </p>
              </div>
              <MainButton
                icon={<MessageCircleIcon />}
                text="Book an appointment"
              />
            </div>
          </div>

          {/* Object */}
          <div className="w-[50%]">
            <Image
              src={"/section1-graphics.png"}
              alt=""
              width={800}
              height={800}
              className=""
            />
          </div>
        </div>

        {/* list items */}
        <div className="flex justify-center items-start gap-6 absolute -bottom-9 w-fit m-auto">
          <Section1ListItem
            icon={<ClockIcon />}
            title="24 hour service"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Section1ListItem
            icon={<CheckCircleIcon />}
            title="8 years of experience"
            description="Lorem ipsum dolor sit amet, con sectetur adipiscing elit."
          />
          <Section1ListItem
            icon={<MedicalSymbolIcon />}
            title="High quality care"
            description="Lorem ipsum dolor sit amet, consectetur adipiscin."
          />
        </div>
      </section>

      {/* section 2: about */}
      <section className="flex justify-center items-center gap-32 mx-8 my-48">
        {/* image and plusicons */}
        <div
          className="rounded-3xl w-[483px] h-[405px] relative"
          style={{
            background:
              "linear-gradient(42deg, rgba(0, 191, 165, 0.27) 25.39%, rgba(64, 133, 247, 0.00) 131.52%), url('/section2-image.png'), lightgray -212.673px 0px / 143.998% 115.309% no-repeat",
          }}
        >
          <PlusIcon className="w-8 h-8 absolute -top-8 right-40" />
          <PlusIcon className="w-12 h-12 absolute -left-12 top-24" />
          <PlusIcon className="w-16 h-16 absolute -right-14 bottom-20" />
          <PlusIcon className="absolute -bottom-16 left-20" />
        </div>

        {/* content */}
        <div className="flex flex-col justify-center items-start gap-8 max-w-[485px]">
          <div className="flex flex-col items-start gap-4">
            <p className="text-green text-[22px] leading-normal font-medium tracking-[.44px]">
              About me
            </p>
            <p className="text-dark text-[32px] leading-normal font-semibold">
              A dedicated doctor with the core mission to help
            </p>
            <p
              className={`text-second ${sora.className} text-[16px] leading-6`}
            >
              orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
              nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
              nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
              nullam lobortis. Vulputate tortor tincidun.
            </p>
          </div>
          <MainButton icon={<WhatsappIcon />} text="Book an Appointment" />
        </div>
      </section>

      {/* section 3: services */}
      <section className="bg-[#F2F7FF] flex flex-col gap-24 p-24 w-full">
        {/* top section */}
        <div className="flex justify-around items-center m-auto gap-24">
          {/* content */}
          <div className="inline-flex flex-col items-start gap-8 max-w-[485px]">
            {/* texts */}
            <div className="flex flex-col items-start gap-4">
              <p className="text-green text-[22px] leading-normal font-medium tracking-[.44px]">
                Services
              </p>
              <p className="text-dark text-[32px] leading-normal font-semibold">
                Experienced in multiple medical practices
              </p>
              <p
                className={`text-second ${sora.className} text-[16px] leading-6`}
              >
                orem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                egestas viverra turpis habitant eu sociis fermentum felis.
              </p>
            </div>
            <MainButton icon={<WhatsappIcon />} text="Book an appointment" />
          </div>

          {/* visual */}
          <Image
            src={"/section3-visual.png"}
            alt=""
            width={600}
            height={600}
            className="w-auto h-auto"
          />
        </div>

        {/* services */}
        <div className="flex flex-col items-center gap-10">
          {/* row 1 */}
          <div className="flex items-start gap-10">
            {/* service 1 */}
            <Section3ServicesItem
              pathToImage="/section3/semiologia.png"
              title="General"
              description="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            />
            {/* service 2 */}
            <Section3ServicesItem
              pathToImage="/section3/service2.png"
              title="Pediatrics"
              description="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            />
            {/* service 3 */}
            <Section3ServicesItem
              pathToImage="/section3/service3.png"
              title="Nutritional"
              description="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            />
          </div>
          {/* row 2 */}
          <div className="flex items-start gap-10">
            {/* service 4 */}
            <Section3ServicesItem
              pathToImage="/section3/healthy.png"
              title="Cardiology"
              description="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            />
            {/* service 5 */}
            <Section3ServicesItem
              pathToImage="/section3/service5.png"
              title="Ophthalmology"
              description="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            />
            {/* service 6 */}
            <Section3ServicesItem
              pathToImage="/section3/ambulance.png"
              title="Orthopedics"
              description="Lorem ipsum dolor sit amet, consecte tur adipiscing elit aliquet iTristique id nibh lobortis nunc"
            />
          </div>
          <div></div>
        </div>
      </section>

      {/* section 4: CTA */}
      <section className="relative m-24">
        {/* info box */}
        <div className="flex flex-col items-center gap-3">
          <p className="text-green text-center text-[22px] font-medium leading-normal tracking-[.44px]">
            Book an appointment
          </p>
          <div
            className="flex justify-center items-center rounded-[32px] py-12 px-24"
            style={{
              background:
                "linear-gradient(145deg, #1678F2 3.73%, #65A8FB 132.69%)",
            }}
          >
            <div className="flex flex-col justify-between items-center shrink-0 gap-8">
              <div className="flex flex-col justify-center items-center gap-4">
                <p className="text-white text-center text-[32px] font-semibold leading-normal max-w-[903px]">
                  Schedule a virtual or presential appointment today
                </p>
                <p
                  className={`text-white text-center ${sora.className} text-[16px] leading-6 opacity-80 max-w-[676px]`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas egestas viverra turpis habitant eu sociis fermentum
                  felis.
                </p>
              </div>
              {/* cta button */}
              <WhiteButton
                icon={<WhatsappIcon stroke="#3A8EF6" />}
                text="Book an appointment"
              />
            </div>
          </div>
        </div>
        {/* plus icons */}
        <PlusIcon className="absolute top-2 left-5 w-20 h-20" />
        <PlusIcon className="absolute -left-5 bottom-20 w-5 h-5" />
        <PlusIcon className="absolute -bottom-11 left-40 w-12 h-12" />
        <PlusIcon className="absolute top-7 right-24 w-4 h-4" />
        <PlusIcon className="absolute -right-8 top-20 w-8 h-8" />
        <PlusIcon className="absolute -bottom-9 right-10 w-16 h-16" />
      </section>

      {/* section 5: video */}
      <section className="m-24 flex flex-col items-center gap-8">
        <p className="text-green text-center text-[22px] font-medium tracking-[.44px]">
          Why Dr. Matthew Anderson?
        </p>

        {/* player */}
        <div
          className="rounded-[32px] w-[1012px] h-[567px] flex justify-center items-center"
          style={{
            background:
              "url('/section5/player-image.png'), lightgray 0px -23.075px / 100% 119.048% no-repeat", //linear-gradient(145deg, #1678F2 3.73%, #65A8FB 132.69%),
          }}
        >
          <Image
            src={"/section5/play-button.png"}
            alt="play button"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>

        {/* details */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-dark text-center text-[32px] font-semibold max-w-[800px]">
            A dedicated doctor with the core mission to help
          </p>
          <p
            className={`text-second text-center ${sora.className} text-[16px] leading-6 max-w-[843px]`}
          >
            orem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            nibh cursus at sed sagittis amet, sed. Tristique id nibh lobortis
            nunc elementum. Tellus quam mauris aenean turpis vulputate sodales
            nullam lobortis. Vulputate tortor tincidun.
          </p>
        </div>

        {/* listitems */}
        <div className="flex items-start gap-8 mt-4">
          <Section5ListItem
            icon={<ClockIcon />}
            text="+15 years of experience"
          />
          <Section5ListItem
            icon={<CheckCircleIcon />}
            text="Urgent 24 hour service"
          />
          <Section5ListItem
            icon={<MedicalSymbolIcon />}
            text="High quality care"
          />
        </div>
      </section>

      {/* section 6: review */}
      <section className="bg-[#F2F7FF] w-full p-24 flex flex-col items-center gap-12">
        {/* testimonials */}
        <div className="flex flex-col items-start gap-4 max-w-[676px]">
          <p className="text-dark text-center text-[32px] font-semibold">
            What our great customers say about Dr. Matthew Anderson
          </p>
          <p
            className={`text-second text-center ${sora.className} text-[16px] leading-6`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>

        {/* content */}
        <div className="flex items-center gap-4">
          <ChevronLeft />

          {/* reviews */}
          <div className="grid grid-rows-2 grid-cols-2 gap-8">
            <Review
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              author={{
                pathToImage: "/section6/review1.png",
                name: "Samy White",
                title: "Cardiology Patient",
              }}
            />
            <Review
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              author={{
                pathToImage: "/section6/review2.png",
                name: "Arthur Northon",
                title: "Nutrion Patient",
              }}
            />
            <Review
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              author={{
                pathToImage: "/section6/review3.png",
                name: "Kevin Smith",
                title: "Orthopedics Patient",
              }}
            />
            <Review
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
              author={{
                pathToImage: "/section6/review4.png",
                name: "Amanda Jackson",
                title: "Ophthalmology Patient",
              }}
            />
          </div>
          <ChevronRight />
        </div>
      </section>
    </main>
  );
}
