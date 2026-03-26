const mongoose = require('mongoose');
require('dotenv').config();
const Dentist = require('./models/Dentist');

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/dental_clinic';

const seedDentists = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB for seeding');

        // Check if dentists exist
        const count = await Dentist.countDocuments();
        if (count === 0) {
            const dentists = [
                { name: 'Dr. Sarah Jenkins', specialization: 'Orthodontist' },
                { name: 'Dr. Michael Chen', specialization: 'Pediatric Dentist' },
                { name: 'Dr. Emily Carter', specialization: 'Periodontist' },
                { name: 'Dr. James Smith', specialization: 'General Dentist' }
            ];
            await Dentist.insertMany(dentists);
            console.log('Seeded dentists.');
        } else {
            console.log('Dentists already exist, skipping seed.');
        }
    } catch (error) {
        console.error('Seeding error:', error);
    } finally {
        mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
};

seedDentists();
