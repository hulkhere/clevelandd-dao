import localFont from "@next/font/local";
import { Overpass_Mono, Space_Grotesk } from "@next/font/google";

const _circa = localFont({
  src: "../../public/assets/fonts/circa/Cirka-Bold.otf",
  display: "swap",
  preload: true,
});
const _tt = localFont({
  src: "../../public/assets/fonts/tt/tt.woff2",
  display: "swap",
  preload: true,
});
const _overpass = Overpass_Mono({
  weight: "700",
  preload: true,
  subsets: ["latin"],
});
const _gilroy = Space_Grotesk({
  preload: true,
  subsets: ["latin"],
  weight: "600",
});

const circa = _circa.className;
const overpass = _overpass.className;
const gilroy = _gilroy.className;
const tt = _tt.className;

export { circa, overpass, gilroy, tt };
