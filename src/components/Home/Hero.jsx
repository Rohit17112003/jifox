const Hero = () => {
  const design = (
    <>
      <div className="md:px-0 grid grid-flow-row md:grid-cols-2 grid-cols-1 ">
      
        <div className="bg-[#F6F6F6] md:px-0 px-4 flex items-center md:py-0 py-5 relative">
          <div className=" bg-[#EEEEEE] rounded-lg py-10 pb-12 px-8 w-full md:ml-36 text-black md:-mr-24">
            <p className="text-[1.06rem]">SUMMER SALE 50% OFF rohit</p>
            <p className="font_Architects_Daughter md:text-5xl text-3xl md:py-6 py-4  tracking-wider font-normal">Design For Beauty rohit</p>
            <p className="text-[1.06rem] pb-3.5">You Can Have Anything You Want In Life You Dress For It. </p>
            <a href="/browsecategories" className="border border-black no-underline px-4 py-2 rounded-md shadow-sm shadow-green-200 hover:bg-black hover:text-white">
              All Collection
            </a>
          </div>
        </div>
        <div>
          <img
            src="../home/Rectangle 42.svg"
            alt="hero"
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
  return design;
};

export default Hero;
