import { FaPlus } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiHeartStraight } from "react-icons/pi";

const Browsercategories = () => {
  const productList = [
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
      <div className="grid md:grid-cols-4 grid-cols-3 px-4 md:px-36 pt-10 md:gap-9.5 gap-5 items-center">
        <div className="col-span-1 flex flex-col gap-4 text-[0.9rem]">
          <h1 className="text-[1.85rem] text-black font-semibold">Filters</h1>
        </div>
        <div className="md:col-span-3 col-span-2 grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 py-1 md:py-0">
          <h1 className="text-[1.4rem] text-black font-semibold">Pants</h1>
        </div>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 px-4 md:px-36 md:gap-9.5 gap-5 pt-4  ">
        <div className="col-span-1 md:flex hidden flex-col gap-4 text-[0.9rem] ">
          <div className="flex justify-between items-center text-white bg-[#222222] md:px-4 px-2 py-2.5">
            <p>Sort By</p>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className="flex justify-between items-center text-white bg-[#222222] md:px-4 px-2 py-2.5">
            <p>Size</p>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className="flex justify-between items-center text-white bg-[#222222] md:px-4 px-2 py-2.5">
            <p>Color</p>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className="flex justify-between items-center text-white bg-[#222222] md:px-4 px-2 py-2.5">
            <p>Collection</p>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className="flex justify-between items-center text-white bg-[#222222] md:px-4 px-2 py-2.5">
            <p>Febric</p>
            <span>
              <FaPlus />
            </span>
          </div>
        </div>
        <div className="md:col-span-3 col-span-2 grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-3">
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

                <div className="px-3.5 absolute inset-0  bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 w-full md:h-28 h-22 border shadow-sm border-gray-200 shadow-gray-200 bg-white  active:bg-red-700 md:mt-66 mt-56">
                  <div className=" border border-black w-full md:mt-2.5 mt-2 flex justify-center items-center gap-2.5 hover:bg-black hover:text-white text-black ">
                    <a
                      href="/browsecategories"
                      className=" no-underline md:py-2 py-1.5 md:text-[0.8rem] text-[0.5rem]"
                    >
                      ADD TO CART
                    </a>
                    <span>
                      <HiOutlineShoppingBag />
                    </span>
                  </div>
                  <p className="text-[#717171] md:text-[0.8rem] text-[0.75rem] mt-0.5">
                    Sizes:
                  </p>
                  <p className="text-[#717171] md:text-[0.8rem] text-[0.75rem] -mt-1">
                    32
                  </p>
                  <h2 className="text-black md:text-[0.8rem] text-[0.64rem] -ml-1">
                    {items.price}{" "}
                    <span className="text-[#717171] md:text-[0.7rem] text-[0.62rem]">
                      <del>{items.reprice}</del>
                    </span>{" "}
                    <span className="text-[#FF0000] md:text-[0.72rem] text-[0.63rem]">
                      (50% OFF)
                    </span>
                  </h2>
                </div>
                <div className="absolute inset-0  bg-opacity-50 opacity-100 transition duration-300  bg-white rounded-full h-8.5 w-8.5 flex justify-center items-center md:ml-46  mt-3 ml-35  active:bg-red-700">
                  <span className="text-[1.3rem] cursor-pointer text-black">
                    <PiHeartStraight />
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center py-6">
            <a
              href="/"
              className=" md:block hidden border border-black no-underline px-4 py-1.5 rounded-md mt-2  hover:bg-black hover:text-white text-black"
            >
              Load More
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-10 -mt-10">
        <a
          href="/"
          className="md:hidden block border border-black no-underline px-3 py-1.5 rounded-md mt-2  hover:bg-black hover:text-white text-black"
        >
          Load More
        </a>
      </div>
    </>
  );
  return design;
};
export default Browsercategories;
