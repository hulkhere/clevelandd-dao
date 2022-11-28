import { gilroy, circa, tt } from "../utils/fonts";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className={`w-full h-20 lg:h-28 ${circa} p-6 pb-0 gap-x-8 lg:px-10 flex items-center justify-between`}
    >
      <div className={`pl-3 text-4xl ${tt}`}>CLE DAO</div>
      <div className="flex gap-x-0 lg:gap-x-5 items-center">
        <button className="rounded-full w-12 h-12 bg-[#f3cb02] flex items-center justify-center">
          <Image
            src="/assets/images/twitter.png"
            alt=""
            width={22}
            height={22}
          />
        </button>
        <Link
          href="https://www.meetup.com/cleveland-blockchain-cryptocurrency-meetup-group/"
          target="_blank"
        >
          <button
            className={`hidden px-4 font-bold lg:px-8 h-[3.2rem] bg-[#f3cb02] text-black rounded ${gilroy} lg:flex items-center justify-center group`}
          >
            MEETUPS
            <ArrowUpRightIcon className="h-5 w-5 ml-2 group-hover:rotate-45 transition-all" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
