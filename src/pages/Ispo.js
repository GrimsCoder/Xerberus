import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "../components/Footer";
import IspoGraph from "../components/graphs/IspoGraph";
import Navbar from "../components/Navbar";

function Ispo() {
  const [color, setColor] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
    <>
      <Navbar
        navBgColor1={"transparent"}
        navTextColor1={"#fff"}
        border={"fixed left-0 top-0 w-full z-50 ease-in duration-300"}
      />
      <div className="flex items-center justify-center h-screen bg-fixed bg-no-repeat bg-center bg-auto sm:bg-cover xrb-bg-img">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/90 z-[2] h-screen"></div>
        <div className="p-5 text-white z-[2]">
          <h2 className="text-5xl font-bold text-center">
            $XER <span style={{ color: "#ff0000" }}>ISPO</span>
          </h2>
          <p className="py-5 text-xl text-center">
            Your Risk Manager for Cardano Tokens
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/pENmUnABrS"
          >
            <button className="py-2 border w-full bg-white text-black text-2xl font-bold">
              Join the Discord
            </button>
          </a>
        </div>
        <IoIosArrowDown
          size={50}
          className="absolute text-white bottom-5 z-[3]"
          style={{ color: `${color}`, transition: "0.3s" }}
        />
      </div>
      <div className="relative flex flex-col justify-center mt-10 pt-20 items-center z-20">
        <div className="flex flex-col p-10 w-[75%] md:w-[55%] bg-white border-4 items-center">
          <h3 className="text-3xl font-bold mb-10">Delegator Deal</h3>
          <div className="flex flex-col items-start">
            <p className="mb-2 text-xl">
              - Up to <span style={{ color: "#ff0000" }}>3%</span> ADA APY
            </p>
            <p className="mb-2 text-xl">
              - <span style={{ color: "#ff0000" }}>50%</span> of $XER Supply
              Issued via ISPO
            </p>
            <p className="mb-2 text-xl">
              - <span style={{ color: "#ff0000" }}>0.004</span> $XER for 1
              Active Staked ADA per Epoch
            </p>
            <p className="mb-2 text-xl">
              - Delegators will be the first group to access the $XER Token,
              Drop Summer <span style={{ color: "#ff0000" }}>2023</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col text-xl mt-10 p-10 w-[75%] md:w-[55%] items-center">
          <table>
            <thead>
              <tr>
                <th>
                  Staked <span style={{ color: "#ff0000" }}>ADA</span> per Epoch
                </th>
                <th>
                  <span style={{ color: "#ff0000" }}>$XER</span> Rewards per
                  Epoch
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,000,000</td>
                <td>4000</td>
              </tr>
              <tr>
                <td>100,000</td>
                <td>400</td>
              </tr>
              <tr>
                <td>10,000</td>
                <td>40</td>
              </tr>
              <tr>
                <td>1,000</td>
                <td>4</td>
              </tr>
              <tr>
                <td>100</td>
                <td>0.4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col mt-10 p-6 w-[75%] md:w-[35%] border-4 items-center bg-white">
          <h3 className="text-xl font-bold mb-6">
            <span style={{ color: "#ff0000" }}>Additional</span> Services when
            Delegating
          </h3>
          <div className="flex flex-col items-start">
            <p className="mb-2">- Qualify for future airDrops</p>
            <p className="mb-2">
              - Access to the investors channel in our Discord
            </p>
            <p className="mb-2">
              - Higher priority when submitting a research questions
            </p>
          </div>
        </div>

        <div className="flex m-20 w-[90vw] md:w-[80vw] justify-center  items-center">
          <IspoGraph />
        </div>
        <div className="flex flex-col m-10 mb-0 p-10 sm:p-20 w-screen bg-black text-white items-center">
          <h3 className="text-3xl font-bold mb-10">
            Funding <span style={{ color: "#ff0000" }}>Strategy</span>
          </h3>
          <div className="flex flex-col items-start sm:w-[50vw]">
            <p className="mb-2 text-xl">
              <span style={{ color: "#ff0000", fontWeight: "bold" }}>
                Stage 1
              </span>{" "}
              <span style={{ fontWeight: "bold" }}>Funding: </span>
              Pre-Seed Funding via ISPO of our Utility Token Fund will be used
              primarily to cover ongoing expenses such as Server Cost,
              Freelancer Bills, Cost of Incorporation and a small compensation
              for the core team they can afford to work on Xerberus only.
            </p>
            <p className="mb-2 text-xl">
              <span style={{ color: "#ff0000", fontWeight: "bold" }}>
                Stage 2
              </span>{" "}
              <span style={{ fontWeight: "bold" }}>Funding: </span>Seed Funding
              via Catalyst Will be primarily used to build the Prediction Market
              MVP in Cooperation with MLabs or a similar group of Cardano
              Experts, legal guidance for the security token issuance (which
              will be shared with all Cardano Projects).
            </p>
            <p className="mb-2 text-xl">
              <span style={{ color: "#ff0000", fontWeight: "bold" }}>
                Stage 3
              </span>{" "}
              <span style={{ fontWeight: "bold" }}>Funding: </span>Growth
              Funding via ICO of a regulated security token This money will be
              used to growth Xerberus professionalized company, expand the
              services and the team.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Ispo;
