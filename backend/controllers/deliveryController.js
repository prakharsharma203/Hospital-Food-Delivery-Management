const Delivery = require('../models/deliveryModel');

/**
 * Create a new delivery record
 */
const createDelivery = async (req, res) => {
  try {
    const { patientId, mealType, assignedTo } = req.body;

    const delivery = new Delivery({
      patientId,
      mealType,
      assignedTo,
    });

    await delivery.save();
    res.status(201).json({ message: 'Delivery created successfully', delivery });
  } catch (error) {
    res.status(400).json({ message: 'Failed to create delivery', error: error.message });
  }
};

/**
 * Update delivery status to "delivered"
 */
const updateDeliveryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { notes } = req.body;

    const delivery = await Delivery.findByIdAndUpdate(
      id,
      { status: 'delivered', notes },
      { new: true }
    );

    if (!delivery) {
      return res.status(404).json({ message: 'Delivery not found' });
    }

    res.json({ message: 'Delivery status updated successfully', delivery });
  } catch (error) {
    res.status(400).json({ message: 'Failed to update delivery status', error: error.message });
  }
};

/**
 * Fetch all deliveries
 */
const getAllDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find().populate('patientId').populate('assignedTo');
    res.json(deliveries);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch deliveries', error: error.message });
  }
};

/**
 * Fetch deliveries assigned to a specific user
 */
const getUserDeliveries = async (req, res) => {
  try {
    const { userId } = req.params;
    const deliveries = await Delivery.find({ assignedTo: userId }).populate('patientId');
    res.json(deliveries);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch user deliveries', error: error.message });
  }
};

module.exports = {
  createDelivery,
  updateDeliveryStatus,
  getAllDeliveries,
  getUserDeliveries,
};
