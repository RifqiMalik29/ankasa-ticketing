const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    selectedFile: String,
    location: [String],
    cards: [String],
    flightBooked: [String]
});

let UserMessage = mongoose.model('UserMessage', userSchema);

module.exports = UserMessage;