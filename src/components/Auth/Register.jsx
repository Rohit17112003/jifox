"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const design = (
    <>
      <div className="md:flex md:min-h-screen md:py-0 py-8">
        {/* Left image section */}
        <div className="flex md:w-1/2 items-center justify-center px-4 md:px-0  ml-0 md:ml-36 md:pt-7 md:pb-11">
          <img
            src="../home/Login.svg" // replace with your image path
            alt="Login Visual"
            className="object-cover h-full w-full"
          />
        </div>

        {/* Right login section */}
        <div className="w-full md:w-1/2 flex items-center justify-center  px-4 md:pr-36 md:pl-28 md:-mt-9 mt-8">
          <div className="max-w-md w-full">
            <h2 className="text-[1.8rem] font-semibold mb-6 text-center tracking-wide text-black">
              Create Account
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="First Name"
                className="w-full text-[0.7rem] font-stretch-50% md:p-2.5 p-3 border-2 border-[#8080800e] ring ring-[#717171a3] text-[#717171]  rounded-md focus:outline-none "
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full text-[0.7rem] font-stretch-50% md:p-2.5 p-3 border-2 border-[#8080800e] ring ring-[#717171a3] text-[#717171]  rounded-md focus:outline-none "
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full text-[0.7rem] font-stretch-50% md:p-2.5 p-3 border-2 border-[#8080800e] ring ring-[#717171a3] text-[#717171]  rounded-md focus:outline-none "
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full text-[0.7rem] font-stretch-50% md:p-2.5 p-3 border-2 border-[#8080800e] ring ring-[#717171a3] text-[#717171] rounded-md focus:outline-none "
              />
              <button
                className=" absolute mt-2.5 -ml-8 text-[#717171]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {" "}
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>

              <button
                type="submit"
                className="w-full bg-black text-white md:py-2 py-2.5 rounded-lg hover:bg-gray-800 mt-1"
              >
                Register Now
              </button>
            </form>

            <div className="text-center text-[0.95rem] md:mt-10 mt-6 font-normal text-black">
              Already Have An Account?{" "}
              <a href="/login" className="text-[#0E5CDD] font-normal ml-2">
                Log In
              </a>
            </div>

            <div className="flex justify-center my-4 md:-ml-5">
              <span className=" text-[0.7rem] text-black">Or</span>
            </div>

            <div className="flex justify-center ">
              <button className="text-black p-2 rounded-full ">
                <img src="../login/apple.svg" alt="apple" className="h-8 " />
              </button>
              <button className="text-white  p-2 rounded-full">
                <img src="../login/google.svg" alt="google" className="h-8" />
              </button>
              <button className="text-white  p-2 rounded-full">
                <img
                  src="../login/facebook.svg"
                  alt="facebook"
                  className="h-8"
                />
              </button>
            </div>

            <p className="md:text-[0.7rem] text-[0.8rem] text-center md:mt-4 mt-2 text-black pt-4">
              By Blicking Register Now You Agree To
              <a href="#" className="text-[#0E5CDD] ml-1">
                Terms& conditions
              </a>{" "}
              And{" "}
              <a href="#" className="text-[#0E5CDD]">
                Privacy Policy.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
  return design;
};
export default Register;
