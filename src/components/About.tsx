import React, { useEffect } from "react";
import { gilroy, tt } from "../utils/fonts";
import AnimatedText from "../../AnimatedText";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const placeholderText = [
  { type: "heading1", text: "COVERING THE" },
  {
    type: "heading2",
    text: "WEB3 GAMBIT",
  },
];

const mission = [{ type: "heading1", text: "MISSION" }];
const vision = [{ type: "heading1", text: "VISION" }];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

function AboutHeader() {
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
      <div
        className={`container ${tt} pt-6 pb-10 text-center text-[40px] leading-10 text-white lg:pt-0 lg:pb-0 lg:text-7xl`}
      >
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

function Mission() {
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
        {mission.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

function Vision() {
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
        {vision.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

const About = () => {
  const about = [
    {
      image: "⛓️",
      title: "Blockchain",
      message: "Immutable distributed ledgers",
    },
    {
      image: "💰",
      title: "Crypto Currency",
      message: "Disintermidiated Money",
    },
    {
      image: "🤖",
      title: "Smart Contracts",
      message: "Autonomous Programs",
    },
    {
      image: "🎟️",
      title: "NFTs",
      message: "Certificates of ownership",
    },
    {
      image: "🗺️",
      title: "Metaverse",
      message: `A new digital "place"`,
    },
    {
      image: "👨‍💻",
      title: "DAOs",
      message: "Organisations run by code",
    },
  ];

  return (
    <div className="mt-10 flex w-full flex-col items-center lg:mt-36">
      <AboutHeader />
      <div className="grid max-w-screen-lg grid-cols-1 justify-center gap-5 lg:my-10 lg:grid-cols-3">
        {about.map((item, key) => (
          <button
            key={key}
            className="bg-[rgba(255,255,255, 0.8)] h-60 w-72 rounded border-2 border-gray-400 p-4 transition-all hover:border-white lg:h-full lg:w-full lg:p-10"
          >
            <div className="text-center text-5xl lg:text-7xl">{item.image}</div>
            <div
              className={`${tt} mt-5 max-w-sm text-center text-3xl uppercase text-white lg:mt-10 lg:text-4xl`}
            >
              {item.title}
            </div>
            <div
              className={`${tt} mt-3 max-w-xs text-center text-xl uppercase text-gray-500 lg:max-w-none`}
            >
              {item.message}
            </div>
          </button>
        ))}
      </div>
      <main className="my-5 mt-7 flex flex-col gap-y-10 lg:my-0 lg:mt-0 lg:mb-10">
        <div className="flex flex-col items-center">
          <Mission />
          <div
            className={`${tt} max-w-xs text-center text-xl uppercase text-gray-400 lg:max-w-xl lg:text-2xl`}
          >
            The Cleveland DAO is a community of blockchain enthusiasts seeking
            opportunities to learn, educate, collaborate, and build with others
            on all facets of Web3.
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Vision />
          <div
            className={`${tt} max-w-xs text-center text-xl uppercase text-gray-400 lg:max-w-md lg:text-2xl`}
          >
            To enhance societal good in the Greater Cleveland area built on Web3
            rails.
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
