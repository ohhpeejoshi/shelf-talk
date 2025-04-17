import React, { useState } from "react";
import api from "../utils/api";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await api.post("/users/register", formData);
            alert("Registration Successful!");
            console.log(res.data);
            localStorage.setItem("token", res.data.token);  // assuming your backend returns { token: '...' }
        } catch (error) {
            console.error(error);
            alert("Error registering user");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form className="bg-white p-8 rounded-2xl shadow-lg w-96 space-y-4" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} className="border w-full p-2 rounded" required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} className="border w-full p-2 rounded" required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} value={formData.password} className="border w-full p-2 rounded" required />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
