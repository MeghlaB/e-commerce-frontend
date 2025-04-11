import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";

import { PiSignIn } from "react-icons/pi";

export const Nav2 = () => {
  return (
    <div>
      <div className="bg-yellow-500 py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-extrabold text-gray-800 w-full">
       <Link href="/">
       Kinbo<span className="text-green-600">B</span><span className="text-red-600">D</span>
       </Link>

        </div>

        <div className="bg-white p-2 flex justify-center w-full ">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search our store"
              className="w-full px-4 py-2 rounded-l-md focus:outline-none text-gray-700 placeholder-gray-500"
            />
            <button className="bg-gray-800 text-white px-5 flex items-center justify-center rounded-r-md rounded-l-md">
              <FaSearch />
            </button>
          </div>
        </div>

        <div className="flex justify-end items-center gap-3 w-full">
          

          <Link href="/login">
          <button className="btn"><span className="">
            {" "}
            <PiSignIn />
          </span>SignIn</button>
          </Link>
          <button className="btn">
            <span className="">
              <PiSignIn />
            </span>
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};
