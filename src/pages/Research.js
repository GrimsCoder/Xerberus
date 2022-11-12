import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ResearchTable from "../components/tables/ResearchTable";

function Research() {
  return (
    <>
      <Navbar
        navBgColor1={"#fff"}
        navTextColor1={"#000"}
        border={" fixed left-0 top-0 w-full z-10 ease-in duration-300"}
      />
      <div className="flex flex-col h-screen justify-center  items-center">
        <h2 className="pt-10 text-2xl md:text-5xl font-bold text-center">
          Xerberus <span style={{ color: "#ff0000" }}>Research</span>
        </h2>
        <ResearchTable />
      </div>
      <Footer />
    </>
  );
}

export default Research;
