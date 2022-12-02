import React, { useEffect } from "react";
import { gilroy, tt } from "../utils/fonts";
import AnimatedText from "../../AnimatedText";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const meetup = [{ type: "heading1", text: "MEETUP" }];

const container = {
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

function Meetup() {
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
        {meetup.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}

const Collage = () => {
  const collage = [
    { image: "/assets/images/collage/collage-one.jpg" },
    { image: "/assets/images/collage/collage-two.jpg" },
    { image: "/assets/images/collage/collage-three.png" },
    { image: "/assets/images/collage/collage-four.png" },
    { image: "/assets/images/collage/collage-five.png" },
    { image: "/assets/images/collage/collage-six.png" },
  ];

  return (
    <main className="flex w-full flex-col items-center justify-center py-10">
      <Meetup />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {collage.map((item, index) => (
          <div key={index}>
            <img
              className="inline-block h-72 w-80 rounded-lg object-cover"
              src={item.image}
              alt="collage"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Collage;
