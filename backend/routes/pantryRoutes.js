const express = require('express');
const router = express.Router();
const {authenticate} = require('../middleware/authMiddleware');
const{authorize} = require("../middleware/roleMidlleware")
const pantryController = require('../controllers/pantryController');

router.post('/add', authenticate, authorize(['admin']), pantryController.addPantry);
router.post('/assign-task', authenticate, authorize(['admin', 'pantry']), pantryController.assignTask);
router.get('/tasks/:id', authenticate, authorize(['pantry']), pantryController.getTasks);


module.exports = router;
