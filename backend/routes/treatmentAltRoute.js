const express = require("express");
const router = express.Router();
const { getAlternativeTreatmentPlan } = require("../controllers/treatmentAltController");

router.post("/predict-alternative-treatment", getAlternativeTreatmentPlan);

module.exports = router;
