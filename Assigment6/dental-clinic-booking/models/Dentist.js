const mongoose = require('mongoose');

const dentistSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
});

module.exports = mongoose.model('Dentist', dentistSchema);
