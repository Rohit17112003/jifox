const CostomerReview = () => {
  const design = (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 px-4 md:px-36 mt-6 md:mt-9">
        <img src="../home/Rectangle 49.svg" />
        <div className="bg-[#F5F5F5] h-full w-full flex flex-col items-center justify-center px-0 md:px-24 text-center py-12 md:py-0 text-black">
          <p className="text-[0.9rem]">SALE EVENT</p>
          <h1 className="md:text-[1.8rem] text-2xl px-1 font-bold leading-9">
            Summer Product Limited Offer - ₹399
          </h1>
          <p className="text-[0.8rem] md:mt-2.5 mt-2">
            Until 12/06/24. use code SUMFEST at checkout
          </p>
          <div className="flex justify-center md:pt-9 pt-5">
            <a
              href="/browsecategories"
              className=" border border-black no-underline px-4 py-1.5 rounded-md mt-2  hover:bg-black hover:text-white"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
      <div className="text-center px-4 md:px-60 md:mt-12 mt-6 ">
        <h1 className="text-black font-bold md:text-[2.25rem] text-2xl">
          Customers Reviews
        </h1>
        <p className="text-[#717171] md:text-[1.3rem] text-[0.8rem] capitalize md:pt-6 pt-2 leading-6">
          “As a men Who Value our health, we’re here to do what we do best -
          roll up our sleeves to get it done right.”
        </p>
        <p className="md:text-[1.3rem] text-[1rem] text-black font-semibold md:pt-3 pt-1">
          Alex Dope
        </p>
        <div className="flex justify-center md:gap-3 gap-2 py-2 md:mt-0.5 mt-0">
          <div>
            <div className="md:h-3 h-2 md:w-3 w-2 bg-[#000] rounded-full"></div>
          </div>
          <div>
            <div className="md:h-3 h-2 md:w-3 w-2 bg-[#D9D9D9] rounded-full"></div>
          </div>
          <div>
            <div className="md:h-3 h-2 md:w-3 w-2 bg-[#D9D9D9] rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
  return design;
};
export default CostomerReview;
