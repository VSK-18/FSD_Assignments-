# 🎓 Student Feedback Review System

![Banner](./assets/banner.png)

A modern, full-stack application designed for students to provide reviews for their courses and instructors. Built with a focus on premium aesthetics, glassmorphism, and a smooth user experience powered by React and Framer Motion.

## 🛠️ Technology Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## ✨ Key Features
- **Interactive Star Ratings:** Custom star components for intuitive and engaging feedback.
- **Glassmorphism UI:** Beautiful, frosted-glass design with a deep Indigo & Slate palette.
- **Admin Dashboard:** Real-time stats and feedback aggregation using MongoDB.
- **Micro-Animations:** Smooth transitions and layout animations powered by `Framer Motion`.
- **Database Flexibility:** Uses `mongodb-memory-server` for instant testing without a local MongoDB installation.

## 🚀 Getting Started

### 🔌 Port Configuration
- **Client**: `http://localhost:5175`
- **Server**: `http://localhost:5005`

### 🏗️ Running Locally

1. **Install Dependencies**:
   ```bash
   cd client && npm install
   cd ../server && npm install
   ```

2. **Start Backend**:
   ```bash
   cd server
   npm run dev
   ```

3. **Start Frontend**:
   ```bash
   cd client
   npm run dev -- --port 5175
   ```

## 📂 Project Structure
- `/client`: Frontend React application.
- `/server`: Backend Express API & Mongoose models.

---
*Part of the Full Stack Development Assignment Series.*
