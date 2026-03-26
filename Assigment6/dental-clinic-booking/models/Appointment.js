const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientName: { type: String, required: true },
    patientPhone: { type: String, required: true },
    dentist: { type: mongoose.Schema.Types.ObjectId, ref: 'Dentist', required: true },
    date: { type: String, required: true }, // Format YYYY-MM-DD
    time: { type: String, required: true }, // Format HH:MM
    status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' }
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
