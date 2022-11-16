import React from "react";

function TopWalletTable({ data }) {
  function truncate(str, n) {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  }

  return (
    <div className="flex flex-col mt-5 w-full lg:w-[50%]">
      <div className="flex justify-center  items-center">
        <h3 className="text-3xl font-bold bg-white mb-5">
          Top 25
          <span style={{ color: "#ff0000" }}> Wallets</span>
        </h3>
      </div>
      <div className="overflow-auto h-[65vh] flex flex-col lg:ml-10 w-full">
        <table>
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              <th>Wallet</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Verified</th>
            </tr>
          </thead>
          <tbody>
            {data.map((wallet, i) => (
              <tr className="hover:bg-slate-50 hover:translate-y-px ">
                <td className="">
                  {i + 1} - {truncate(wallet.address, 10)}
                </td>
                <td>{Number(wallet.amount).toFixed(2)}</td>
                <td className="flex items-center justify-center">
                  <div className="flex items-center justify-start w-[90%]">
                    {wallet.type === "Project " || wallet.type === "Project" ? (
                      <span className="w-[15px] h-[15px] bg-[#ff0000] rounded mr-3"></span>
                    ) : wallet.type === "DEX " || wallet.type === "DEX" ? (
                      <span className="w-[15px] h-[15px] bg-[#FFA500] rounded mr-3"></span>
                    ) : wallet.type === "Insider Wallet " ||
                      wallet.type === "Insider Wallet" ? (
                      <span className="w-[15px] h-[15px] bg-[#0000FF] rounded mr-3"></span>
                    ) : wallet.type === "Whale " || wallet.type === "Whale" ? (
                      <span className="w-[15px] h-[15px] bg-[#000] rounded mr-3"></span>
                    ) : (
                      <span className="w-[15px] h-[15px] bg-[#808080] rounded mr-3"></span>
                    )}
                    {wallet.type}
                  </div>
                </td>
                <td>{wallet.verified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TopWalletTable;
