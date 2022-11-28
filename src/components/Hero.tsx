import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { gilroy, circa, tt } from "../utils/fonts";

import Header from "./Header";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full h-max lg:h-screen flex flex-col text-white bg-black">
      <Header />
      <div
        className={`w-full flex flex-grow items-center justify-center ${gilroy}`}
      >
        <div className="w-full flex flex-col-reverse items-center justify-center lg:flex-row xl:gap-x-40">
          <div className={`flex flex-col ${gilroy}`}>
            <h1
              className={`${tt} text-5xl text-center py-2 lg:py-0 lg:text-left lg:text-7xl`}
              // initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: 0.5 }}
            >
              CLEVELAND <br /> MEETUP
            </h1>
            <p className="mt-5 lg:max-w-lg text-lg text-center lg:text-left px-4 lg:px-0 text-gray-400">
              We hold a monthly meetup called the Cleveland Blockchain and
              Crypto Meetup.
            </p>
            <p className="mt-3 lg:max-w-lg text-lg text-center lg:text-left px-4 lg:px-0 text-gray-400">
              Join us monthly to hear local founders, crypto and macro news, DAO
              ecosystem updates, Web3 conference recaps, and educational
              lectures. Help us build the Network State in Cleveland.
            </p>
            <div className="w-full flex items-center justify-center lg:justify-start gap-x-3 mt-7">
              <Link
                href="https://www.meetup.com/cleveland-blockchain-cryptocurrency-meetup-group/"
                target="_blank"
              >
                <button
                  className={`px-8 h-[3.2rem] bg-[#f3cb02] text-black rounded ${gilroy} flex items-center justify-center group`}
                >
                  MEETUPS
                  <ArrowUpRightIcon className="h-5 w-5 ml-2 group-hover:rotate-45 transition-all" />
                </button>
              </Link>
              <button className="rounded-full w-12 h-12 bg-[#f3cb02] flex items-center justify-center">
                <Image
                  src="/assets/images/twitter.png"
                  alt=""
                  width={22}
                  height={22}
                />
              </button>
            </div>
          </div>
          <img
            src="/assets/images/logo.png"
            alt=""
            className="w-10/12 lg:w-[28rem] lg:h-[28rem] inline-flex pt-10 pb-5 lg:pt-0 lg:pb-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
