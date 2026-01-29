require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const connectDB = require('./config/db');

const app = express();
connectDB(); // MongoDB

// Middlewares
app.use(express.json());

app.use(cors({
<<<<<<< HEAD
  origin: 'https://breast-cancer-treatment-prediction.onrender.com',
=======
  origin: 'https://breast-cancer-treatment-prediction-psi.vercel.app/',
>>>>>>> a4fa3379f949bb207af2191c6f06d5abc3acefd6
  credentials: true
}));

// Session setup
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'SEC',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true in production with HTTPS
      httpOnly: true,
    }
  })
);

// Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const predictionRoutes = require('./routes/predictionRoutes');
app.use('/api/predict', predictionRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

const treatmentRoutes = require("./routes/treatmentRoutes");
app.use("/api/treatment", treatmentRoutes);

const alternativeTreatmentRoutes = require("./routes/treatmentAltRoute");
app.use("/api/treatment", alternativeTreatmentRoutes);

const chatbotRoutes = require('./routes/chatbotRoutes');
app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
