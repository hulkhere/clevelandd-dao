import { gilroy, circa, tt } from "../utils/fonts";
import Image from "next/image";

const Founders = () => {
  const founders = [
    {
      image: "/assets/images/founders/founder-one.png",
      title: "Founder 1",
    },
    {
      image: "/assets/images/founders/founder-two.png",
      title: "Founder 2",
    },
    {
      image: "/assets/images/founders/founder-three.png",
      title: "Founder 3",
    },
  ];

  return (
    <div className="mt-4 flex w-full flex-col items-center lg:mt-12">
      <div className={`${tt} text-5xl text-white lg:text-7xl`}>FOUNDERS</div>
      <div className="my-4 grid grid-cols-1 justify-center gap-5 lg:my-6 lg:grid-cols-3">
        {founders.map((item, key) => (
          <button
            key={key}
            className="bg-[rgba(255,255,255, 0.8)] h-full w-full rounded border-2 border-gray-400 p-4 transition-all hover:border-white lg:p-10"
          >
            <img
              src={item.image}
              className="inline-flex"
              width={200}
              height={200}
              alt={""}
            />
            <div
              className={`${tt} mt-5 max-w-sm text-center text-3xl uppercase text-white lg:mt-10 lg:text-4xl`}
            >
              {item.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Founders;
