import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/v1/Student/login', {
                email: email,
                password: password
            });

            if (response.data.success) {
                console.log(response.data.AccessToken);
                localStorage.setItem('accessToken', response.data.AccessToken);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                
                navigate('/courses')
                console.log("Login successful", response.data);
                console.log(response.data.AccessToken);
                
            } else {
                setError("Login failed: " + response.data.message);
            }
        } catch (err) {
            console.error("Error logging in:", err);
            setError("An error occurred. Please try again later.");
        }
    };

    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <div className="w-1/2 h-2/3 rounded-2xl shadow-xl flex">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-1/2 h-full rounded-l-xl">
                        <div className="w-full h-full text-white flex justify-evenly flex-col">
                            <div className="flex flex-col justify-center items-center py-10">
                                <h1 className="text-2xl font-semibold">Enter Credentials</h1>
                                <p className="px-14 text-center mt-2 text-sm">
                                    Verify your Email and password before accessing the content.
                                </p>
                            </div>
                            <div className="text-sm flex justify-center items-center py-7">
                                <h1>Don't have an account? <Link to={"/register"} className="text-black font-semibold">Need one</Link></h1>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <form className="w-full h-full flex justify-center items-center flex-col gap-5" onSubmit={handleSubmit}>
                            <h1 className="text-2xl font-semibold">Login</h1>
                            <input
                                type="text"
                                className="border border-black w-2/3 h-10 rounded-md px-3 outline-none"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="border border-black w-2/3 h-10 rounded-md px-3 outline-none"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className="bg-[#df2271] w-2/3 h-10 rounded-md text-xl font-semibold text-white">
                                Login
                            </button>
                            {error && <p className="text-red-500">{error}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
