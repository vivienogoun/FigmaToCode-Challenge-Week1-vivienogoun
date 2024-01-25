import Image from "next/image";

interface PlusIconProps {
  className: string;
}

export default function PlusIcon({ className }: PlusIconProps) {
  return (
    <Image
      src="/plus.png"
      alt=""
      width={100}
      height={100}
      className={className}
    />
  );
}
