import React, { useState, useEffect } from "react";
import axios from "axios";

function Ai() {
    const [fullname, setFullName] = useState('');

    // Fetch the name from the database
    const fetchName = async () => {
        try {
            // Assume you store an access token or user ID in localStorage
            const token = localStorage.getItem('accessToken'); // Or user ID if stored

            if (!token) {
                console.error('No token found');
                return;
            }

            // Make a GET request to your backend API to fetch user data
            const response = await axios.get('http://localhost:8000/api/v1/Student/profile', {
                headers: {
                    Authorization: `Bearer ${token}` // Pass the token in the Authorization header
                }
            });

            // Check if the response is successful and contains the user data
            if (response.data.success) {
                setFullName(response.data.user.name); // Set the fetched name in the state
            } else {
                console.error('Failed to fetch user data:', response.data.message);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    // Use useEffect to fetch the name when the component mounts
    useEffect(() => {
        fetchName();
    }, []); // Empty dependency array ensures this runs only once after the initial render

    return (
        <div>
            <h1>Hello, {fullname ? fullname : "loading..."}</h1>
        </div>
    );
}

export default Ai;
