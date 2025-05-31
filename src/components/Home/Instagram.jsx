const Instagram = () => {
  const design = (
    <>
    <h1 className="text-center text-black font-bold md:text-[2.25rem] text-2xl py-9 px-4">Instagram With #April</h1>
      <div className="grid grid-cols-3 px-4 md:px-36 pb-10 md:gap-7 gap-5">
        <div className=" col-span-1 md:py-1 py-0">
          <img src="../home/Rectangle 51.svg"  className="w-full h-full"/>
        </div>
        <div className="col-span-2 grid grid-cols-3 md:gap-5 gap-3 py-1 md:py-0">
          <img src="../home/Rectangle 53.svg" className="h-full" />
          <img src="../home/Rectangle 54.svg" className="h-full" />
          <img src="../home/Rectangle 55.svg" className="h-full" />
          <img src="../home/Rectangle 56.svg" className="h-full" />
          <img src="../home/Rectangle 57.svg" className="h-full" />
          <img src="../home/Rectangle 58.svg" className="h-full" />
        </div>
      </div>
    </>
  );
  return design;
};
export default Instagram;
