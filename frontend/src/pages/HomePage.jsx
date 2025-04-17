import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";

const HomePage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("http://localhost:3000/books");
                setBooks(res.data);
            } catch (err) {
                console.error("Error fetching books", err);
            }
        };

        fetchBooks();
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Explore Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {books.map((book) => (
                    <BookCard key={book._id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
