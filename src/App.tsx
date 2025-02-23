import "./App.css";
import KpiCard from "./components/cards/KpiCard";
import { IoGridOutline } from "react-icons/io5";
import { FiCheckCircle } from "react-icons/fi";
import { LuRefreshCcw } from "react-icons/lu";
import { IoIosWarning } from "react-icons/io";
import { TbUsers } from "react-icons/tb";
import { RevenueChart } from "./components/Charts/RevenueChart";
import { BudgetChart } from "./components/Charts/BudgetChart";

function App() {
  return (
    <div className="container">
      Cactro frontend Test
      <div className="kpi-cards">
        <KpiCard
          title="Total Projects"
          count={5}
          icon={<IoGridOutline color="9dfff8" size={"30px"} />}
        />
        <KpiCard
          title="Completed"
          count={1}
          icon={<FiCheckCircle color="#9dfff8" size={"30px"} />}
        />
        <KpiCard
          title="Ongoing"
          count={3}
          icon={<LuRefreshCcw color="#9dfff8" size={"30px"} />}
        />
        <KpiCard
          title="Delayed"
          count={1}
          icon={<IoIosWarning color="#d1071c" size={"30px"} />}
          status="delayed"
        />
        <KpiCard
          title="Employees"
          count={5}
          icon={<TbUsers color="#9dfff8" size={"30px"} />}
        />
      </div>
      <div className="charts-row">
        <div className="revenue-chart-container">
          <div className="revenue-chart">
            <RevenueChart />
          </div>
        </div>
        <div className="budget-chart-container">
          <div className="budget-chart">
            <BudgetChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
