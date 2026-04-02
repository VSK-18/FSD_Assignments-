# ✈️ LuxeJourney - Premium Travel Agency


A full-stack travel agency web application built with a Node.js and Express backend, utilizing EJS for server-side templating and MongoDB as the database. Features a sleek, responsive design and robust backend architecture.

## 🛠️ Technology Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## ✨ Key Features
- **Dynamic Views:** Renders server-side web pages using EJS templates for optimal performance and SEO.
- **Database Integration:** Connects with MongoDB via Mongoose for persistent data storage of travel packages, user information, and bookings.
- **Environment Configuration:** Securely manages keys and connection strings using `dotenv`.
- **MVC Architecture:** Organizes application logic into models, views, and controllers for maximum maintainability.

## 🚀 Getting Started

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Ensure you have a `.env` file configured with your `MONGO_URI` and `PORT`.

3. **Start the Server:**
   ```bash
   npm start
   ```
   *For development with auto-restart, use `npm run dev` (requires nodemon).*

## 📂 Project Structure
- `server.js`: The main entry point that configures Express and connects to MongoDB.
- `models/`: Mongoose schemas defining the data structure.
- `views/`: EJS templates for the user interface.
- `public/`: Static assets (CSS, JS, images) served to the client.

---
*Part of the Full Stack Development Assignment Series.*
