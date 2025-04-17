import Review from "../models/Review.js";
import Book from "../models/Book.js";

// GET /reviews?bookId=xxx - Get reviews for a specific book
export const getReviews = async (req, res) => {
    try {
        const { book } = req.query;
        const filter = book ? { book } : {};
        const reviews = await Review.find(filter).populate("user", "name");
        res.json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching reviews" });
    }
};

// POST /reviews - Submit a new review
export const createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json(review);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error creating review" });
    }
};