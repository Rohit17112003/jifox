import { FaPlus } from "react-icons/fa6";
const page = () => {
  const productList = [
    {
      image: "../home/Rectangle 46 (1).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "1",
    },
    {
      image: "../home/Rectangle 46 (2).svg",
      title: "Surfauxion",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "2",
    },
    {
      image: "../home/Rectangle 46 (3).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "3",
    },
    {
      image: "../home/Rectangle 46 (5).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "4",
    },
    {
      image: "../home/Rectangle 46 (6).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "5",
    },
    {
      image: "../home/Rectangle 46 (7).svg",
      title: "SaberAli",
      name: "Top esssential Trends in 2021",
      desc: "More off this less hello samlande lied much over tightly circa horse taped mightly",
      id: "6",
    },
  ];
  const design = (
    <>
      <div className="grid grid-cols-4 px-4 md:px-36 pt-10 md:gap-7 gap-5 items-center">
        <div className="col-span-1 flex flex-col gap-4 text-[0.9rem]">
          <h1 className="text-[1.85rem] font-semibold">Filters</h1>
        </div>
        <div className="col-span-3 grid grid-cols-3 md:gap-5 gap-3 py-1 md:py-0">
          <h1 className="text-[1.4rem] font-semibold">Pants</h1>
        </div>
      </div>

      <div className="grid grid-cols-4 px-4 md:px-36 md:gap-7 gap-5 pt-4 pb-8">
        <div className="col-span-1 flex flex-col gap-4 text-[0.9rem]">
          <div className="flex justify-between items-center text-white bg-[#222222] px-4 py-2.5">
            <p>Sort By</p>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className="flex justify-between items-center text-white bg-[#222222] px-4 py-2.5">
            <p>Size</p>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className="flex justify-between items-center text-white bg-[#222222] px-4 py-2.5">
            <p>Color</p>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className="flex justify-between items-center text-white bg-[#222222] px-4 py-2.5">
            <p>Collection</p>
            <span>
              <FaPlus />
            </span>
          </div>
          <div className="flex justify-between items-center text-white bg-[#222222] px-4 py-2.5">
            <p>Febric</p>
            <span>
              <FaPlus />
            </span>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 md:gap-5 gap-3 py-1 md:py-0">
          {productList.map((items) => (
            <div key={items.id || index}>
              <img src={items.image} alt="cart" className="w-full h-full" />
            </div>
          ))}
          <div className="flex justify-center py-6">
            <button className="hidden border border-black no-underline px-4 py-1.5 rounded-md mt-2  hover:bg-black hover:text-white">
              Load More
            </button>
          </div>
           <div className="flex justify-center py-6">
            <button className=" border border-black no-underline px-4 py-1.5 rounded-md mt-2  hover:bg-black hover:text-white">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
  return design;
};
export default page;
