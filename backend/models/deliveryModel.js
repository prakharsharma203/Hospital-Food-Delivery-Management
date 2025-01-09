const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  mealType: { type: String, enum: ['morning', 'evening', 'night'], required: true },
  status: { type: String, enum: ['pending', 'delivered'], default: 'pending' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
  notes: String,
});

module.exports = mongoose.model('Delivery', DeliverySchema);
