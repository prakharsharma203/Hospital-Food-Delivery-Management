const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/authMiddleware');
const{authorize} = require("../middleware/roleMidlleware")
const patientController = require('../controllers/patientController');

router.post('/register', authenticate, authorize(['admin']), patientController.createPatient);
router.get('/', authenticate, patientController.getAllPatients);
router.put('/update/:id', authenticate, authorize(['admin']), patientController.updatePatient);
router.delete('/delete/:id', authenticate, authorize(['admin']), patientController.deletePatient);

module.exports = router;
