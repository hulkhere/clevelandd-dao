import React from "react";
import Image from "next/image";
import LogoFooter from "../../public/assets/images/logo.png";
import PolygonFooter from "../../public/assets/images/footer/polygon-token.png";
import EthereumFooter from "../../public/assets/images/footer/ethereum.png";
import LocationFooter from "../../public/assets/images/footer/location.png";
import Twitter from "../../public/assets/images/twitter.png";

const footer = [PolygonFooter, EthereumFooter, LocationFooter, Twitter];

export default function Footer() {
  return (
    <div className="bg-black w-full h-[31.25rem] flex justify-center items-center gap-x-20 xl:gap-x-40 tk-degular-text">
      <main className="flex w-full max-w-4xl justify-between">
        <div className="w-48">
          <Image src={LogoFooter} alt="" />
        </div>
        <div className="flex gap-x-5">
          {footer.map((footer, index) => (
            <div
              key={index}
              className="p-4 w-16 h-16 flex justify-center items-center bg-white rounded-full shadow-lg cursor-pointer footer-gradient"
            >
              <Image src={footer} alt />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
