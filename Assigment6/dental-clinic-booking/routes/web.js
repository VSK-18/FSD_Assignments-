const express = require('express');
const router = express.Router();
const Dentist = require('../models/Dentist');
const Appointment = require('../models/Appointment');

// Home Page
router.get('/', (req, res) => {
    res.render('index', { title: '32 Smiles - Home' });
});

// Booking Page
router.get('/book', async (req, res) => {
    try {
        const dentists = await Dentist.find();
        res.render('book', { title: 'Book Appointment', dentists });
    } catch (err) {
        console.error(err);
        res.render('error', { message: 'Error loading page' });
    }
});

// Dashboard Page
router.get('/dashboard', async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('dentist').sort({ date: 1, time: 1 });
        res.render('dashboard', { title: '32 Smiles Dashboard', appointments });
    } catch (err) {
        console.error(err);
        res.render('error', { message: 'Error loading dashboard' });
    }
});

module.exports = router;
