import Image from "next/image";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const page = () => {
  const design = (
    <>
      <div className="min-h-screen flex items-center justify-center  px-4 md:px-36 py-5">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-6  overflow-hidden">
          <div className="hidden md:block">
            <img
              src="../home/Login.svg"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">
              Create Account
            </h2>
            <form className="space-y-4">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
              <input type="email" placeholder="Email" required />
              <input type="password" placeholder="Password" required />
              <button
                type="submit"
                className="w-full bg-black text-white hover:bg-gray-900"
              >
                Register Now
              </button>
            </form>

            <p className="text-center mt-4 text-sm">
              Already Have An Account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Log In
              </a>
            </p>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">Or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            <div className="flex justify-center space-x-4">
              <button variant="outline" size="icon" className="rounded-full">
                <FaApple />
              </button>
              <button variant="outline" size="icon" className="rounded-full">
                <FaFacebook />
              </button>
              <button variant="outline" size="icon" className="rounded-full">
                <FaGoogle />
              </button>
            </div>

            <p className="text-xs text-center text-gray-500 mt-4">
              By Clicking Register Now you Agree To{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Terms & Conditions
              </a>{" "}
              And{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
  return design;
};
export default page;
