import { gilroy, circa, tt } from "../utils/fonts";

const Sponsors = () => {
  const sponsors = [
    { image: "/assets/images/sponsors/messari.jpg", name: "Messari" },
    { image: "/assets/images/sponsors/ef.jpeg", name: "Eth Foundation" },
    { image: "/assets/images/sponsors/opolis.jpg", name: "Opolis" },
    { image: "/assets/images/sponsors/bdao.png", name: "Bankless DAO" },
  ];

  return (
    <main className="relative w-full flex items-center justify-center mt-12 lg:mt-0">
      <div
        className={`w-10/12 py-8 lg:p-10 rounded-md lg:rounded-none relative lg:w-full h-max bg-black border-y-[5px] border-white flex flex-col gap-y-10 items-center justify-center lg:flex-row gap-x-14 ${gilroy} bg-black`}
      >
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-4 lg:gap-y-5 text-white items-center lg:-mt-1"
          >
            <img
              src={sponsor.image}
              alt=""
              className="h-24 w-24 aspect-auto rounded-full border-4 border-white bg-white"
            />
            <div className="max-w-[10rem] text-center">{sponsor.name}</div>
          </div>
        ))}
        <div className="absolute left-0 -bottom-5 w-full flex items-center justify-center">
          <div
            className={`w-40 h-10 border-4 border-white bg-white flex items-center justify-center rounded-full`}
          >
            SPONSORS
          </div>
        </div>
      </div>
    </main>
  );
};

export default Sponsors;
