import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register(){
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/api/v1/Student/register',{
                fullName: fullName,
                email: email,
                password: password
            })
            if (response.data.success) {
                console.log('Login Successful',response.data);
                navigate('/login')
            } else {
                setError("Login failed: " + response.data.message);
                toast.error("Login failed:")
            }            
        } catch (err) {
            console.error("Error logging in:", err);
            setError("An error occurred. Please try again later.");
        }
    }

    return(
        <>
        <div className="w-full h-screen flex justify-center items-center" >
            <div className="w-1/2 h-2/3 rounded-2xl shadow-xl flex ">
                <div className="w-1/2 h-full flex justify-center items-center">
                <form action="" className="w-full h-full flex justify-center items-center flex-col gap-5" onSubmit={handleSubmit} >
                    <h1 className="text-2xl font-semibold" >Register</h1>
                    <input type="text" className="border border-black w-2/3 h-10 rounded-md px-3 outline-none" placeholder="Name" value={fullName} onChange={(e)=>{setFullName(e.target.value)}} />
                    <input type="text" className="border border-black w-2/3 h-10 rounded-md px-3 outline-none" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input type="password" className="border border-black w-2/3 h-10 rounded-md px-3 outline-none" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                    <button className="bg-[#df2771] w-2/3 h-10 rounded-md text-xls font-semibold text-white" >Submit  </button>
                </form>
                </div>
                <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-1/2 h-full rounded-r-xl">
                    <div className="w-full h-full text-white flex justify-evenly flex-col" >
                        <div className=" flex flex-col justify-center items-center py-10 ">
                            <h1 className="text-2xl font-semibold">Looks like you're new here!</h1>
                            <p className="mt-2 text-sm" >Sign up here to get started</p>
                        </div>
                        <div className="text-sm flex justify-center items-center py-7" >
                            <h1>Already have an account? <Link to={"/login"} className="text-black font-semibold" >Login</Link></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register