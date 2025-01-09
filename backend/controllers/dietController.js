const DietChart = require('../models/dietChartModel');

exports.createDietChart = async (req, res) => {
  try {
    const dietChart = new DietChart(req.body);
    await dietChart.save();
    res.status(201).json(dietChart);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getDietChartByPatient = async (req, res) => {
  try {
    const dietChart = await DietChart.findOne({ patientId: req.params.patientId });
    if (!dietChart) return res.status(404).json({ error: 'Diet chart not found' });

    res.json(dietChart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
