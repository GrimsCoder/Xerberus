import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Roadmap from "../components/Roadmap";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Navbar
        navBgColor1={"transparent"}
        navTextColor1={"#fff"}
        border={"fixed left-0 top-0 w-full z-10 ease-in duration-300"}
      />
      <Hero />
      <Info />
      <Form />
      <Roadmap />
      <Footer />
    </>
  );
}

export default Home;
