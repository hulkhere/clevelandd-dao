import { gilroy, circa, tt } from "../utils/fonts";

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
      <div className={`${tt} text-5xl text-white lg:text-7xl mb-2`}>MEETUPS</div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {collage.map((item, index) => (
          <div key={index}>
            <img
              className="inline-block h-72 w-80 rounded-lg"
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
