import { Nav2 } from "@/app/components/NavComponents/Nav2";
import { Nav3 } from "@/app/components/NavComponents/Nav3";
import React from "react";

function Navbar() {
  return (
    <div className="bg-yellow-500">
      <div className=" container mx-auto">
        <Nav2></Nav2>
      </div>
      <div className="bg-white">
       <div className="container mx-auto">
       <Nav3></Nav3>
       </div>
      </div>
    </div>
  );
}

export default Navbar;
