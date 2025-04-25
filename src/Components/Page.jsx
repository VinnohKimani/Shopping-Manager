import React from "react";
import { Link } from "react-router-dom";

const Page = () => {
  return (
    <div
      className="relative min-h-screen w-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(https://images.ctfassets.net/hff6luki1ys4/7LDfs9AiXGaGRRh4LXvvka/72d594a44a5df312beb88c09d9c8ef2d/111323_Welcome_Message_to_New_Employee_Feature_Image.jpg)`, // Add the correct path to your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Left - Headings */}
      <header className="absolute top-8 left-8 z-10">
        <h1 className="font-bold text-5xl drop-shadow-lg">
          WELCOME TO SHOPPING MANAGER
        </h1>
        <h2 className="text-3xl font-semibold mt-2 drop-shadow-lg">
          Your budget, your freedom!!
        </h2>
      </header>

      {/* Top Right - Shopping Manager Button */}
      <div className="absolute top-8 right-8 z-10">
        <Link to={"/shopping-manager"}>
          <button className="bg-[#F59E0B] px-6 py-3 rounded-lg text-xl font-bold hover:bg-[#4F46E5] transition duration-300">
            Shopping Manager
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
