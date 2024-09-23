import React from "react";
import { Link } from "react-router-dom";
function Quiz(){
    return(
        <>
        <div className="bg-[url('./images/b1.jpg')] bg-cover h-[85vh] w-full flex justify-center items-center ">
            <div className="flex flex-col text-white rounded-xl justify-center items-center gap-5 ">
                <h1 className="text-4xl font-semibold" >Daily Quiz on SkillWave</h1>
                <h4 className="text-xl font-light" >If you think education is expensive, try ignorance</h4>
                <Link to={'/quizdashboard'} className="bg-[#df2771] text-white text-2xl font-semibold w-60 h-10 flex justify-center items-center py-7 rounded-full " >Start</Link>
            </div>
        </div>
        </>
    )
}

export default Quiz