import { faChessQueen } from "@fortawesome/free-regular-svg-icons";
import { faA, faRobot, faStarOfDavid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = async () => {
        const loggedoutuser = await axios.post('http://localhost:8000/api/v1/Student/logout')
        localStorage.removeItem('accessToken'); 
        localStorage.removeItem('user'); 
        setIsLoggedIn(false); 
        navigate('/login'); 
        console.log(loggedoutuser);
        
    };

    return (
        <div className="w-full h-[15vh] flex justify-between items-center shadow-md">
            <div className="w-1/4 h-full">
                <Link to={'/'}>
                    <img className="w-auto h-full px-14 py-3" src="../src/images/logo.png" alt="Logo" />
                </Link>
            </div>
            <div className="w-1/2 h-full flex justify-evenly items-center">
                <NavLink to={'/'} className={({ isActive }) => `w-32 h-1/3 flex justify-center items-center rounded-lg text-xl font-semibold ${isActive ? 'text-pink-500' : 'text-neutral-500'}`}>Home</NavLink>
                <NavLink to={'/overview'} className={({ isActive }) => `w-32 h-1/3 flex justify-center items-center rounded-lg text-xl font-semibold ${isActive ? 'text-pink-500' : 'text-neutral-500'}`}>Overview</NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => `w-32 h-1/3 flex justify-center items-center rounded-lg text-xl font-semibold ${isActive ? 'text-pink-500' : 'text-neutral-500'}`}>Contact</NavLink>
                <NavLink to={'/quiz'} className={({ isActive }) => `w-32 h-1/3 flex justify-center items-center rounded-lg text-xl font-semibold ${isActive ? 'text-pink-500' : 'text-neutral-500'}`}>Quiz</NavLink>
            </div>
            <div className="w-1/4 h-full flex justify-center items-center">
                {isLoggedIn ? (
                    <div className="w-full h-full flex justify-center items-center gap-10" >
                    <button onClick={handleLogout} className="w-40 bg-[#DF2771] h-1/2 flex justify-center items-center rounded-full text-xl font-semibold text-white hover:bg-white hover:outline hover:outline-[#DF2771] hover:text-black">
                        Logout
                    </button>
                    </div>
                ) : (
                    <Link to={'/login'} className="w-40 bg-[#DF2771] h-1/2 flex justify-center items-center rounded-full text-xl font-semibold text-white hover:bg-white hover:outline hover:outline-[#DF2771] hover:text-black">
                        Get Started
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Header;
