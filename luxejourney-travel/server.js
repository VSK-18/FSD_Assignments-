const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const Destination = require('./models/Destination');
const Booking = require('./models/Booking');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/luxejourney';
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        seedData();
    })
    .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.get('/', async (req, res) => {
    const featured = await Destination.find({ featured: true });
    res.render('home', { featured });
});

app.get('/destinations', async (req, res) => {
    const destinations = await Destination.find();
    res.render('destinations', { destinations });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/book/:id', async (req, res) => {
    const destination = await Destination.findById(req.params.id);
    res.render('booking', { destination });
});

app.post('/book', async (req, res) => {
    try {
        const { destinationId, userName, email, travelDate } = req.body;
        const newBooking = new Booking({ destinationId, userName, email, travelDate });
        await newBooking.save();
        res.render('success', { message: 'Booking successful! We will contact you soon.' });
    } catch (err) {
        res.status(500).send('Error processing booking');
    }
});

// Seed Data
async function seedData() {
    const count = await Destination.countDocuments();
    if (count === 0) {
        const initialDestinations = [
            {
                name: 'Udaipur, India',
                description: 'The City of Lakes, offering royal heritage and majestic palaces.',
                price: 900,
                image: 'https://images.unsplash.com/photo-1590050752117-23a9d7fc244d?auto=format&fit=crop&w=800&q=80',
                location: 'Rajasthan',
                featured: true
            },
            {
                name: 'Kerala Backwaters, India',
                description: 'Serene houseboats and lush greenery in God\'s Own Country.',
                price: 750,
                image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
                location: 'Kerala',
                featured: true
            },
            {
                name: 'Ladakh, India',
                description: 'Dramatic landscapes and spiritual peace in the High Himalayas.',
                price: 1100,
                image: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=800&q=80',
                location: 'Jammu & Kashmir',
                featured: true
            },
            {
                name: 'Santorini, Greece',
                description: 'White-washed houses and stunning sunsets over the Aegean Sea.',
                price: 1200,
                image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
                location: 'Cyclades',
                featured: false
            }
        ];
        await Destination.insertMany(initialDestinations);
        console.log('Database seeded with Indian options');
    }
}

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
