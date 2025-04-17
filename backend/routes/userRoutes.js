import express from "express";
import { getUserById, updateUser, registerUser, loginUser } from "../controllers/userController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/:id", getUserById);    // GET /users/:id
router.put("/:id", protect, updateUser);     // PUT /users/:id

export default router;
