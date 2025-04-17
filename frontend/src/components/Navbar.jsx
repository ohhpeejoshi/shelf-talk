import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow-lg">
            <Link to="/" className="text-2xl font-bold">
                📚 Shelf Talk
            </Link>
            <div className="space-x-4">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/profile" className="hover:underline">
                    Profile
                </Link>
                <Link to="/login" className="hover:underline">
                    Login
                </Link>
                <Link to="/register" className="hover:underline">
                    Register
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
