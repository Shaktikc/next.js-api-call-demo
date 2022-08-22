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
import ChartDataLabels from "chartjs-plugin-datalabels";

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
  responsive: false,
  maintainAspectRatio: false,
  elements: {
    point: {
      radius: 0,
      hoverRadius: 0,
      hitRadius: 0,
    },
  },
  updateMode: "resize",
  tooltips: {
    enabled: false,
  },
  plugins: {
    legend: false,
    tooltip: {
      enabled: false,
    },
    pointDot: true,
    datalabels: {
      color: "#F5FFff",
      anchor: "end",
      align: "end",
      display: function (context) {
        return (
          context.dataIndex === 1 ||
          context.dataIndex === 3 ||
          context.dataIndex === 5 ||
          context.dataIndex === 7 ||
          context.dataIndex === 9 ||
          context.dataIndex === 11 ||
          context.dataIndex === 13 ||
          context.dataIndex === 15 ||
          context.dataIndex === 17 ||
          context.dataIndex === 19 ||
          context.dataIndex === 21 ||
          context.dataIndex === 23 ||
          context.dataIndex === 25 ||
          context.dataIndex === 27
        );
      },
      formatter: function (value, context) {
        console.log("data,", context.chart.data.labels);
        return context.chart.data.labels[context.dataIndex];
      },
    },
    // labels: {
    //   usePointStyle: true,
    //   pointStyle: "line",
    // },
  },
  scales: {
    y: {
      beginAtZero: true,
      // display: false, // Hide Y axis labels
    },
    x: {
      display: false, // Hide X axis labels
    },
  },
};

export function LineChart({
  setMountainInfo,
  setSpecificIndex,
  setArrayData,
  arrayData,
}) {
  const chartRef = useRef();
  // chartjs.defaults.set("plugins.datalabels", {
  //   color: "#FE777B",
  // });

  const onClick = (event) => {
    console.log(getElementAtEvent(chartRef.current, event));
    if (getElementAtEvent(chartRef.current, event)[0]?.index === 1) {
      // console.log("7");
      setSpecificIndex(0);
      // setArrayData([150, 500, 200, 350, 250, 320, 200, 280, 150]);
      return;
    }
    if (getElementAtEvent(chartRef.current, event)[0]?.index === 3) {
      // console.log("33");
      // setSpecificIndex(1);
      // setArrayData([150, 350, 200, 500, 200, 320, 200, 280, 150]);
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
      width="1000px"
      // height={"500px"}
      options={options}
      data={data}
      onClick={onClick}
      plugins={[ChartDataLabels]}
    />
  );
}

const labels = [
  "1",
  "2",
  "2",
  "2",
  "5",
  "3",
  "7",
  "4",
  "9",
  5,
  11,
  6,
  13,
  7,
  15,
  8,
  17,
  9,
  19,
  10,
  21,
  11,
  23,
  12,
  25,
  13,
  27,
  14,
  29,
];
