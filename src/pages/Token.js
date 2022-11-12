import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import Footer from "../components/Footer";
import { MdVerified } from "react-icons/md";
import TokenGraph from "../components/graphs/TokenGraph";
import TopWalletTable from "../components/tables/TopWalletTable";
import localData from "../data/tokens.json";

function Token({ token }) {
  const [scores, setScores] = useState([]);
  const [utility, setUtility] = useState("");
  const [asset, setAsset] = useState([]);
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);

  const url = "https://backend.xerberus.io/api/v1/data/";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fetchScores();
    fetchAsset();
  }, []);
  useEffect(() => {
    getAsset();
    getUtility();
  }, [asset]);

  const fetchScores = async () => {
    try {
      const response = await axios.get(`${url}score?label=RiskScore`);
      setScores(response.data.scores);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchAsset = async () => {
    try {
      const response = await axios.get(`${url}token?label=tokenPage`);
      const res = response.data;
      Object.values(res).forEach(function (val) {
        if (val.token) {
          const r = res[val.token];
          if (r.token === token) {
            setAsset(r);
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getUtility = async () => {
    scores.map((score) => {
      token === score.token && setUtility(score.utility);
    });
  };

  const getAsset = async () => {
    const walletsArray = [];
    var wallets = Object.entries(asset.topwallets);
    wallets.map((wallet) => {
      walletsArray.push(wallet[1]);
    });
    setTableData(walletsArray);

    localData.map((data) => {
      token === data.token && setData(data);
    });
  };
  return (
    <>
      <Navbar
        navBgColor1={"#fff"}
        navTextColor1={"#000"}
        border={" fixed left-0 top-0 w-full z-20 ease-in duration-300"}
      />
      <div className="fixed flex top-5 left-[45%] z-50">
        <img src={asset.logo} className="w-8 mr-3 rounded-full" alt="" token />
        {asset.verified === "true" ? (
          <h2 className="relative text-xl font-bold">
            {asset.token}
            <MdVerified className="absolute top-0 -right-5 text-green-500" />
          </h2>
        ) : (
          <h2 className="text-xl font-bold">{asset.token}</h2>
        )}
      </div>

      <div className="flex flex-col justify-center  items-center mt-20">
        <h2 className="p-10 text-2xl md:text-5xl font-bold text-center">
          Token <span style={{ color: "#ff0000" }}>Explorer</span>
        </h2>
        <div className="flex items-start justify-around w-[95%] md:w-[80%]">
          <div className="w-[50%] h-full flex flex-col items-center justify-between">
            <div className="flex items-center justify-start w-full mb-4">
              <h2 className="flex text-xl font-bold mb-1 items-center">
                About {asset.token}
              </h2>
            </div>
            <p className="flex p-10 border-4 h-full w-full items-center text-justify">
              {data.p1}
              <br />
              <br />
              {data.p2}
              <br />
              <br />
              {data.p3}
              <br />
              <br />
              {data.p4}
            </p>
          </div>
          <div className="flex flex-col items-center justify-around w-[50%]">
            {utility === " A" ? (
              <h2 className="text-xl font-bold mb-4">
                Utility -<span className="text-green-400">{utility}</span>
              </h2>
            ) : utility === " B" ? (
              <h2 className="text-xl font-bold mb-4">
                Utility -<span className="text-orange-400">{utility}</span>
              </h2>
            ) : (
              <h2 className="text-xl font-bold mb-4">
                Utility - <span className="text-red-500">{utility}</span>
              </h2>
            )}
            <div className=" h-full w-[80%] flex flex-col items-start justify-evenly">
              <p className="border-4 p-4 w-full text-center m-1">
                {data.utility1}
              </p>
              <p className="border-4 p-4 w-full text-center m-1">
                {data.utility2}
              </p>
              <p className="border-4 p-4 w-full text-center m-1">
                {data.utility3}
              </p>
              <p className="border-4 p-4 w-full text-center m-1">
                {data.utility4}
              </p>
            </div>
          </div>
        </div>
        <div className="flex m-10 w-[90vw] md:w-[80vw] justify-center  items-start">
          <TokenGraph data={tableData} logo={asset.logo} />
          <TopWalletTable data={tableData} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Token;
