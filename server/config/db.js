const mongoose = require('mongoose');

const db = async() => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/mern-fithub');
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = db;