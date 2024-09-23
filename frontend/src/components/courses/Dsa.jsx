import React,{useState} from 'react'

export const Dsa = () => {
    const [link,setLink] = useState('')
  return (
    <>
        <div className="w-full h-[85vh] flex justify-evenly items-center" >
            <div className="w-1/4 h-full gap-3 flex justify-center items-center flex-col overflow-y-auto" >
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/g3WDfu14rpk?si=0xD0pidFRiHcjY4u')
                }}  >Lecture-1</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/Xi1fx9QidWE?si=xUayf_brW9qXDZ10')
                }}  >Lecture-2</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/oTybGS6YTAo?si=QGvCcbBO5g3zL6QH')
                }}  >Lecture-3</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/Oyw7v6v8Trc?si=s9-ru2E7qS3tHpA_')
                }}  >Lecture-4</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/qqRDHzPli3o?si=G95P4v1qUNec1wnL')
                }}  >Lecture-5</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/ZnfOBRS7KCg?si=7D-ou7inZY732BGs')
                }}  >Lecture-6</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/9AcNYm0sQzw?si=VdjqV_2BNaTPFaO6')
                }}  >Lecture-7</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/E98I2pky-hQ?si=UphBTl4YzDBjYZ-Z')
                }}  >Lecture-8</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/UrmbrygUyzU?si=Lhku2Yj8_iY4ifMI')
                }}  >Lecture-9</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/-VOO76LOCv4?si=ioBQVTsDRt3b8kEU')
                }}  >Lecture-10</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/dDw99mE6EbQ?si=gf2gQ8uRr0BbugSq')
                }}  >Lecture-11</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/SuNnd0WRY44?si=Xf2ArVRBrrZqxy9W')
                }}  >Lecture-12</button>
                <a href="https://drive.google.com/drive/folders/1bJYqgZokQ2ldmW0fJM9yQu9nDFUzT50T?usp=sharing ">
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
