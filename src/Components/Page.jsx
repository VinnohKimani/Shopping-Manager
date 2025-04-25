import React from "react";
import { Link } from "react-router-dom";
const Page = () => {
  return (
    <>
      <header>
        <h1>
          WELCOME TO SHOPPING MANAGER {""}
          <img
            src="https://i.makeagif.com/media/4-01-2022/L-2xXW.gif"
            alt="logo"
            style={{ height: "200px", verticalAlign: "middle" }}
          />
        </h1>

        <h2>Your budget your freedom!!</h2>
        <Link to={"/addBudget"}>
          <button className="bg-[#F59E0B] px-4 rounded cursor-pointer hover:bg-[#4F46E5]">
            Home
          </button>
        </Link>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/962/999/non_2x/shopping-graphic-clipart-design-free-png.png"
          alt="img1"
          style={{ width: "100%" }}
        />
        <img
          src="https://th.bing.com/th/id/OIP.QoQyFkIWS-viXP2QmxcpfgHaHC?rs=1&pid=ImgDetMain"
          alt="img2"
          style={{ width: "100%" }}
        />
        <img
          src="https://www.shutterstock.com/image-photo/man-selecting-fresh-vegetables-grocery-260nw-2521310723.jpg"
          alt="img3"
          style={{ width: "100%" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumMc8P7AQXeD0W7dljy__4oPrK7GXFSNx6A&s"
          alt="img3"
          style={{ width: "100%" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MJsMCiV5AvSxEhiWV-oagUAzgw0-ldN5Ag&s"
          alt="img3"
          style={{ width: "100%" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13cdGvlJ8xZR9lZpeiiSwoikU769kMlv_dw&s"
          alt="img3"
          style={{ width: "100%" }}
        />
      </div>
    </>
  );
};

export default Page;
