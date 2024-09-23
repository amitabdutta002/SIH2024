import React, { useState } from "react";

function Html(){
    const [link,setLink] = useState('')

    return(
        <>
        <div className="mt-5 w-full h-[85vh] flex justify-evenly items-center" >
            <div className="w-1/4 h-full gap-3 pt-5 flex justify-center items-center flex-col overflow-y-auto" >
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('http://www.youtube.com/embed/Y1BlT4_c_SU?si=7zkjZE0ayI8pp9jh')
                }}  >Lecture-1</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/cZCq8lQ-vZ0?si=OGgc-cnTxl1fg36H')
                }}  >Lecture-2</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/IJWcX2EDAKg?si=aEvE3EUotUkx5Zbh')
                }}  >Lecture-3</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/MnaKa7igX7k?si=fbhbKfkuFZDFcRPH')
                }}  >Lecture-4</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/mNRzWMH5xK0?si=f8F1DZdP24Evl5U3')
                }}  >Lecture-5</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/XxZPrn1VFTc?si=cz1OMWjcMEuzmjdU')
                }}  >Lecture-6</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/UWdepvkLE8U?si=eo0ftHoLlmyupzg3')
                }}  >Lecture-7</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/OwC4xNWihoM?si=1f39sGr08M0LskoQ')
                }}  >Lecture-8</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/g6xsNHnAmlE?si=5zhDqF0E73kvRYMF')
                }}  >Lecture-9</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/f8pAb3IuECk?si=dtDJ7MNhtces1p1I')
                }}  >Lecture-10</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/HeQvQEiGMKk?si=RWZc3KPS82UOQbHW')
                }}  >Lecture-11</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/xkF-cKpzREU?si=jOJV3FDI42cYZ_4z')
                }}  >Lecture-12</button>
                <a href="https://drive.google.com/drive/folders/1pcS5eEfXmuimdw4xtqY-Lr19k2yMRQAo?usp=sharing ">
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " >Resources</button>
                </a>            </div>
            <div>
                <iframe id="video" width="900" height="506" src={link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </>
    )
}

export default Html