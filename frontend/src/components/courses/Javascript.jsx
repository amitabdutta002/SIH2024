import React,{useState} from 'react'

export const Javascript = () => {
    const [link,setLink] = useState('')
  return (
    <>
        <div className="w-full h-[85vh] flex justify-evenly items-center" >
            <div className="w-1/4 h-full gap-3 flex justify-center items-center flex-col overflow-y-auto" >
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/Hr5iLG7sUa0?si=WWvs5OP0wfviPyur')
                }}  >Lecture-1</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/cvoLc3deAdQ?si=TrxFdr2dSXbZ0qGF')
                }}  >Lecture-2</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/-GoKoR6aLcY?si=943ziRNu1dqZoR6X')
                }}  >Lecture-3</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/yY0bKZNYmJs?si=85w6IY3UAbJkC_GZ')
                }}  >Lecture-4</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/-9knnv97wSc?si=9j4j4AArvuTUCH-t')
                }}  >Lecture-5</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/X7hDBhd_L5U?si=K2csNUHJVwV6unwV')
                }}  >Lecture-6</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/N9el4APFtAo?si=tjan2hCfkejmY7pa')
                }}  >Lecture-7</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/giP2uXMlv4c?si=FT4b-XHCDlZhFovm')
                }}  >Lecture-8</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/suMvZWjjKbo?si=fi259RM6UBTnw9Sn')
                }}  >Lecture-9</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/7gwc-1czolw?si=9qg4_aqVHtlX6Tdk')
                }}  >Lecture-10</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/fozwNnFunlo?si=hXHYZaugCVxyq4Ua')
                }}  >Lecture-11</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/_KqpeDc47Ro?si=Gwjosm0GvgybEmuD')
                }}  >Lecture-12</button>
                <a href="https://drive.google.com/drive/folders/1RD1qN2-QHvC8r9Xj-xQIv-oxtNQscMJK?usp=sharing">
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " >Resources</button>
                </a>
            </div>
            <div>
                <iframe id="video" width="900" height="506" src={link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </>
  )
}
