const express = require('express');
const router = express.Router();
const Dentist = require('../models/Dentist');
const Appointment = require('../models/Appointment');

// Get all dentists
router.get('/dentists', async (req, res) => {
    try {
        const dentists = await Dentist.find();
        res.json(dentists);
    } catch (err) {
        res.status(500).json({ error: 'Server Error' });
    }
});

// Create new appointment
router.post('/appointments', async (req, res) => {
    try {
        const { patientName, patientPhone, dentist, date, time } = req.body;
        // Validate required fields
        if (!patientName || !patientPhone || !dentist || !date || !time) {
            return res.status(400).json({ error: 'Please provide all required fields' });
        }

        // Check if the slot is already booked for that dentist
        const existingAppointment = await Appointment.findOne({ dentist, date, time });
        if (existingAppointment) {
            return res.status(400).json({ error: 'This time slot is already booked for the selected dentist.' });
        }

        const appointment = new Appointment({
            patientName,
            patientPhone,
            dentist,
            date,
            time
        });
        await appointment.save();
        res.status(201).json({ message: 'Appointment booked successfully!', appointment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to book appointment' });
    }
});

module.exports = router;
