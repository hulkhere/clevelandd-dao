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
    <main className="w-full flex justify-center py-10">
      <div className="grid grid-cols-3 gap-4">
        {collage.map((item, index) => (
          <div key={index}>
            <img
              className="w-80 h-72 rounded-lg inline-block"
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
