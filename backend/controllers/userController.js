import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// GET /users/:id - Get a user profile
export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select("-password"); // hide password
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
};

// PUT /users/:id - Update a user profile
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // returns updated document
        );
        if (!user) return res.status(404).json({ message: "User not found" });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating user" });
    }
};

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(201).json({
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error registering user" });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging in" });
    }
};

// export const updateUser = async (req, res) => {
//     try {
//         const updates = req.body;
//         const user = await User.findByIdAndUpdate(req.params.id, updates, {
//             new: true,
//         }).select("-password");

//         if (!user) return res.status(404).json({ message: "User not found" });

//         res.json(user);
//     } catch (error) {
//         res.status(400).json({ message: "Invalid update" });
//     }
// };


