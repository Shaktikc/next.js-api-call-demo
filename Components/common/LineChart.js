import React, { useRef, useState } from "react";
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
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
      hoverRadius: 0,
      hitRadius: 0,
    },
  },
  updateMode: "resize",
  plugins: {
    legend: false,
    tooltips: {
      callbacks: {
        label: (tooltipItem) => `${tooltipItem.yLabel}: ${tooltipItem.xLabel}`,
        title: () => null,
      },
      mode: "nearest",
    },
  },
  scales: {
    y: {
      display: false, // Hide Y axis labels
    },
    x: {
      display: false, // Hide X axis labels
    },
  },
};

const labels = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export function LineChart({ setMountainInfo, setSpecificIndex }) {
  const chartRef = useRef();
  const [arrayData, setArrayData] = useState([
    150, 500, 200, 350, 250, 320, 200, 280, 150,
  ]);

  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
    if (getElementAtEvent(chartRef.current, event)[0]?.index === 1) {
      // console.log("7");
      setSpecificIndex(0);
      setArrayData([150, 500, 200, 350, 250, 320, 200, 280, 150]);
      return;
    }
    if (getElementAtEvent(chartRef.current, event)[0]?.index === 3) {
      // console.log("33");
      setSpecificIndex(1);
      setArrayData([150, 350, 200, 500, 200, 320, 200, 280, 150]);
      setMountainInfo({
        title: "Ketu mountian",
        DetailText:
          "lkdsjflk lkjdflkj sadlkfj lkasdjf lkadsfjlk jlk sfkja lkjsaflk ajflkadsfj lkadfsj lkjf lkj dfk jaslkf jaslkfj ",
        state: true,
      });
      return;
    }
    if (getElementAtEvent(chartRef.current, event)[0]?.index === 5) {
      console.log("5");
      setArrayData([150, 300, 200, 300, 200, 500, 200, 280, 150]);
      return;
    }
    if (getElementAtEvent(chartRef.current, event)[0]?.index === 7) {
      console.log("7");
      setArrayData([150, 300, 200, 300, 200, 280, 200, 500, 150]);
      return;
    }
  };
  {
    data1: [150, 500, 200, 350, 250, 320, 200, 280, 150];
    data2: [150, 350, 200, 500, 200, 320, 200, 280, 150];
    data3: [150, 300, 200, 300, 200, 500, 200, 280, 150];
    data4: [150, 300, 200, 300, 200, 280, 200, 500, 150];
  }
  const data = {
    labels,
    datasets: [
      {
        data: arrayData,
        borderColor: "#F5FFff",
        backgroundColor: "white",
      },
    ],
  };
  return (
    <Line
      ref={chartRef}
      width="200px"
      height={"200px"}
      options={options}
      data={data}
      onClick={onClick}
    />
  );
}
