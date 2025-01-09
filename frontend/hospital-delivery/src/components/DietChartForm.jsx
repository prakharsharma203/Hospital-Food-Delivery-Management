import  { useState } from "react";
import api from "../services/api";

const DietChartForm = ({ onChartAdded }) => {
  const [formData, setFormData] = useState({
    patientId: "",
    meals: {
      morning: "",
      evening: "",
      night: "",
    },
    instructions: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("meals.")) {
      const mealKey = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        meals: { ...prev.meals, [mealKey]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.createDietChart(formData);
      onChartAdded();
      setFormData({
        patientId: "",
        meals: { morning: "", evening: "", night: "" },
        instructions: "",
      });
    } catch (err) {
      console.error("Error creating diet chart:", err);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create Diet Chart</h2>
      <input
        type="text"
        name="patientId"
        value={formData.patientId}
        placeholder="Patient ID"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="meals.morning"
        value={formData.meals.morning}
        placeholder="Morning Meal"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="meals.evening"
        value={formData.meals.evening}
        placeholder="Evening Meal"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="meals.night"
        value={formData.meals.night}
        placeholder="Night Meal"
        onChange={handleChange}
        required
      />
      <textarea
        name="instructions"
        value={formData.instructions}
        placeholder="Additional Instructions"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DietChartForm;
