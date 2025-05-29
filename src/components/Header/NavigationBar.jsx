"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { LiaBarsSolid } from "react-icons/lia";
import { HiBars3 } from "react-icons/hi2";
const NavigationBar = () => {
  const [show, setShow] = useState(false);
  const [iseMenu, setIsMenu] = useState(false);

  return (
    <>
      <div className="w-full  bg-[#000]  sticky top-0  justify-between z-40 overflow-x-hidden ">
        <div className="bg-[#fff] w-full flex justify-between items-center  md:px-36 px-4 py-2.5">
          <h1 className="text-[#000]  font-[500] font_amarante text-[22px] md:-mt-1">
            JIFOX
          </h1>

          <div className="flex justify-center items-center bg-[#f6f6f6] rounded-md text-[0.94rem] font_Arial">
            <p
              className=" md:flex hidden items-center gap-5.5 text-[#717171] font-[500] py-1.5 pl-4.5 pr-3.5 rounded-l-md bg-[#F6F6F6] hover:bg-[#f9cfcfb7] hover:rounded-md"
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
            >
              All Categories
              <span className="text-[1.05rem]">
                <IoIosArrowDown />
              </span>
            </p>
            <div
              className={`${
                show ? "bg-[#f7f1f120]" : "bg-[#]"
              } h-5.5 w-0.5 bg-[#9d9191aa] md:block hidden`}
            ></div>
            <div>
              <p
                className="flex items-center gap-28 text-[#717171] font-[500] py-1.5 px-4 md:rounded-r-md rounded-md bg-[#F6F6F6] hover:bg-[#f9cfcfb7] hover:rounded-md "
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
              >
                Search for products
                <span>
                  <FiSearch />
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center  text-[12.5px] md:px-36 px-4 ">
          <ul className="flex items-center md:gap-10 gap-3 text-[#fff]">
            <li className="hidden md:flex items-center gap-2 py-[13.2px] pl-4 pr-3.5 bg-[#f6f6f620]">
              <span className="text-[1.1rem] ">
                <HiBars3 />
              </span>
              <Link href="/Browes">BROWSE CATEGORIES</Link>
              <span className="text-[1.1rem] ml-2">
                <IoIosArrowDown />
              </span>
            </li>

            <li className="py-[13.2px] hover:bg-[#f6f6f620] md:px-5 md:-ml-7">
              <Link href="/">HOME</Link>
            </li>

            <li className="hidden md:flex items-center gap-2 py-[13.2px] hover:bg-[#f6f6f620] px-5 md:-ml-10">
              <Link href="/Shope">SHOPE </Link>
              <span className="text-[1.1rem]">
                <IoIosArrowDown />
              </span>
            </li>

            <li className="hidden md:flex items-center gap-2 py-[13.2px]  hover:bg-[#f6f6f620] px-5 md:-ml-10">
              <Link href="/Blog">BLOG</Link>
              <span className="text-[1.1rem]">
                <IoIosArrowDown />
              </span>
            </li>

            <li className=" py-[13.2px] hover:bg-[#f6f6f620] px-5 md:-ml-10 -ml-5 hidden md:block">
              <Link href="/Contact">CONTACT US</Link>
            </li>
            <li className=" py-[13.2px] hover:bg-[#f6f6f620] px-5 md:-ml-10 -ml-3 md:hidden block">
              <a href="http://hektoecommerce.vercel.app">HEKTO</a>
            </li>
            <li className=" py-[13.2px] hover:bg-[#f6f6f620] px-5 -ml-7 md:hidden block">
              <a href="https://discover-8edl.vercel.app">DISCOVER</a>
            </li>
          </ul>
          <ul className="flex items-center md:gap-5 gap-5 text-[#fff]">
            <li className="hidden md:block  py-[13.2px] hover:bg-[#f6f6f620] px-5">
              <Link href="/Login">LOGIN/REGISTER</Link>
            </li>

            <li className="hidden md:block">
              <img src="../home/cart.svg " alt="cart" className="h-6.5" />
            </li>

            <li className=" md:hidden block ">
              <Link href="/Login">LOGIN</Link>
            </li>

            <li className=" md:hidden block">
              <Link href="/Register ">REGISTER</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
