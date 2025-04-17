import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    return (
        <div className="bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-700">by {book.author}</p>
            <p className="text-sm text-gray-600 mt-2">{book.genre}</p>
            <Link to={`/books/${book._id}`}>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default BookCard;
