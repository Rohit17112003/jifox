import { PiStarFourThin } from "react-icons/pi";
const Shipping = () => {
  const productList = [
    {
      image: "../home/free shipping.svg",
      name: "FREE SHIPPING",
      star: "../home/star.svg",
      desc: "ENJOY FREE SHIPPING ON ALL ORDERS NO MINIMUM PURCHASE REQUIRED.",
      url: "",
    },
    {
      image: "../home/customer support.svg",
      name: "24/7 SUPPORT",
      star: "../home/star.svg",
      desc: "OUR TEAM IS AVAILABLE 24/7 TO HELP WITH ANY QUESTIONS OR CONCERNS.",
      url: "",
    },
    {
      image: "../home/money back.svg",
      name: "MONEY BACK",
      star: "../home/star.svg",
      desc: "WE OFFER A 100% MONEY BACK GUARANTEE FOR YOUR SATISFACTION.",
      url: "",
    },
  ];

  const design = (
    <>
      <div className="grid grid-cols-1  md:grid-cols-3 justify-between items-center px-4 md:px-36 gap-7 ">
        {productList?.map((data, index) => {
          const { image, desc, name, star } = data;
          return (
            <div key={index}>
              <div className="">
                <div className=" flex justify-center ">
                  <img src={image} alt="shipping" className="w-24 h-20" />
                </div>
                <div className="p-4 text-center">
                  <p className="text-[#000] text-[1.35rem] font-bold"> {name} </p>
                  <div className="flex justify-center py-2.5">
                    <img src={star} alt="star" />
                  </div>
                  <p className="text-[#000] md:text-[0.85rem] font-normal">{desc} </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
  return design;
};
export default Shipping;
