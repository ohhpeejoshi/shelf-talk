import express from "express";
import { getReviews, createReview } from "../controllers/reviewController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getReviews);        // GET /reviews?bookId=xxx
router.post("/", protect, createReview);     // POST /reviews

export default router;
