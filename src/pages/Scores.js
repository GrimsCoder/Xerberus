import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Table from "../components/tables/DashboardTable";

function Scores() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div className="flex justify-center">
        <div className="announcement w-fit text-l md:text-2xl lg:text-5xl z-30">
          <h1 className="h1">
            <span className="a1"> &nbsp; PRE-ALPHA Version&nbsp; </span>
            <span className="a2"> &nbsp; PRE-ALPHA Version&nbsp; </span>
          </h1>
        </div>
        <Navbar
          navBgColor1={"transparent"}
          navTextColor1={"#000"}
          border={
            "border fixed left-0 top-0 w-[100vw] z-40 ease-in duration-300"
          }
        />

        <div className="overflow-auto h-[80vh] w-[95vw] sm:w-[80vw] mt-[10vh] sm:mt-[15vh] pb-10">
          <Table />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Scores;
