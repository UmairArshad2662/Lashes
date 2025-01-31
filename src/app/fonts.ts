import localFont from "next/font/local";
import { Urbanist } from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});
// local font import here
export const NewYork = localFont({
  src: "./fonts/NewYork.otf",
  display: "swap",
  variable: "--font-newyork",
});

export const AbhayaLibre = localFont({
  src: [
    {
      path: "./fonts/AbhayaLibre-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AbhayaLibre-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/AbhayaLibre-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/AbhayaLibre-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/AbhayaLibre-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-abhaya",
});

export const BebasNeue = localFont({
  src: [
    {
      path: "./fonts/BebasNeue-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bebas",
});
