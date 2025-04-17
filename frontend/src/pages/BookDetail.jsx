import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/books/${id}`);
                setBook(res.data);
            } catch (err) {
                console.error("Error fetching book details", err);
            }
        };

        fetchBook();
    }, [id]);

    if (!book) return <div className="p-6">Loading...</div>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <p className="text-lg text-gray-700 mb-2">by {book.author}</p>
            <p className="mb-4 text-gray-600">{book.description}</p>
            <p className="text-yellow-600 font-semibold mb-6">⭐ {book.averageRating}</p>

            <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
            <ReviewList bookId={id} />
            <ReviewForm bookId={id} />
        </div>
    );
};

export default BookDetail;
