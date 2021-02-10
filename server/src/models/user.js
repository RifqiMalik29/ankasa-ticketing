const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: { type: String, require },
    email: { type: String, require },
    password: { type: String, require },
    phone: { type: String, require },
    selectedFile: String,
    location: [String],
    cards: [String],
    flightBooked: [String]
});

let UserMessage = mongoose.model('UserMessage', userSchema);

module.exports = UserMessage;