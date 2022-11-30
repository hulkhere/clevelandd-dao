import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { gilroy, circa, tt } from "../utils/fonts";
import { motion } from "framer-motion";
import Header from "./Header";
import Image from "next/image";
import AnimatedText from "../../AnimatedText";

// const line1 = "CLEVELAND";
// const line2 = "MEETUP";

// const sentence = {
//   hidden: { opacity: 0.5 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 0.5,
//       straggerChildren: 0.08,
//     },
//   },
// };

// const letter = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//   },
// };

const placeholderText = [
  { type: "heading1", text: "CLEVELAND" },
  {
    type: "heading2",
    text: "MEETUP",
  },
];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const Hero = () => {
  return (
    <div className="flex h-max w-full flex-col bg-black text-white lg:h-screen">
      <Header />
      <div
        className={`flex w-full flex-grow items-center justify-center ${gilroy}`}
      >
        <div className="flex w-full flex-col-reverse items-center justify-center lg:flex-row xl:gap-x-40">
          <div className={`flex flex-col ${gilroy}`}>
            <motion.div
              className="App"
              initial="hidden"
              animate="visible"
              variants={container}
            >
              <div
                className={`container ${tt} text-center text-5xl lg:py-0 lg:text-left lg:text-7xl`}
              >
                {placeholderText.map((item, index) => {
                  return <AnimatedText {...item} key={index} />;
                })}
              </div>
            </motion.div>
            <p className="mt-5 px-4 text-center text-lg text-gray-400 lg:max-w-lg lg:px-0 lg:text-left">
              We hold a monthly meetup called the Cleveland Blockchain and
              Crypto Meetup.
            </p>
            <p className="mt-3 px-4 text-center text-lg text-gray-400 lg:max-w-lg lg:px-0 lg:text-left">
              Join us monthly to hear local founders, crypto and macro news, DAO
              ecosystem updates, Web3 conference recaps, and educational
              lectures. Help us build the Network State in Cleveland.
            </p>
            <div className="mt-7 flex w-full items-center justify-center gap-x-3 lg:justify-start">
              <Link
                href="https://www.meetup.com/cleveland-blockchain-cryptocurrency-meetup-group/"
                target="_blank"
              >
                <button
                  className={`h-[3.2rem] rounded bg-[#f3cb02] px-8 text-black ${gilroy} group flex items-center justify-center`}
                >
                  MEETUPS
                  <ArrowUpRightIcon className="ml-2 h-5 w-5 transition-all group-hover:rotate-45" />
                </button>
              </Link>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f3cb02]">
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://twitter.com/cleveland_dao"
                >
                  <Image
                    src="/assets/images/twitter.png"
                    alt=""
                    width={22}
                    height={22}
                  />
                </a>
              </button>
            </div>
          </div>
          <img
            src="/assets/images/logo.png"
            alt=""
            className="inline-flex w-10/12 pt-10 pb-5 lg:h-[28rem] lg:w-[28rem] lg:pt-0 lg:pb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
