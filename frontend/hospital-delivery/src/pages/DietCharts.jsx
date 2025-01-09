import { useState } from "react";
import DietChartForm from "../components/DietChartForm";
import DietChartList from "../components/DietChartList";

const DietCharts = () => {
  const [reload, setReload] = useState(false);

  return (
    <div className="diet-charts">
      <DietChartForm onChartAdded={() => setReload(!reload)} />
      <DietChartList reload={reload} />
    </div>
  );
};

export default DietCharts;
