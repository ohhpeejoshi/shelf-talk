import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

// Connect to MongoDB
mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "shelf-talk", // Optional
    })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Routes
app.use("/books", bookRoutes);
app.use("/reviews", reviewRoutes);
app.use("/users", userRoutes);
app.use("/auth", authRoutes);

// Basic root route
app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
