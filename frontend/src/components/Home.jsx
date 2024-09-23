import { faCss3, faHtml5, faJava, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faC, faFolderTree, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate()

    const handleMore = () =>{
        const token = localStorage.getItem('accessToken');
        if (token) {
            navigate('/courses')
        }
        else{
            console.log("Plese Login to view more courses");
        }
    }

    return(
        <>
        <div className="w-full">
            <div className="flex justify-evenly items-center gap-20 h-[85vh] p-20" >
                <div className="w-3/5 p-5 h-2/3" >
                    <h1 className="text-5xl font-semibold" >The beautiful thing about learning is that nobody can take it away from you.</h1>
                    <h3 className="mt-5 text-md" >Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research!</h3>
                </div>
                <div><img className="w-auto h-96" src="../src/images/svg.jpg" alt="" /></div>
            </div>
            <div className="px-20 py-10" >
                <h1 className="text-3xl font-semibold" >Trending Now on SkillWave</h1>
                <div className="flex justify-center items-center gap-10 py-10" >
                    <Link onClick={handleMore} className="w-80 h-24 rounded-2xl outline outline-1 outline-[#DF2771] flex justify-center items-center gap-5 text-2xl font-medium shadow-lg hover:bg-gradient-to-r from-pink-500 to-rose-500 hover:text-white hover:outline-none"><FontAwesomeIcon icon={faHtml5}/> HTML</Link>
                    <Link onClick={handleMore} className="w-80 h-24 rounded-2xl outline outline-1 outline-[#DF2771] flex justify-center items-center gap-5 text-2xl font-medium shadow-lg hover:bg-gradient-to-r from-pink-500 to-rose-500 hover:text-white hover:outline-none"><FontAwesomeIcon icon={faCss3}/>CSS</Link>
                    <Link onClick={handleMore} className="w-80 h-24 rounded-2xl outline outline-1 outline-[#DF2771] flex justify-center items-center gap-5 text-2xl font-medium shadow-lg hover:bg-gradient-to-r from-pink-500 to-rose-500 hover:text-white hover:outline-none"><FontAwesomeIcon icon={faJs}/>JS</Link>
                    <Link onClick={handleMore} className="w-80 h-24 rounded-2xl outline outline-1 outline-[#DF2771] flex justify-center items-center gap-5 text-2xl font-medium shadow-lg hover:bg-gradient-to-r from-pink-500 to-rose-500 hover:text-white hover:outline-none">View more<FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>
            </div>
            <div className="px-20" >
                <h1 className="py-10 text-center text-4xl font-semibold" >Services</h1>
                <div className="flex justify-center items-center gap-10" >
                <div className="w-1/4 h-52 rounded-xl flex gap-10 justify-center items-center flex-col text-2xl font-medium shadow-xl outline-1 outline-dotted outline-slate-800">
                    <h1 className="" >Computer courses</h1>
                    <Link className="w-2/3 rounded-xl text-white bg-[#df2771] h-1/4 text-sm flex justify-center items-center gap-2  ">Read more <FontAwesomeIcon icon={faArrowRight}/> </Link>
                    </div>
                    <div className="w-1/4 h-52 rounded-xl flex gap-10 justify-center items-center flex-col text-2xl font-medium shadow-xl outline-1 outline-dotted outline-slate-800">
                    <h1 className="" >Related Resources</h1>
                    <Link className="w-2/3 rounded-xl text-white bg-[#df2771] h-1/4 text-sm flex justify-center items-center gap-2  ">Read more <FontAwesomeIcon icon={faArrowRight}/> </Link>
                    </div>
                    <div className="w-1/4 h-52 rounded-xl flex gap-10 justify-center items-center flex-col text-2xl font-medium shadow-xl outline-1 outline-dotted outline-slate-800">
                    <h1 className="" >Video Lectures</h1>
                    <Link className="w-2/3 rounded-xl text-white bg-[#df2771] h-1/4 text-sm flex justify-center items-center gap-2  ">Read more <FontAwesomeIcon icon={faArrowRight}/> </Link>
                    </div>
                    <div className="w-1/4 h-52 rounded-xl flex gap-10 justify-center items-center flex-col text-2xl font-medium shadow-xl outline-1 outline-dotted outline-slate-800">
                    <h1 className="" >Progess Tracker</h1>
                    <Link className="w-2/3 rounded-xl text-white bg-[#df2771] h-1/4 text-sm flex justify-center items-center gap-2  ">Read more <FontAwesomeIcon icon={faArrowRight}/> </Link>
                    </div>
                </div>
            </div>
            <div className="px-20 " >
                <h1 className="py-10 text-center text-4xl font-semibold" >About Us</h1>
                <div>
                    <h3 className="text-2xl font-medium" >Why Choose Us?</h3>
                    <p className="text-md text-justify font-light mt-4">
                        At our platform, we provide a streamlined and interactive dashboard that makes mastering technical skills more accessible than ever. Whether you're a beginner or an advanced learner, our curated content is designed to cater to all levels, helping you grow at your own pace. With real-time progress tracking, personalized learning paths, and expert-led tutorials, we empower you to achieve your career goals efficiently. Choose us because we’re committed to making your learning journey not just educational, but also engaging and rewarding
                    </p>
                    <h3 className="text-2xl font-medium mt-10" >Who We Are?</h3>
                    <p className="text-md text-justify font-light mt-4">
                        We are a dedicated platform that empowers learners to master technical skills through a personalized dashboard experience. Our mission is to provide a comprehensive, user-friendly interface where you can access top-tier resources, track your progress, and achieve your learning goals efficiently. Whether you're a beginner or an advanced learner, our platform is designed to help you succeed in the ever-evolving world of technology.
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home