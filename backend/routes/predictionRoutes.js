const express = require('express');
const { predictCondition, getConditionHistory } = require('../controllers/predictionController');

const router = express.Router();

router.post('/condition', predictCondition);
router.get('/condition/history', getConditionHistory);

module.exports = router;
