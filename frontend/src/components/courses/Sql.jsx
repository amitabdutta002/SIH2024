import React,{useState} from 'react'

export const Sql = () => {
    const [link,setLink] = useState('')
  return (
    <>
        <div className="w-full h-[85vh] flex justify-evenly items-center" >
            <div className="w-1/4 h-full gap-3 flex justify-center items-center flex-col overflow-y-auto" >
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/yVcRQXLMzCE?si=ca1HEtoy5TJvG5j8')
                }}  >Lecture-1</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/QbNK4TMbNi8?si=unMlLlawNX5l1a1C')
                }}  >Lecture-2</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/7_hEe6xaCME?si=gbDZvDyDxCgmDSRU')
                }}  >Lecture-3</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/6eiGB5f_4EQ?si=b3GBBK38osYnhF7m')
                }}  >Lecture-4</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/AdmLG2xhdvM?si=uQoBx4u6DaXz_Cec')
                }}  >Lecture-5</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/WjkipsIS_2I?si=WAdkJ9OR9lqvkPjg')
                }}  >Lecture-6</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/u0H-5PP_sAo?si=8tDzYjytPl1hGmnk')
                }}  >Lecture-7</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/U4qVwWni1cE?si=Sp6x6j_i3PtQZYSa')
                }}  >Lecture-8</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/t77PhN12ObI?si=rBt2OP6-ch4aw7wq')
                }}  >Lecture-9</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/ByL3P0esycY?si=nfADvuty39FLyHAI')
                }}  >Lecture-10</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/eVNtR6ZN9Uk?si=NvKLd093QmhNnA6_')
                }}  >Lecture-11</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/9bvGD5GSsMk?si=4q75J9iQ2JD2O37U')
                }}  >Lecture-12</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " >Resources</button>
            </div>
            <div>
                <iframe id="video" width="900" height="506" src={link} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
    </>
  )
}
