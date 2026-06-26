import { Geist } from "next/font/google";

// Stand-in for the brand font "Nohemi" until the licensed font files are
// supplied. Once available, replace this with next/font/local pointing at
// the four weights (400/500/600/700) placed in src/fonts/nohemi/ — keep the
// exported name and `variable` the same so no other file needs to change.
export const fontSans = Geist({
  variable: "--font-nohemi",
  subsets: ["latin"],
  display: "swap",
});
