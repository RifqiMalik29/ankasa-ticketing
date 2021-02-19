const mongoose = require('mongoose');

const ticketSchema = mongoose.Schema({
    transit: String,
    facilities: [String],
    departureTime: String,
    timeArrived: String,
    airlines: String,
    price: [String],
    flightTime: String,
    arilineImages: String
});

let ticketMessage = mongoose.model("Ticket", ticketSchema);
module.exports = ticketMessage;