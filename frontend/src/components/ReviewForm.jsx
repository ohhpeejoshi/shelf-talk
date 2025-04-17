import React, { useState } from "react";
import axios from "axios";

const ReviewForm = ({ bookId }) => {
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/reviews", {
                bookId,
                comment,
                rating,
                userId: "placeholder-user-id" // Replace with actual logged-in user ID
            });
            setComment("");
            setRating(0);
            window.location.reload(); // refresh to see new review
        } catch (err) {
            console.error("Error posting review", err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <textarea
                className="w-full p-2 border rounded"
                rows="3"
                placeholder="Write your review..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                required
            />
            <input
                className="w-full p-2 border rounded"
                type="number"
                placeholder="Rating (1-5)"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
            />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                Submit Review
            </button>
        </form>
    );
};

export default ReviewForm;
