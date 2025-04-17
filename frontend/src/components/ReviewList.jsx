import React, { useEffect, useState } from "react";
import axios from "axios";

const ReviewList = ({ bookId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/reviews?bookId=${bookId}`);
                setReviews(res.data);
            } catch (err) {
                console.error("Error fetching reviews", err);
            }
        };

        fetchReviews();
    }, [bookId]);

    if (reviews.length === 0) return <p>No reviews yet. Be the first to add one!</p>;

    return (
        <div className="space-y-4">
            {reviews.map((rev) => (
                <div key={rev._id} className="bg-gray-100 p-4 rounded">
                    <p className="text-gray-800">{rev.comment}</p>
                    <p className="text-sm text-gray-600">⭐ {rev.rating}</p>
                </div>
            ))}
        </div>
    );
};

export default ReviewList;
