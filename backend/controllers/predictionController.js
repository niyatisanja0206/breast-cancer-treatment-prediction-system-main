const ConditionResult = require('../models/conditionResult');

const predictCondition = async (req, res) => {
  try {
    const {
      current_tumor_size,
      previous_tumor_size,
      current_nodes_positive,
      previous_nodes_positive
    } = req.body;

    if (!req.session.user || !req.session.user.userId) {
      return res.status(401).json({ message: "Unauthorized: Please log in" });
    }

    // Predict condition result
    let result = 'Stable';

    if (
      current_tumor_size < previous_tumor_size &&
      current_nodes_positive < previous_nodes_positive
    ) {
      result = 'Improved';
    } else if (
      current_tumor_size > previous_tumor_size ||
      current_nodes_positive > previous_nodes_positive
    ) {
      result = 'Worsened';
    }

    // Save to DB
    const newResult = new ConditionResult({
      user: req.session.user.userId,
      current_tumor_size,
      previous_tumor_size,
      current_nodes_positive,
      previous_nodes_positive,
      result
    });

    await newResult.save();

    // ✅ Send response in expected format
    res.json({
      data: { result },
      message: `Your condition has ${result.toLowerCase()}`
    });

  } catch (error) {
    console.error("Error in predictCondition:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const getConditionHistory = async (req, res) => {
  try {
    if (!req.session.user || !req.session.user.userId) {
      return res.status(401).json({ message: "Unauthorized: Please log in" });
    }

    const results = await ConditionResult
      .find({ user: req.session.user.userId })
      .sort({ checkedAt: -1 });

    // ✅ Wrap results inside an object
    res.json({ results });

  } catch (error) {
    console.error("Error in getConditionHistory:", error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  predictCondition,
  getConditionHistory
};
