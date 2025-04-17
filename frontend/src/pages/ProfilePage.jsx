import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem("token");
                const res = await axios.get("http://localhost:3000/users/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data);
            } catch (err) {
                console.error("Error fetching profile", err);
            }
        };

        fetchProfile();
    }, []);

    if (!user) return <div className="p-6">Loading profile...</div>;

    return (
        <div className="p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    );
};

export default ProfilePage;
