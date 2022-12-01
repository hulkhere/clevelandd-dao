import React, { useEffect } from "react";
import { gilroy, tt } from "../utils/fonts";
import AnimatedText from "../../AnimatedText";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const founders = [{ type: "heading1", text: "FOUNDERS" }];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

function FoundersText() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      className="App"
      initial="hidden"
      variants={container}
      ref={ref}
      animate={controls}
    >
      <div className={`container ${tt} text-5xl text-white lg:text-7xl`}>
        {founders.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

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
    <div className="mt-4 flex w-full flex-col items-center">
      <FoundersText />
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
