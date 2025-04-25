import React from "react";
import { Link } from "react-router-dom";
const Page = () => {
  return (
    <div className="bg-green-100 h-screen flex flex-col p-8">
      <header>
        <h1 className="font-bold text-4xl">WELCOME TO SHOPPING MANAGER {""}</h1>
        <h2 className="text-2xl font-bold">Your budget your freedom!!</h2>
      </header>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/962/999/non_2x/shopping-graphic-clipart-design-free-png.png"
          alt="img1"
          style={{ width: "100%", height: "350px" }}
        />
        <img
          src="https://th.bing.com/th/id/OIP.QoQyFkIWS-viXP2QmxcpfgHaHC?rs=1&pid=ImgDetMain"
          alt="img2"
          style={{ width: "100%", height: "350px" }}
        />

        <img
          src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX9951199.jpg"
          alt="img3"
          style={{ width: "100%", height: "350px" }}
        />
        <img
          src="https://media.istockphoto.com/id/1178328581/photo/man-buying-beer.jpg?s=612x612&w=0&k=20&c=2CduQmf8grWnWvxLcrX_Iq4ID9lnmdoNBJkTKSvrrGI="
          alt="img3"
          style={{ width: "100%", height: "350px" }}
        />
      </div>
      <div className="flex justify-center py-5 gap-5">
        <figure>
          <img
            src="https://i.makeagif.com/media/4-01-2022/L-2xXW.gif"
            alt="logo"
            style={{ height: "200px", verticalAlign: "middle" }}
          />
        </figure>
        <Link to={"/addBudget"}>
          <button className="bg-[#F59E0B] px-4 rounded cursor-pointer hover:bg-[#4F46E5] w-[200px] h-[200px] font-extrabold text-3xl">
            Home
          </button>
        </Link>
        <figure>
          <img
            src="https://i.makeagif.com/media/4-01-2022/L-2xXW.gif"
            alt="logo"
            style={{ height: "200px", verticalAlign: "middle" }}
          />
        </figure>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        <img
          src="https://www.shutterstock.com/image-photo/man-selecting-fresh-vegetables-grocery-260nw-2521310723.jpg"
          alt="img3"
          style={{ width: "100%", height: "350px" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumMc8P7AQXeD0W7dljy__4oPrK7GXFSNx6A&s"
          alt="img3"
          style={{ width: "100%", height: "350px" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_MJsMCiV5AvSxEhiWV-oagUAzgw0-ldN5Ag&s"
          alt="img3"
          style={{ width: "100%", height: "350px" }}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR13cdGvlJ8xZR9lZpeiiSwoikU769kMlv_dw&s"
          alt="img3"
          style={{ width: "100%", height: "350px" }}
        />
      </div>
    </div>
  );
};

export default Page;
