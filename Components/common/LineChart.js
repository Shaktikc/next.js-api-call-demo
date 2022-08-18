import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, getElementAtEvent } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  updateMode: "resize",
  plugins: {
    legend: false,
    tooltips: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
        title: () => null,
      },
    },
  },
  // scales: {
  //   y: {
  //     display: false, // Hide Y axis labels
  //   },
  //   x: {
  //     display: false, // Hide X axis labels
  //   },
  // },
};

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function LineChart() {
  const chartRef = useRef();
  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
  };
  {
    data1: [150, 500, 200, 350, 250, 320, 200, 280, 150];
    data2: [150, 350, 200, 500, 250, 320, 200, 280, 150];
  }
  const data = {
    labels,
    datasets: [
      {
        data: [150, 500, 200, 350, 250, 320, 200, 280, 150],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <Line ref={chartRef} options={options} data={data} onClick={onClick} />
  );
}
