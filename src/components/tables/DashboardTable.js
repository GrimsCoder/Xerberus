import React, { useEffect, useState } from "react";
import { MdVerified } from "react-icons/md";
import { FaPercentage } from "react-icons/fa";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { TbMathAvg } from "react-icons/tb";
// import { Link } from "react-router-dom";
import axios from "axios";
import useSortTableData from "../useSortableData";
import Modal from "../Modal.js";
import styles from "../../css/Modal.module.css";
import { info } from "../../data/info";

function DashboardTable() {
  const [scores, setScores] = useState([]);
  const [amount, setAmount] = useState(false);
  const [avg, setAvg] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);
  const { items, requestSort, sortConfig } = useSortTableData(scores);

  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  const url = "https://backend.xerberus.io/api/v1/data/";

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      const response = await axios.get(`${url}score?label=RiskScore`);
      setScores(response.data.scores);
    } catch (err) {
      console.log(err);
    }
  };

  function intToString(num) {
    num = num.toString().replace(/[^0-9.]/g, "");
    if (num < 1000) {
      return num;
    }
    let si = [
      { v: 1e3, s: "K" },
      { v: 1e6, s: "M" },
      { v: 1e9, s: "B" },
      { v: 1e12, s: "T" },
      { v: 1e15, s: "P" },
      { v: 1e18, s: "E" },
    ];
    let index;
    for (index = si.length - 1; index > 0; index--) {
      if (num >= si[index].v) {
        break;
      }
    }
    return (
      (num / si[index].v).toFixed(2).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1") +
      si[index].s
    );
  }

  const decentralizationScores = scores.map((score) => score.decentralization);
  const average =
    decentralizationScores.reduce((a, b) => a + b, 0) /
    decentralizationScores.length;

  const colorPlus = avg ? "text-green-400" : "text-black";
  const colorMinus = avg ? "text-red-400" : "text-black";

  return (
    <div className="flex flex-col w-[100%]">
      <table>
        <thead className=" tester sticky -webkit-sticky  top-0 bg-white z-30">
          <tr>
            <th className=" tester block sticky -webkit-sticky   left-0 bg-white z-30 flex items-center justify-between">
              <button
                type="button"
                onClick={() => requestSort("token")}
                className={getClassNamesFor("token")}
              >
                Token
              </button>
              <div className="flex items-center justify-center h-full">
                <span
                  className="border-2 border-black rounded cursor-pointer hover:scale-110 hover:mb-1 mx-2"
                  onClick={() => setAvg(!avg)}
                >
                  {avg ? (
                    <TbMathAvg style={{ color: "#00FF00" }} size={20} />
                  ) : (
                    <TbMathAvg style={{ color: "#ff0000" }} size={20} />
                  )}
                </span>
                <span
                  className="border-2 border-black rounded cursor-pointer hover:scale-110 hover:mb-1 mx-2"
                  onClick={() => setAmount(!amount)}
                >
                  {amount ? (
                    <FaPercentage size={20} />
                  ) : (
                    <AiOutlineFieldNumber size={20} />
                  )}
                </span>
              </div>
            </th>

            <th className="relative">
              <span className={styles.info}>
                <i
                  className="fa fa-info-circle "
                  aria-hidden="true"
                  onClick={() => {
                    setIsOpen(true);
                    setShow(false);
                  }}
                ></i>

                {isOpen && (
                  <Modal
                    setIsOpen={setIsOpen}
                    setShow={setShow}
                    header={info[0].title}
                    body={info[0].description}
                    link={info[0].url}
                  />
                )}
              </span>

              <button
                type="button"
                onClick={() => requestSort("utility")}
                className={getClassNamesFor("utility")}
              >
                Utility
                <br />
                Score
              </button>
            </th>

            <th className="relative">
              <span className={styles.info}>
                <i
                  className="fa fa-info-circle "
                  aria-hidden="true"
                  onClick={() => {
                    setIsOpen(false);
                    setShow(true);
                  }}
                ></i>

                {show && (
                  <Modal
                    setShow={setShow}
                    setIsOpen={setIsOpen}
                    header={info[1].title}
                    body={info[1].description}
                    link={info[1].url}
                  />
                )}
              </span>
              <button
                type="button"
                onClick={() => requestSort("decentralization")}
                className={getClassNamesFor("decentralization")}
              >
                {/* <Link to="/decentralization"> */}
                Decentralization
                <br />
                Score{avg && "/ average"}
                {/* </Link> */}
              </button>
            </th>
            <th className="relative">
              <button
                type="button"
                onClick={() => requestSort("total_supply")}
                className={getClassNamesFor("total_supply")}
              >
                Total
                <br />
                Supply
              </button>
            </th>
            <th className="relative">
              <button
                type="button"
                onClick={() => requestSort("wallets_count")}
                className={getClassNamesFor("wallets_count")}
              >
                Wallets
              </button>
            </th>
            <th className="relative">
              {amount ? (
                <button
                  type="button"
                  onClick={() => requestSort("whale_no")}
                  className={getClassNamesFor("whale_no")}
                >
                  Whales
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => requestSort("whale_percent")}
                  className={getClassNamesFor("whale_percent")}
                >
                  Whales
                </button>
              )}
            </th>
            <th className="relative">
              {amount ? (
                <button
                  type="button"
                  onClick={() => requestSort("shark_no")}
                  className={getClassNamesFor("shark_no")}
                >
                  Sharks
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => requestSort("shark_percent")}
                  className={getClassNamesFor("shark_percent")}
                >
                  Sharks
                </button>
              )}
            </th>
            <th className="relative">
              {amount ? (
                <button
                  type="button"
                  onClick={() => requestSort("dolphin_no")}
                  className={getClassNamesFor("dolphin_no")}
                >
                  Dolphins
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => requestSort("dolphin_percent")}
                  className={getClassNamesFor("dolphin_percent")}
                >
                  Dolphins
                </button>
              )}
            </th>
            <th className="relative">
              {amount ? (
                <button
                  type="button"
                  onClick={() => requestSort("fish_no")}
                  className={getClassNamesFor("fish_no")}
                >
                  Fish
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => requestSort("fish_percent")}
                  className={getClassNamesFor("fish_percent")}
                >
                  Fish
                </button>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((asset) => (
            <tr
              key={asset.token}
              className="hover:bg-slate-50 hover:translate-y-px z-10"
            >
              {/* <Link to={`/scores/${asset.token}`}> */}
              <td className="tester block flex justify-start items-center sticky -webkit-sticky  left-0 bg-white  hover:bg-slate-50 z-20">
                <img
                  src={asset.logo}
                  className="w-8 mr-3 rounded-full"
                  alt=""
                  token
                />
                {asset.verified === "true" ? (
                  <div className="pr-10 relative">
                    {asset.token}
                    <MdVerified className="absolute top-0 right-6 text-green-500" />
                  </div>
                ) : (
                  <div className="pr-4 relative">{asset.token}</div>
                )}
              </td>
              {/* </Link> */}

              {asset.utility === " A" ? (
                <td className="font-bold text-green-400">{asset.utility}</td>
              ) : asset.utility === " B" ? (
                <td className="font-bold text-orange-400">{asset.utility}</td>
              ) : (
                <td className="font-bold text-red-500">{asset.utility}</td>
              )}

              {(asset.decentralization * 100) / 100 < average ? (
                <td className={colorMinus}>
                  {((asset.decentralization * 100) / 100).toFixed(2)}&nbsp;%
                  {avg && (
                    <span className="text-black">
                      &nbsp;/&nbsp;{average.toFixed(2)}%
                    </span>
                  )}
                </td>
              ) : (
                <td className={colorPlus}>
                  {((asset.decentralization * 100) / 100).toFixed(2)}&nbsp;%
                  {avg && (
                    <span className="text-black">
                      &nbsp;/&nbsp;{average.toFixed(2)}%
                    </span>
                  )}
                </td>
              )}

              <td className="text-left pl-[2%]">
                {intToString(asset.total_supply)}
              </td>
              <td>{asset.wallets_count.toLocaleString()}</td>
              <td>
                {amount ? (
                  <p>
                    {asset.whale_no}
                    &nbsp;{" "}
                  </p>
                ) : (
                  <p>
                    {((asset.whale_percent * 100) / 100).toFixed(2)}
                    &nbsp;%{" "}
                  </p>
                )}
              </td>
              <td>
                {amount ? (
                  <p>
                    {(asset.shark_no * 100) / 100}
                    &nbsp;
                  </p>
                ) : (
                  <p>
                    {((asset.shark_percent * 100) / 100).toFixed(2)}
                    &nbsp;%
                  </p>
                )}
              </td>
              <td>
                {amount ? (
                  <p>
                    {(asset.dolphin_no * 100) / 100}
                    &nbsp;
                  </p>
                ) : (
                  <p>
                    {((asset.dolphin_percent * 100) / 100).toFixed(2)}
                    &nbsp;%
                  </p>
                )}
              </td>
              <td>
                {amount ? (
                  <p>
                    {(asset.fish_no * 100) / 100}
                    &nbsp;
                  </p>
                ) : (
                  <p>
                    {((asset.fish_percent * 100) / 100).toFixed(2)}
                    &nbsp;%
                  </p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTable;
