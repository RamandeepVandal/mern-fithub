const mongoose = require('mongoose');
const Weight = require('../model/weightUser');


// GET
// Get all the weight fields
const getWeight = async(req, res) => {
    const data = await Weight.find({});

    if(!data) {
        res.status(400);
        throw new Error("No data to show.");
    }

    res.status(200).json(data);
}

// POST
// create a new wieght field
const postWeight = async(req, res) => {
    const data = await req.body;

    if(!data) {
        res.status(400);
        throw new Error('Please fill all data fields.');
    }

    const newWeight = new Weight(data);
    await newWeight.save();

    // if POST req was a success
    res.status(200).json({message: "Weitgh added."});
}

// DELETE
// Delete a weight field
const deleteWeight = async(req, res) => {
    const id = await req.params.id;

    if(!data) {
        res.status(400);
        throw new Error("Weight feild does not exist.");
    }

    await Weight.findByIdAndDelete(id);
    res.status(200).json({message: "Weight deleted."})
}

module.exports = { getWeight, postWeight, deleteWeight };