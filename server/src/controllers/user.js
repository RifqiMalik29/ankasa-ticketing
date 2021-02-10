const mongoose = require('mongoose');
const UserMessages = require('../models/user');

module.exports = {
    getUser: async (req, res) => {
        try {
            const result = await UserMessages.find();

            res.status(200).send(result);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    },

    getUserId: async (req, res) => {
        const { id } = req.params;
        
        try {
            const result = await UserMessages.findById(id);

            res.status(200).send(result);
        } catch (error) {
            res.status(404).send({ message: error.message });
        }
    },

    createUser: async (req, res) => {
        const setData = req.body;
        const userData = new UserMessages(setData);

        try {
            const result = await userData.save();

            res.status(201).send(result);
        } catch (error) {
            res.status(409).send({ message : error.message });
        }
    },

    updateUser: async (req, res) => {
        const { id } = req.params;
        const { username, email, password, phone, selectedFile, location, cards, flightBooked } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ message: `User with id: ${id} not found`});

        const updatedUser = { username, email, password, phone, selectedFile, location, cards, flightBooked, _id: id };

        const result = await UserMessages.findByIdAndUpdate(id, updatedUser, { new: true });

        res.status(201).send({ message: "User Updated Successfully", data: result });
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send({ message: `User with id: ${id} not found` });

        const result = await UserMessages.findOneAndRemove(id);

        res.status(201).send({ message: "User Deleted Successfully", data: result });
    },
}