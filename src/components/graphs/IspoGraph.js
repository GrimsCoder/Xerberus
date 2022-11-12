import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
// import ChartDataLabels from "chartjs-plugin-datalabels";
// ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  layout: {
    padding: {
      bottom: 30,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "Utility Tokenomics",
      data: [3000000, 2000000, 4000000, 1000000],
      backgroundColor: ["#D3D3D3", "#ff0000", "#000", "#808080"],
      borderColor: ["#D3D3D3", "#ff0000", "#000", "#808080"],
      borderWidth: 1,
      hoverOffset: 30,
    },
  ],

  labels: [
    "30% Core Team and Advisers",
    "20% Airdrop and Community Distribution",
    "40% Stake Pool Participation",
    "10% DEX Liquidity Pool",
  ],
};

function IspoGraph() {
  return (
    <div className="flex flex-col mt-5">
      <div className="flex justify-center  items-center">
        <h3 className="text-3xl font-bold mb-5 bg-white p-5">
          Utility <span style={{ color: "#ff0000" }}>Tokenomics</span>
        </h3>
      </div>
      <div className=" w-[80vw] md:w-[40vw] h-auto m-auto">
        <Pie options={options} data={data} />
      </div>
    </div>
  );
}

export default IspoGraph;
