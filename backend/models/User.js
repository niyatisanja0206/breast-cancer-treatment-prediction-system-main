const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    age: Number,
    regional_nodes_positive: Number,
    total_tumors: Number,
    er_status: { 
        type: String, 
        enum: ['Borderline', 'Positive', 'Negative'], 
    },
    pr_status: { 
        type: String, 
        enum: ['Borderline', 'Positive', 'Negative'], 
    },
    tumor_size: Number,
    her2_status:{ 
        type: String, 
        enum: ['Borderline', 'Positive', 'Negative'], 
    } ,
    regional_nodes_examined: Number,
    race: { 
        type: String, 
        enum: ['White', 'Black'], 
    },
    details_filled: { type: Boolean, default: false } // Tracks if user completed details
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
