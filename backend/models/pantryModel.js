const mongoose = require('mongoose');

const PantrySchema = new mongoose.Schema({
  name: String,
  contactInfo: String,
  location: String,
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Delivery',
  }],
});

module.exports = mongoose.model('Pantry', PantrySchema);
