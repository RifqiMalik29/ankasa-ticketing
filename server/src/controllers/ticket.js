const mongoose = require('mongoose');
const ticketModel = require('../models/ticket');

module.exports = {
    getAllTickets: async (req, res) => {
        try {
            const result = await ticketModel.find().limit(5);

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    getTicket: async (req, res) => {
        const { id } = req.params;

        try {
            const result = await ticketModel.findById(id);

            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    addTicket: async (req, res) => {
        const setData = req.body;
        const tickets = new ticketModel(setData);

        try {
            const result = await tickets.save();
            
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};