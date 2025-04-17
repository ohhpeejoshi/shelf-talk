import Book from "../models/Book.js";

// GET /books - Retrieve all books (we'll add pagination later)
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// GET /books/:id - Retrieve a specific book
export const getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book not found" });

        res.json(book);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// POST /books - Add a new book (admin-only route, add auth later)
export const createBook = async (req, res) => {
    try {
        const { title, author, genre, description } = req.body;
        const newBook = new Book({ title, author, genre, description });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);

    } catch (error) {
        console.log("error creating book!", error)
        res.status(400).json({ message: "Invalid book data" });
    }
};
// 