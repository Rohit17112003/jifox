const Hero2 = () => {
  const product = [
    {
      id: "1",
      hover: "Men's",
      img: "../home/Rectangle 45.svg",
    },
    {
      id: "2",
       hover: "Women's",
      img: "../home/Rectangle 45 (1).svg",
    },
    {
      id: "3",
       hover: "Kids",
      img: "../home/Rectangle 45 (2).svg",
    },
  ];
  const design = (
    <>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-3 px-4 md:px-36 py-14 md:gap-7 gap-4">
          {product.map((items) => (
            <div key={items.id || index}>
              <div className="relative group overflow-hidden">
                {/* Image */}
                <img
                  src={items.img} // yahan aap apni image ka path den
                  alt="Collection"
                  className="w-full h-full object-cover transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0  bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-white md:mt-52">
                  <h2 className="text-[2.1rem]  mb-6 tracking-wide">
                   {items.hover}
                  </h2>
                  <button className=" text-black px-5 py-2 rounded-md hover:text-white hover:bg-black border border-black">
                  <a href="/"> View Collection</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
  return design;
};

export default Hero2;
