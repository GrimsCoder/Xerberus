import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function TokenGraph({ data, logo }) {
  const amount = [];
  const dataColor = [];
  const percentage = [];
  data.map((data) => {
    if (data.type === "Project " || data.type === "Project") {
      amount.push(data.amount);
      dataColor.push("#ff0000");
    }
  });
  data.map((data) => {
    if (data.type === "DEX " || data.type === "DEX") {
      amount.push(data.amount);
      dataColor.push("#FFA500");
    }
  });
  data.map((data) => {
    if (data.type === "Insider Wallet " || data.type === "Insider Wallet") {
      amount.push(data.amount);
      dataColor.push("#0000FF");
    }
  });
  data.map((data) => {
    if (data.type === "Whale " || data.type === "Whale") {
      amount.push(data.amount);
      dataColor.push("#000");
    }
  });
  data.map((data) => {
    if (data.type === "unknown" || data.type === "unknown ") {
      amount.push(data.amount);
      dataColor.push("#808080");
    }
  });

  const sum = amount.reduce((a, b) => Number(a) + Number(b), 0);
  amount.map((amount) => {
    percentage.push((Number(amount) * 100) / sum);
  });

  return (
    <div className="flex flex-col items-center justify-center mt-5 w-full lg:w-[50%]">
      <div className="flex justify-center  items-center">
        <h3 className="text-3xl font-bold mb-0 bg-white">
          Token
          <span style={{ color: "#ff0000" }}> Distribution</span>
        </h3>
      </div>
      <div className="relative w-[80%] lg:w-full h-auto m-auto">
        <img
          src={logo}
          className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[25%] mr-3 rounded-full z-50"
          alt=""
        />

        <Doughnut
          options={{
            layout: {
              padding: {
                top: 30,
                bottom: 30,
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
          data={{
            datasets: [
              {
                label: " Token Distribution",
                data: amount,
                backgroundColor: dataColor,
                // backgroundColor: ["#D3D3D3", "#ff0000", "#000", "#808080"],
                borderWidth: 1,
                hoverOffset: 30,
              },
            ],

            labels: [23, 23],
          }}
        />
      </div>
    </div>
  );
}

export default TokenGraph;
