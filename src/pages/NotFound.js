import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function NotFound() {
  return (
    <>
      <Navbar
        navBgColor1={"transparent"}
        navTextColor1={"#fff"}
        border={"fixed left-0 top-0 w-full z-50 ease-in duration-300"}
      />
      <div className="w-screen h-screen relative z-10 bg-black overflow-hidden">
        <iframe
          src="https://giphy.com/embed/xT5LME7zAmggkkK7n2"
          title="Cerberus heads arguing in the dark"
          width="100%"
          height="100%"
          className="absolute"
          frameBorder="0"
        ></iframe>

        <div className="absolute flex items-center justify-center w-screen h-screen z-20 bg-transparent">
          <Link to="/" className="glass">
            <h1 className="md:text-xl">
              ERROR <span className="text-red-500">404</span>: This page does
              not exist
            </h1>
            <p className="md:text-lg ">
              Click to return to <span className="font-bold">XERBERUS.IO</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
