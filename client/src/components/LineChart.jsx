import React, { useState } from "react";
import { Line } from "react-chartjs-2";

export const LineChart = ({ weight }) => {
  const [chartData, setChartData] = useState({
    labels: weight?.map((val) => val?.dateOfWeight?.toString().split("T")[0]),
    datasets: [
      {
        label: "User Weight",
        data: weight?.map((val) => val?.weight),
        backgroundColor: [
          "#7B4B94",
          "#7D82B8",
          "#B7E3CC",
          "#C4FFB2",
          "#D6F7A3",
        ],
        borderColor: "black",
        borderWidth: 0.35,
      },
    ],
  });

  console.log(chartData);

  return (
    <div className="chart-container">
      <h2 className="text-center">Line Chart</h2>

      <Line
        data={chartData}
        options={{
          maintainAspectRatio: true,
          scales: {
            x: {
              title: {
                display: true,
                text: "Date (YYYY/MM/DD)",
              },
            },
            y: {
              title: {
                display: true,
                text: "Weights (in lbs)",
              },
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Weight Tracker",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};
