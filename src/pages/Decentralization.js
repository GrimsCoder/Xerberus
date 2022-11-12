import React from "react";

function Decentralization() {
  return (
    <div className="flex items-center justify-center">
      <iframe
        title="Decentralization average"
        className="bg-[#F1F5F4] border-none rounded-sm shadow-[0 2px 10px 0 rgba(70, 76, 79, .2)] w-screen h-screen"
        src="https://charts.mongodb.com/charts-project-0-iptpg/embed/dashboards?id=97892d1f-28c9-45a8-bbb4-4478dddfabe4&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=true&scalingWidth=scale&scalingHeight=scale"
      ></iframe>
    </div>
  );
}

export default Decentralization;
