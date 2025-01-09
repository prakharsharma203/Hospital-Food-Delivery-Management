const express = require('express');
const { authenticate} = require('../middleware/authMiddleware');
const{authorize} = require("../middleware/roleMidlleware")
const deliveryController = require('../controllers/deliveryController');

const router = express.Router();

// Create a new delivery (Admin or Pantry staff only)
router.post('/create', authenticate, authorize(['admin', 'pantry']), deliveryController.createDelivery);

// Update delivery status to "delivered" (Delivery personnel only)
router.put('/update/:id', authenticate, authorize(['delivery']), deliveryController.updateDeliveryStatus);

// Get all deliveries (Admin or Pantry staff only)
router.get('/', authenticate, authorize(['admin', 'pantry']), deliveryController.getAllDeliveries);

// Get deliveries assigned to a specific user (Delivery personnel only)
router.get('/user/:userId', authenticate, authorize(['delivery']), deliveryController.getUserDeliveries);


module.exports = router;
