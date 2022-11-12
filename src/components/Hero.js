import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

function Hero() {
  const [color, setColor] = useState();

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("rgba(0,0,0,0)");
      } else {
        setColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-no-repeat bg-center bg-auto sm:bg-cover xrb-bg-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] h-screen"></div>
      <div className="p-5 text-white z-[2]">
        <h2 className="text-5xl font-bold text-center">Token Risk Alerts</h2>
        <p className="py-5 text-xl text-center">
          Your Risk Manager for Cardano Tokens
        </p>
        <Link to="/scores">
          <button className="py-2 border w-full bg-white text-black text-2xl font-bold hover:scale-105">
            Explore <span style={{ color: "#ff0000" }}>Risk</span> Scores
          </button>
        </Link>
        {/* <a
          target="_blank"
          rel="noreferrer"
          href="https://discord.gg/pENmUnABrS"
        >
          <button className="py-2 border w-full bg-white text-black text-2xl font-bold">
            Join the <span style={{ color: "#ff0000" }}>Discord </span>
          </button>
        </a> */}
      </div>
      <IoIosArrowDown
        size={50}
        className="absolute text-white bottom-5 z-[3]"
        style={{ color: `${color}`, transition: "0.3s" }}
      />
    </div>
  );
}

export default Hero;
