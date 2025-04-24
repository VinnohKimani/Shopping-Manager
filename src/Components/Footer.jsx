import React from "react"
import { Link } from "react-router-dom";

export function Footer() {
    return (
      <div>
        <footer className="bg-blue-500 text-center text-sm p-4 mt-6">
          © 2025 Shopping Manager. All rights reserved.
          <Link to={"/contactUs"}>
            <button className="bg-green-600 px-4 rounded cursor-pointer hover:bg-purple-700">Contact us</button>
          </Link>
        </footer>
      </div>
    );
}