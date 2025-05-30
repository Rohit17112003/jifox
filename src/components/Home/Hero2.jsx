const Hero2 = () => {
  const product = [
    {
      id: "1",
      img: "../home/Rectangle 45.svg",
    },
    {
      id: "2",
      img: "../home/Rectangle 45 (1).svg",
    },
    {
      id: "3",
      img: "../home/Rectangle 45 (2).svg",
    },
  ];
  const design = (
    <>
      <div>
        <div className="grid md:grid-cols-3 grid-cols-3 px-4 md:px-36 py-14 md:gap-7 gap-4">
          {product.map((items) => (
            <div key={items.id || index}>
              <img src={items.img} alt="cart" className="w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
  return design;
};

export default Hero2;
