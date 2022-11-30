import { gilroy, circa, tt } from "../utils/fonts";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className={`h-20 w-full lg:h-28 ${circa} flex items-center justify-between gap-x-8 p-6 pb-0 lg:px-10`}
    >
      <div className={`pl-3 text-4xl ${tt}`}>CLE DAO</div>
      <div className="flex items-center gap-x-0 lg:gap-x-5">
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
        <Link
          href="https://www.meetup.com/cleveland-blockchain-cryptocurrency-meetup-group/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button
            className={`hidden h-[3.2rem] rounded bg-[#f3cb02] px-4 font-bold text-black lg:px-8 ${gilroy} group items-center justify-center lg:flex`}
          >
            MEETUPS
            <ArrowUpRightIcon className="ml-2 h-5 w-5 transition-all group-hover:rotate-45" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
