import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className=" w-full  bg-[#000] px-4 md:px-36  pb-10 overflow-x-hidden">
        <div className=" grid grid-flow-row grid-cols-2 sm:grid-cols-6 gap-2 md:gap-8 mt-10 pt-0.5">
          <div className="text-[#fff] flex flex-col gap-5.5 md:text-[0.91rem] text-[1.1rem] col-span-2">
            <h1 className="cursor-pointer md:text-[1.1rem] text-[1.4rem]">
              About Shop
            </h1>
            <p className="cursor-pointer ">
              Lorem Is Dolor Sit Amet, Consectetur Adipisicing Elit. Read More{" "}
            </p>
            <p className="cursor-pointer">E. support@cloth.co</p>
            <p className="cursor-pointer">T. (91) 345 454 54 22</p>
          </div>

          <div className="text-[#fff] flex flex-col gap-3.5 md:text-[0.91rem] text-[1.1rem]">
            <h1 className="cursor-pointer md:text-[1.1rem] text-[1.4rem]">
             Company
            </h1>
            <p className="cursor-pointer mt-2">About Us</p>
            <p className="cursor-pointer">Careers</p>
            <p className="cursor-pointer">Store Locator</p>
            <p className="cursor-pointer">Contact Us</p>
          </div>

          <div className="text-[#fff] flex flex-col gap-3.5 md:text-[0.91rem] text-[1.1rem]">
            <h1 className="cursor-pointer md:text-[1.1rem] text-[1.4rem]">
             Customer Care 
            </h1>
            <p className="cursor-pointer mt-2">Size Guide</p>
            <p className="cursor-pointer">Help & FAQs</p>
            <p className="cursor-pointer">Return My Order</p>
            <p className="cursor-pointer">Refer A Freind</p>
          </div>

          <div className="text-[#fff] flex flex-col gap-3.5 md:text-[0.91rem] text-[1.1rem]">
            <h1 className="cursor-pointer md:text-[1.1rem] text-[1.4rem]">
              Terms & Policies
            </h1>
            <p className="cursor-pointer mt-2">Duties & Taxes</p>
            <p className="cursor-pointer">Shipping Info</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms Conditions</p>
          </div>

          <div className="text-[#fff] flex flex-col gap-3.5 md:text-[0.91rem] text-[1.1rem]">
            <h1 className="cursor-pointer md:text-[1.1rem] text-[1.4rem]">
             Follow Us 
            </h1>
            <p className="cursor-pointer mt-2">Instagram</p>
            <p className="cursor-pointer">Facebook</p>
            <p className="cursor-pointer">Twitter</p>
            <p className="cursor-pointer">Threads</p>
          </div>
        </div>
      </div>

      <div className="bg-[#000] ">
         <hr className=" bg-[#d9d9d991] w-full h-[2.5px]"></hr>
        <div className="md:flex md:justify-between text-center  md:py-[44.5px] py-8 px-4 md:px-36">
          <p className="text-white text-[1rem] md:text-[0.9rem]">
           © 2024 Vedant Tidke. All Right Reserved
          </p>
          <div className="mt-4 md:mt-0 flex justify-center">
            <img src="../home/Frame 53.svg" alt="icon" className="md:h-6 h-4"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
