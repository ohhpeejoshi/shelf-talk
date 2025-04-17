import express from "express";
import { getBooks, getBookById, createBook } from "../controllers/bookController.js";
import protect from "../middlewares/authMiddleware.js";
import admin from "../middlewares/adminMiddleware.js";

const router = express.Router();

router.get("/", getBooks);          // GET /books
router.get("/:id", getBookById);    // GET /books/:id
router.post("/", protect, admin, createBook);      // POST /books

export default router;
