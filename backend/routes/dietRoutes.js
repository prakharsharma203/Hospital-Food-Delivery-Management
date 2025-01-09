const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/authMiddleware');
const{authorize} = require("../middleware/roleMidlleware")
const dietChartController = require('../controllers/dietController');

router.post('/create', authenticate, authorize(['admin']), dietChartController.createDietChart);
router.get('/:patientId', authenticate, dietChartController.getDietChartByPatient);

module.exports = router;
