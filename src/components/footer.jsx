import React from "react";
import Image from "next/image";
import LogoFooter from "../../public/assets/images/logo.png";
import PolygonFooter from "../../public/assets/images/footer/polygon-token.png";
import EthereumFooter from "../../public/assets/images/footer/ethereum.png";
import LocationFooter from "../../public/assets/images/footer/location.png";
import Twitter from "../../public/assets/images/twitter.png";
import { gilroy, circa, tt } from "../utils/fonts";

// const footer = [PolygonFooter, EthereumFooter, LocationFooter, Twitter];

const footer = [
  { image: PolygonFooter, link: "https://twitter.com/cleveland_dao" },
  { image: EthereumFooter, link: "https://twitter.com/cleveland_dao" },
  {
    image: LocationFooter,
    link: "https://www.google.com/maps/place/Liberty+Commons,+Rockside+Rd,+Independence,+OH+44131,+USA/@41.3940603,-81.6465313,17z/data=!3m1!4b1!4m5!3m4!1s0x8830e4345b9c55bd:0x1159bdec380ba5e3!8m2!3d41.3940603!4d-81.6443426",
  },
  { image: Twitter, link: "https://twitter.com/cleveland_dao" },
];

export default function Footer() {
  return (
    <div className="tk-degular-text flex w-full items-center justify-center bg-[#9ca3af63]">
      <main className="flex w-full flex-col items-center justify-center p-8 py-16">
        {/* <div className="w-48">
          <Image src={LogoFooter} alt="" />
        </div> */}
        <div className="flex gap-x-6 lg:gap-x-8">
          {footer.map((footer, index) => (
            <a
              href={footer.link}
              target="_blank"
              rel="noreferrer noopener"
              key={index}
              className="footer-gradient flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white p-4 shadow-xl transition-all"
            >
              <Image src={footer.image} alt />
            </a>
          ))}
        </div>
        <h1 className={`text-lg text-black ${gilroy} mt-4`}>
          ©2022 Cleveland Meetup
        </h1>
      </main>
    </div>
  );
}
