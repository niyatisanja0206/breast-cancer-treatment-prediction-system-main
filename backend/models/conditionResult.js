// models/ConditionResult.js
const mongoose = require('mongoose');

const ConditionResultSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    current_tumor_size: Number,
    previous_tumor_size: Number,
    current_nodes_positive: Number,
    previous_nodes_positive: Number,
    result: { type: String, enum: ['Improved', 'Worsened', 'Stable'] },
    checkedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('conditionResult', ConditionResultSchema);
