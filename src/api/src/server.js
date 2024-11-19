const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/dbConfig');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/api/v1/', (req, res) => {
    res.send('This isn\'t the frontend, how did you get here!');
});

app.get('/api/v1/health', (req, res) => {
    res.send('OK');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});