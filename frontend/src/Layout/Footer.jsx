import { faArrowRight, faArrowUp, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer(){

    return(
        <>
        <div className="w-full bg-[#FAF9F6] px-20" >
            <div className="px-10" >
                <h4 className="font-semibold pt-2" >Ready to work together?</h4>
                <h1 className="text-5xl font-medium mt-20 tracking-tight ">Start a Project <Link to={'/contact'} className="bg-white text-center rounded-full size-32" ><FontAwesomeIcon icon={faArrowRight} className="text-sm px-3" /></Link> </h1>
            </div>
            <div className="bg-slate-950 w-full h-[1px] mt-3"></div>
            <div className="flex justify-between items-center px-40 py-10" >
                <div><img className="w-auto h-32 rounded-md" src="../src/images/logo.png" alt="" /></div>
                <div className="h-28 flex flex-col gap-2" >
                    <h1 className="text-2xl font-semibold pb-3">Contacts</h1>
                    <div className="flex justify-start items-center gap-3 font-medium" ><FontAwesomeIcon className="text-[1.5vh]" icon={faCircle}/> +91 7847911340</div>
                    <div className="flex justify-start items-center gap-3 font-medium" ><FontAwesomeIcon className="text-[1.5vh]" icon={faCircle}/> support.skillware@gmail.com</div>
                </div>
                <div className="h-28 flex flex-col gap-2" >
                    <h1 className="text-2xl font-semibold pb-3">Socials</h1>
                    <a href="#" className="flex justify-start items-center gap-3 font-medium " ><FontAwesomeIcon className="text-[1.5vh]" icon={faCircle}/> Instgram</a>
                    <a href="#" className="flex justify-start items-center gap-3 font-medium " ><FontAwesomeIcon className="text-[1.5vh]" icon={faCircle}/> LinkedIn</a>
                    <a href="#" className="flex justify-start items-center gap-3 font-medium " ><FontAwesomeIcon className="text-[1.5vh]" icon={faCircle}/> GitHub</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer