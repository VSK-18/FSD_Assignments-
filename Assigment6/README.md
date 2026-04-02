# 32 Smiles: Dental Clinic Booking Application

This directory contains an online dental clinic appointment booking system built using Node.js, Express, and MongoDB.

## Features
- **Backend Application**: Node.js and Express server with API endpoints.
- **Database**: MongoDB via Mongoose (uses `Dentist` and `Appointment` models).
- **Frontend Views**: EJS templates styled with modern, vibrant Vanilla CSS and glassmorphism.
- **Functionality**: Users can book appointments with dentists, and a dashboard displays all scheduled appointments.

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd dental-clinic-booking
   ```
2. Ensure you have MongoDB installed and running locally on `localhost:27017` or provide a valid connection string via `.env` (`MONGO_URI`).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Seed the database with sample dentists:
   ```bash
   node seed.js
   ```
5. Start the server:
   ```bash
   npm start
   ```
6. Open your browser and navigate to `http://localhost:3000`.
