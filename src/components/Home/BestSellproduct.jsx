import { PiHeartStraight } from "react-icons/pi";
const BestSellProduct = () => {
  const productList = [
    {
      image: "../home/Rectangle 46.svg",
      rating: "../home/rating.svg",
      name: "Louis Philippe",
      desc: "Lightly Washed Slim Fit Jeans",
      price: "Rs. 999",
      reprice: "Rs. 1999",
      id: "1",
    },
    {
      image: "../home/Rectangle 46 (1).svg",
      rating: "../home/rating.svg",
      name: "Louis Philippe",
      desc: "Lightly Washed Slim Fit Jeans",
      price: "Rs. 999",
      reprice: "Rs. 1999",
      id: "2",
    },
    {
      image: "../home/Rectangle 46 (2).svg",
      rating: "../home/rating.svg",
      name: "Louis Philippe",
      desc: "Lightly Washed Slim Fit Jeans",
      price: "Rs. 999",
      reprice: "Rs. 1999",
      id: "3",
    },
    {
      image: "../home/Rectangle 46 (3).svg",
      rating: "../home/rating.svg",
      name: "Louis Philippe",
      desc: "Lightly Washed Slim Fit Jeans",
      price: "Rs. 999",
      reprice: "Rs. 1999",
      id: "4",
    },
    {
      image: "../home/Rectangle 46 (4).svg",
      rating: "../home/rating.svg",
      name: "Louis Philippe",
      desc: "Lightly Washed Slim Fit Jeans",
      price: "Rs. 999",
      reprice: "Rs. 1999",
      id: "5",
    },
    {
      image: "../home/Rectangle 46 (5).svg",
      rating: "../home/rating.svg",
      name: "Louis Philippe",
      desc: "Lightly Washed Slim Fit Jeans",
      price: "Rs. 999",
      reprice: "Rs. 1999",
      id: "6",
    },
    {
      image: "../home/Rectangle 46 (6).svg",
      rating: "../home/rating.svg",
      name: "Louis Philippe",
      desc: "Lightly Washed Slim Fit Jeans",
      price: "Rs. 999",
      reprice: "Rs. 1999",
      id: "7",
    },
    {
      image: "../home/Rectangle 46 (7).svg",
      rating: "../home/rating.svg",
      name: "Louis Philippe",
      desc: "Lightly Washed Slim Fit Jeans",
      price: "Rs. 999",
      reprice: "Rs. 1999",
      id: "8",
    },
  ];
  const design = (
    <>
      <div>
        <h1 className="text-center px-4 md:px-36 text-[2.2rem] text-2xl font-bold text-black">
          Best Sell Product
        </h1>
        <div className="md:flex hidden justify-between px-4 md:px-36 py-6 text-[1.1rem] ">
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

        <div className="grid md:grid-cols-4 grid-cols-2 px-4 md:px-36 py-5.5 md:gap-7 gap-4">
          {productList.map((items) => (
            <div key={items.id || index}>
              <div className="relative group overflow-hidden md:text-[0.9rem] text-[0.7rem]">
                <img
                  src={items.image}
                  alt="cart"
                  className="w-full h-full object-cover transition duration-500"
                />
                <img
                  src={items.rating}
                  alt="rating"
                  className="md:h-7 h-5 md:-mt-9.5 -mt-7 ml-2"
                />
                <h1 className="text-black md:mt-4 mt-3 ml-3">{items.name}</h1>
                <p className="text-[#717171] md:text-[0.81rem] text-[0.67rem] pb-1.5 ml-3">
                  {items.desc}
                </p>
                <h2 className="text-black md:text-[0.8rem] text-[0.64rem] pb-2 ml-1.5">
                  {items.price}{" "}
                  <span className="text-[#717171] md:text-[0.7rem] text-[0.62rem]">
                    <del>{items.reprice}</del>
                  </span>{" "}
                  <span className="text-[#FF0000] md:text-[0.72rem] text-[0.63rem]">
                    (50% OFF)
                  </span>
                </h2>

                <div className="absolute inset-0  bg-opacity-50 opacity-100 transition duration-300  bg-white rounded-full h-8.5 w-8.5 flex justify-center items-center md:ml-46 ml-34 mt-3  active:bg-red-700">
                  <span className="text-[1.3rem] cursor-pointer">
                    <PiHeartStraight />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center py-10">
          <a
            href="/browsecategories"
            className=" border border-black no-underline px-4 py-1.5 rounded-md mt-2  hover:bg-black hover:text-white text-black"
          >
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
