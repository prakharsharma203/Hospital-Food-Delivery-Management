const mongoose = require('mongoose');

const DietChartSchema = new mongoose.Schema({
  patientId: mongoose.Schema.Types.ObjectId,
  meals: {
    morning: { type: String, required: true },
    evening: { type: String, required: true },
    night: { type: String, required: true },
  },
  instructions: String,
});

module.exports = mongoose.model('DietChart', DietChartSchema);
