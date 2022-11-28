import { gilroy, tt } from "../utils/fonts";

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
      <div
        className={`${tt} pt-6 pb-10 text-center text-[40px] leading-10 text-white lg:pt-0 lg:pb-0 lg:text-7xl`}
      >
        COVERING THE <br /> WEB3 GAMBIT
      </div>
      <div className="grid max-w-screen-lg grid-cols-1 justify-center gap-5 lg:my-28 lg:grid-cols-3">
        {about.map((item, key) => (
          <button className="bg-[rgba(255,255,255, 0.8)] h-60 w-72 rounded border-2 border-gray-400 p-4 lg:h-full lg:w-full lg:p-10">
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
      <main className="my-10 flex flex-col gap-y-10 lg:my-0 lg:mb-10">
        <div className="flex flex-col items-center">
          <div className={`${tt} text-5xl text-white lg:text-7xl`}>MISSION</div>
          <div
            className={`${tt} max-w-xl text-center text-xl uppercase text-gray-400 lg:text-2xl`}
          >
            The Cleveland DAO is a community of blockchain enthusiasts seeking
            opportunities to learn, educate, collaborate, and build with others
            on all facets of Web3.
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className={`${tt} text-5xl text-white lg:text-7xl`}>VISION</div>
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
