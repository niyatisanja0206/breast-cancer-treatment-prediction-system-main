const express = require("express");
const { getTreatmentPlan } = require("../controllers/treatmentController"); 

const router = express.Router();

// Debugging Log
console.log("getTreatmentPlan:", getTreatmentPlan); // Should not be undefined

router.post("/predict",  getTreatmentPlan);

module.exports = router;
