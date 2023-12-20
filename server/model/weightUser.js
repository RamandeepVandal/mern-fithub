const mongoose = require('mongoose');

const weightUser = new mongoose.Schema({
    weight: {
        type: Number,
        require: true
    },
    dateOfWeight: {
        type : Date, 
        default: Date.now
    }
});

module.exports = mongoose.model('Weight', weightUser);