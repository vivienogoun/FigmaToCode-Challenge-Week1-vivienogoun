import { Poppins, Sora } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  fallback: ["system-ui", "poppins"],
});

export const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "poppins"],
});
