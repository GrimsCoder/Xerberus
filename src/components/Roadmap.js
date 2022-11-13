import React, { useContext } from "react";

import { GlobalContext } from "./GlobalContext";

import { IoIosArrowDown } from "react-icons/io";

import Arrow from "./roadmap/Arrow";
import ArrowDR from "./roadmap/ArrowDR";
import ArrowUp from "./roadmap/ArrowUp";
import CF from "./roadmap/CF";
import IN1 from "./roadmap/IN1";
import IN2 from "./roadmap/IN2";
import PD from "./roadmap/PD";
import PM from "./roadmap/PM";
import PS from "./roadmap/PS";
import RM from "./roadmap/RM";
import SA from "./roadmap/SA";
import SRS from "./roadmap/SRS";
import TDA from "./roadmap/TDA";
import TRS from "./roadmap/TRS";
import WorkCards from "./WorkCards";

function Roadmap() {
  const context = useContext(GlobalContext);
  return (
    <div className="relative">
      <IoIosArrowDown
        size={50}
        className="absolute -top-[7rem] text-gray-200 text-center w-full z-[3]"
      />
      <div className="flex relative items-center justify-center  bg-no-repeat bg-center bg-auto sm:bg-cover xrb-bg-img">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]"></div>
        <h1 className="w-[screen] text-2xl md:text-5xl text-center font-bold pt-20 pb-20 text-white z-[3]">
          ROAD <span style={{ color: "#ff0000" }}>MAP</span>
        </h1>
      </div>
      <div className="flex pt-10 pb-20 lg:hidden items-center justify-center">
        <img
          src="/roadmap.png"
          alt="/"
          layout="responsive"
          width="90%"
          height="90%"
        />
      </div>
      <div className=" hidden lg:flex items-center justify-center ">
        <div className="roadmap flex items-center pt-20 pb-20">
          <div
            className="tda scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs1)}
          >
            <TDA />
          </div>
          <div className="ar1 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <Arrow />
          </div>
          <div
            className="srs scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs1)}
          >
            <SRS />
          </div>
          <div className="au1 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <ArrowUp />
          </div>
          <div className="adr1 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <ArrowDR />
          </div>
          <div className="adr2 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <ArrowDR />
          </div>
          <div
            className="in1 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs0)}
          >
            <IN1 />
          </div>
          <div className="ar2 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <Arrow />
          </div>
          <div
            className="sa scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs0)}
          >
            <SA />
          </div>
          <div
            className="pd scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs2)}
          >
            <PD />
          </div>
          <div
            className="trs scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs2)}
          >
            <TRS />
          </div>
          <div className="adr3 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <ArrowDR />
          </div>
          <div className="ad1 rotate-90 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <Arrow />
          </div>
          <div className="aur1 -rotate-90 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <ArrowDR />
          </div>
          <div className="adr4 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <ArrowDR />
          </div>
          <div
            className="in2 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs2)}
          >
            <IN2 />
          </div>
          <div className="ar3 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <Arrow />
          </div>
          <div
            className="pm scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs2)}
          >
            <PM />
          </div>
          <div className="ar4 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <Arrow />
          </div>
          <div
            className="rm scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs2)}
          >
            <RM />
          </div>
          <div className="ar5 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <Arrow />
          </div>
          <div
            className="cf scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs3)}
          >
            <CF />
          </div>
          <div className="ar6 scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150">
            <Arrow />
          </div>
          <div
            className="ps scale-[0.5] md:scale-[0.8] lg:scale-100 hover:scale-110 ease-in-out duration-150 cursor-pointer"
            onClick={() => context.handleScroll(context.refs3)}
          >
            <PS />
          </div>
        </div>
      </div>
      <div>
        <WorkCards />
      </div>
    </div>
  );
}

export default Roadmap;
