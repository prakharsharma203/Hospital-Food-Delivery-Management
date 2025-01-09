import axios from "axios";

const BASE_URL = "http://localhost:5000/";

const api = {
  getDietCharts: async () => {
    const response = await axios.get(`${BASE_URL}/diet-charts`);
    return response.data;
  },
  createDietChart: async (data) => {
    await axios.post(`${BASE_URL}/diet-charts`, data);
  },
};

export default api;
