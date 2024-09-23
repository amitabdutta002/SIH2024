import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Quizdashboard(){
    return(
        <>
        <div className="w-full" >
            <h1 className="text-3xl font-semibold text-center mt-5 " >Quiz</h1>
            <h3 className="text-center font-light text-sm" >Quizes are updated daily, so comeback tomorrow for more!</h3>
            <div className="w-full px-20 py-10 flex justify-center items-center flex-wrap gap-10">
                <a href="https://forms.gle/jtro1Z59cYsZzCiFA" className="outline outline-1 outline-[#df2771] text-neutral-800 w-1/4 rounded-xl flex justify-center items-center uppercase gap-2 hover:text-2xl hover:bg-[#df2771] hover:text-white text-xl font-semibold h-40">Html<FontAwesomeIcon icon={faArrowRight}/></a>
                <a href="https://forms.gle/fXBLnsiEVixXMw8K8" className="outline outline-1 outline-[#df2771] text-neutral-800 w-1/4 rounded-xl flex justify-center items-center uppercase gap-2 hover:text-2xl hover:bg-[#df2771] hover:text-white text-xl font-semibold h-40">css<FontAwesomeIcon icon={faArrowRight}/></a>
                <a href="https://forms.gle/pji7cgGeS5W7UUbo7" className="outline outline-1 outline-[#df2771] text-neutral-800 w-1/4 rounded-xl flex justify-center items-center uppercase gap-2 hover:text-2xl hover:bg-[#df2771] hover:text-white text-xl font-semibold h-40">java<FontAwesomeIcon icon={faArrowRight}/></a>
                <a href="" className="outline outline-1 outline-[#df2771] text-neutral-800 w-1/4 rounded-xl flex justify-center items-center uppercase gap-2 hover:text-2xl hover:bg-[#df2771] hover:text-white text-xl font-semibold h-40">javascript<FontAwesomeIcon icon={faArrowRight}/></a>
                <a href="" className="outline outline-1 outline-[#df2771] text-neutral-800 w-1/4 rounded-xl flex justify-center items-center uppercase gap-2 hover:text-2xl hover:bg-[#df2771] hover:text-white text-xl font-semibold h-40">cpp<FontAwesomeIcon icon={faArrowRight}/></a>
                <a href="" className="outline outline-1 outline-[#df2771] text-neutral-800 w-1/4 rounded-xl flex justify-center items-center uppercase gap-2 hover:text-2xl hover:bg-[#df2771] hover:text-white text-xl font-semibold h-40">dsa<FontAwesomeIcon icon={faArrowRight}/></a>
                <a href="" className="outline outline-1 outline-[#df2771] text-neutral-800 w-1/4 rounded-xl flex justify-center items-center uppercase gap-2 hover:text-2xl hover:bg-[#df2771] hover:text-white text-xl font-semibold h-40">python<FontAwesomeIcon icon={faArrowRight}/></a>
                <a href="" className="outline outline-1 outline-[#df2771] text-neutral-800 w-1/4 rounded-xl flex justify-center items-center uppercase gap-2 hover:text-2xl hover:bg-[#df2771] hover:text-white text-xl font-semibold h-40">sql<FontAwesomeIcon icon={faArrowRight}/></a>
            </div>
        </div>
        </>
    )
}

export default Quizdashboard