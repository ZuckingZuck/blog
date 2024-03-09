import React from "react";
import StatsCard from "./StatsCard";
import DonutPlot from "./DonutPlot";
import AreaPlot from "./AreaPlot";
const Welcome = () => {
  return (
    <div className="flex flex-col px-16 py-5 w-full ml-40">
      <div className="text-white">
        <h1 className="text-3xl">Hoşgeldin Zuckerberg...</h1>
      </div>
      <div className="stats mt-10 flex flex-col lg:flex-row gap-3 justify-around w-full">
        <StatsCard />
        <StatsCard />
        <StatsCard />
      </div>
      <div className="stats-charts grid grid-cols-1 lg:grid-cols-2 mt-24">
        <AreaPlot />
        <DonutPlot />
      </div>
    </div>
  );
};

export default Welcome;
