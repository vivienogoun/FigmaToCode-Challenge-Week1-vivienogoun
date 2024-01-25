import { sora } from "@/app/fonts";
import Image from "next/image";

interface ReviewAuthor {
  pathToImage: string;
  name: string;
  title: string;
}

interface ReviewProps {
  text: string;
  author: ReviewAuthor;
}

export default function Review({ text, author }: ReviewProps) {
  return (
    // wrapper
    <div className="flex flex-col items-start gap-8 py-4 px-8 rounded-[32px] bg-white shadow-[0_24px_32px_-3px_rgba(3,9,50,0.04)]">
      {/* content */}
      <div className="flex flex-col items-start gap-4">
        {/* text */}
        <p className="text-dark max-w-[402px] text-[16px] italic font-light">
          {text}
        </p>

        {/* author */}
        <div className="flex items-center gap-4">
          {/* image */}
          <div
            className="w-12 h-12 shrink-0 rounded-[48px]"
            style={{
              background: `url(${author.pathToImage}), lightgray 50% / cover no-repeat`,
            }}
          ></div>

          {/* name & title */}
          <div className="flex flex-col items-start">
            <p className="text-green text-center text-lg font-medium">
              {author.name}
            </p>
            <p className={`text-second text-center ${sora.className} text-xs`}>
              {author.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
