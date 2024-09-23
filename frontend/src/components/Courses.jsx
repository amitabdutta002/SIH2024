import React from "react";
import { Link } from "react-router-dom";
function Courses(){
    return(
        <>
        <div className="px-32 py-10 " >
            <h1 className="text-5xl font-semibold text-slate-950" >Courses on SkillWave</h1>
            <p className="pt-3" >Learn programming languages and concepts to prepare for a career in hardware or software development</p>
            <div className="mt-10 flex justify-evenly items-center gap-10 flex-wrap">
                <Link className="w-1/4 h-60" to={'/html'} >
                    <div className="w-full h-full bg-gradient-to-r from-[#FA4B37] to-[#DF2771] rounded-lg shadow-lg">
                        <img className="rounded-t w-auto h-4/5  object-fill" src="../src/images/Courses/web-course.jpg" alt="" />
                        <p className="w-full h-1/5 flex justify-center items-center uppercase text-xl font-semibold text-white " >HTML</p>
                    </div>
                </Link>
                <Link className="w-1/4 h-60" to={'/css'} >
                    <div className="w-full h-full bg-gradient-to-r from-[#FA4B37] to-[#DF2771] rounded-lg shadow-lg">
                        <img className="rounded-t w-auto h-4/5  object-fill" src="../src/images/Courses/web-course.jpg" alt="" />
                        <p className="w-full h-1/5 flex justify-center items-center uppercase text-xl font-semibold text-white " >CSS</p>
                    </div>
                </Link>
                <Link className="w-1/4 h-60" to={'/javascript'} >
                    <div className="w-full h-full bg-gradient-to-r from-[#FA4B37] to-[#DF2771] rounded-lg shadow-lg">
                        <img className="rounded-t w-auto h-4/5  object-fill" src="../src/images/Courses/javascript-course.jpg" alt="" />
                        <p className="w-full h-1/5 flex justify-center items-center uppercase text-xl font-semibold text-white " >JavaScript</p>
                    </div>
                </Link>
                <Link className="w-1/4 h-60" to={'/cpp'} >
                    <div className="w-full h-full bg-gradient-to-r from-[#FA4B37] to-[#DF2771] rounded-lg shadow-lg">
                        <img className="rounded-t w-auto h-4/5  object-fill" src="../src/images/Courses/c-course.jpg" alt="" />
                        <p className="w-full h-1/5 flex justify-center items-center uppercase text-xl font-semibold text-white " >C ++</p>
                    </div>
                </Link>
                <Link className="w-1/4 h-60" to={'/dsa'} >
                    <div className="w-full h-full bg-gradient-to-r from-[#FA4B37] to-[#DF2771] rounded-lg shadow-lg">
                        <img className="rounded-t w-auto h-4/5  object-fill" src="../src/images/Courses/data-course.jpg" alt="" />
                        <p className="w-full h-1/5 flex justify-center items-center uppercase text-xl font-semibold text-white " >dsa</p>
                    </div>
                </Link>
                <Link className="w-1/4 h-60" to={'/java'} >
                    <div className="w-full h-full bg-gradient-to-r from-[#FA4B37] to-[#DF2771] rounded-lg shadow-lg">
                        <img className="rounded-t w-auto h-4/5  object-fill" src="../src/images/Courses/java-course.jpg" alt="" />
                        <p className="w-full h-1/5 flex justify-center items-center uppercase text-xl font-semibold text-white " >Java</p>
                    </div>
                </Link>
                <Link className="w-1/4 h-60" to={'/python'} >
                    <div className="w-full h-full bg-gradient-to-r from-[#FA4B37] to-[#DF2771] rounded-lg shadow-lg">
                        <img className="rounded-t w-auto h-4/5  object-filfill" src="../src/images/Courses/python-course.png" alt="" />
                        <p className="w-full h-1/5 flex justify-center items-center uppercase text-xl font-semibold text-white " >Python</p>
                    </div>
                </Link>
                <Link className="w-1/4 h-60" to={'/sql'} >
                    <div className="w-full h-full bg-gradient-to-r from-[#FA4B37] to-[#DF2771] rounded-lg shadow-lg">
                        <img className="rounded-t w-auto h-4/5  object-fill" src="../src/images/Courses/database.jpg" alt="" />
                        <p className="w-full h-1/5 flex justify-center items-center uppercase text-xl font-semibold text-white " >sql</p>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Courses