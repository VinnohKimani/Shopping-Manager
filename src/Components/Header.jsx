import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
export function Header() {
  return (
    <div>
      <header className="bg-[#10B981] text-white s p-4 mb-4 shadow-md align-text-center">
        <h1 className="text-5xl font-bold text-center flex items-center justify-center gap-2">
          <FaCartShopping className="text-[#F59E0B]" />
          SHOPPING MANAGER
          <FaCartShopping className="text-[#F59E0B]" />
        </h1>
        <Link to={"/"}>
          <button className="bg-[#F59E0B] px-4 rounded cursor-pointer hover:bg-[#4F46E5]">
            Landing Page
          </button>
        </Link>
      </header>
    </div>
  );
}
