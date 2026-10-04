require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB() {
    if (!process.env.MONGO_URl) {
        throw new Error('MONGO_URl is not defined in .env');
    }

    try {
        await mongoose.connect(process.env.MONGO_URl);
        console.log('connected to DB');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB