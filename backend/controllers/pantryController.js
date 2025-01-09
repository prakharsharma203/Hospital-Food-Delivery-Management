const Pantry = require('../models/pantryModel');

exports.addPantry = async (req, res) => {
  try {
    const pantry = new Pantry(req.body);
    await pantry.save();
    res.status(201).json(pantry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.assignTask = async (req, res) => {
  try {
    const { pantryId, deliveryId } = req.body;
    const pantry = await Pantry.findById(pantryId);
    if (!pantry) return res.status(404).json({ error: 'Pantry not found' });

    pantry.tasks.push(deliveryId);
    await pantry.save();
    res.json(pantry);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const pantry = await Pantry.findById(req.params.id).populate('tasks');
    if (!pantry) return res.status(404).json({ error: 'Pantry not found' });

    res.json(pantry.tasks);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
