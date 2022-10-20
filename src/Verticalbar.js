
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import React from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export default function Graph() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };
 
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
 
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",

        data: [10, 50, 26, 30, 99, 10, 5],
        backgroundColor: "rgba(55, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => 150),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
 
  return (
    <>
      Test
      <Bar options={options} data={data} />
    </>
  );
}






  