const express = require('express');
const { getWeight, postWeight, deleteWeight } = require('../controllers/weightController');

const router = express.Router();

router.route('/weight').get(getWeight).post(postWeight);
router.route('/weight/:id').delete(deleteWeight);

module.exports = router;