import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
};

export const data = {
  labels: ["Over Budget", "Under Budget", "On Budget"],
  datasets: [
    {
      label: "Budget",
      data: [19, 48, 33],
      backgroundColor: ["#d1071c", "#00dccd", "#7c8bcb"],
      borderWidth: 0,
    },
  ],
};

export function BudgetChart() {
  return <Doughnut data={data} options={options} />;
}
