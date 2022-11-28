import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { circa, gilroy, overpass, tt } from "../utils/fonts";
import About from "../components/About";
import Collage from "../components/collage";
import Founders from "../components/founders";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Sponsors from "../components/Sponsors";
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <Sponsors />
      <About />
      <Founders />
      <Collage />
      <Footer />
    </main>
  );
}
