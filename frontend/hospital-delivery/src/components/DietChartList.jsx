import { useEffect, useState } from "react";
import api from "../services/api";

const DietChartList = () => {
  const [dietCharts, setDietCharts] = useState([]);

  const fetchDietCharts = async () => {
    try {
      const charts = await api.getDietCharts();
      setDietCharts(charts);
    } catch (err) {
      console.error("Error fetching diet charts:", err);
    }
  };

  useEffect(() => {
    fetchDietCharts();
  }, []);

  return (
    <div className="chart-list">
      <h2>Diet Charts</h2>
      {dietCharts.map((chart) => (
        <div key={chart._id} className="chart-item">
          <h3>Patient ID: {chart.patientId}</h3>
          <p><strong>Morning:</strong> {chart.meals.morning}</p>
          <p><strong>Evening:</strong> {chart.meals.evening}</p>
          <p><strong>Night:</strong> {chart.meals.night}</p>
          <p><strong>Instructions:</strong> {chart.instructions}</p>
        </div>
      ))}
    </div>
  );
};

export default DietChartList;
