const BestSellProduct = () => {
  const productList = [
    {
      image: "../home/Rectangle 46.svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "1",
    },
    {
      image: "../home/Rectangle 46 (1).svg",
      title: "Surfauxion",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "2",
    },
    {
      image: "../home/Rectangle 46 (2).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "3",
    },
    {
      image: "../home/Rectangle 46 (3).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "4",
    },
    {
      image: "../home/Rectangle 46 (4).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "5",
    },
    {
      image: "../home/Rectangle 46 (5).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "6",
    },
    {
      image: "../home/Rectangle 46 (6).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "7",
    },
    {
      image: "../home/Rectangle 46 (7).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "8",
    },
  ];
  const design = (
    <>
      <div>
        <h1 className="text-center px-4 md:px-36 text-4xl">
          Best Sell Product
        </h1>
        <div className="md:flex hidden justify-between px-4 md:px-36 py-7 text-[1.1rem] ">
          <button className="bg-[#000] text-[#fff] py-1.5 px-6  rounded-md">
            All
          </button>
          <button className="text-[#000] py-1.5 px-6 hover:text-white hover:bg-black rounded-md outline-1 shadow-sm shadow-gray-300">
            Casual Shirts
          </button>
          <button className="text-[#000] py-1.5 px-6 hover:text-white hover:bg-black rounded-md outline-1 shadow-sm shadow-gray-300">
            Formal Shirts
          </button>
          <button className="text-[#000] py-1.5 px-6 hover:text-white hover:bg-black rounded-md outline-1 shadow-sm shadow-gray-300">
            T-Shirts
          </button>
          <button className="text-[#000] py-1.5 px-6 hover:text-white hover:bg-black rounded-md outline-1 shadow-sm shadow-gray-300">
            Pants
          </button>
          <button className="text-[#000] py-1.5 px-6 hover:text-white hover:bg-black rounded-md outline-1 shadow-sm shadow-gray-300">
            Jeans
          </button>
          <button className="text-[#000] py-1.5 px-6 hover:text-white hover:bg-black rounded-md outline-1 shadow-sm shadow-gray-300">
            Hoodie
          </button>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-1 px-4 md:px-36 py-5 gap-7">
          {productList.map((items) => (
            <div key={items.id || index}>
              <img src={items.image} alt="cart" className="w-full h-full" />
            </div>
          ))}
        </div>

        <div className="flex justify-center py-10">
          <a href="/browsecategories" className=" border border-black no-underline px-4 py-1.5 rounded-md mt-2  hover:bg-black hover:text-white">
            Load More
          </a>
        </div>
        <div className="px-4 md:px-36 pb-10">
          {" "}
          <hr></hr>
        </div>
      </div>
    </>
  );
  return design;
};
export default BestSellProduct;
