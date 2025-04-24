import React from "react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div>
      <header className="bg-blue-500 text-white p-4 shadow-md align-text-center">
        <h1 className="text-xl font-semibold text-center">
          🛒 SHOPPING MANAGER 🛒
          <br />
          <Link to={"/input"}>
            <button className="bg-green-600 px-4 rounded cursor-pointer hover:bg-purple-700">
              Input details
            </button>
          </Link>
          <br />
          <br />
          <Link to={"/title"}>
            <button className="bg-green-600 px-4 rounded cursor-pointer hover:bg-purple-700">
              Top Page
            </button>
          </Link>
          <br />
          <br />
          <Link to={"/all"}>
            <button className="bg-green-600 px-4 rounded cursor-pointer hover:bg-purple-700">
              Home
            </button>
          </Link>
        </h1>
      </header>
    </div>
  );
}
