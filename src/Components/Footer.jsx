import React from "react"
import { Link } from "react-router-dom";

export function Footer() {
    return (
      <div>
        <footer className="bg-[#10B981] text-center text-sm p-4 mt-6">
          <Link to={"/contactUs"}>
            <button className="bg-[#F59E0B] px-4 rounded cursor-pointer hover:bg-[#4F46E5]">
              Contact us
            </button>
          </Link>
          <p>© 2025 Shopping Manager. All rights reserved.</p>
        </footer>
      </div>
    );
}