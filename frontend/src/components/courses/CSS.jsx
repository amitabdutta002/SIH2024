import React,{useState} from 'react'

export const CSS = () => {
    const [link,setLink] = useState('');
  return (
    <>
        <div className="mt-5 w-full h-[85vh] flex justify-evenly items-center" >
            <div className="pt-5 w-1/4 h-full gap-3 flex justify-center items-center flex-col overflow-y-auto" >
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/PVBqZRAOZL8?si=KxQIYKYT3_AKIADF')
                }}  >Lecture-1</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/0e8L7yLYXJ4?si=NNoet4hY20dpfqNe')
                }}  >Lecture-2</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/ZT9zKm0_vDU?si=NqEiwVS8g2YUtkz-')
                }}  >Lecture-3</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/Fwfg0UyMOJE?si=XHLh5InHH6noE93M')
                }}  >Lecture-4</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/QyrYEyMNYBk?si=N3KxgJaq0ZpPKJRc')
                }}  >Lecture-5</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/hUydgrCN0WQ?si=Io74h-VdBvEbFE1p')
                }}  >Lecture-6</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/Bf1Vq3pGNao?si=A3dqqBe_wG9-Bv7L')
                }}  >Lecture-7</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/jo3RB0oBhXI?si=GiTeXgTTZOgevD8Z')
                }}  >Lecture-8</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/LipuoIQhko4?si=A18peS8zylvB-_c5')
                }}  >Lecture-9</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/LipuoIQhko4?si=C-HHbmTJzwPp-Fpb')
                }}  >Lecture-10</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/oJXmXzfjrBY?si=HZrq0PrZXZlQBOzt')
                }}  >Lecture-11</button>
                <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                    setLink('https://www.youtube.com/embed/izqV9kZPOMY?si=ExnhCV_XTxF56lC7')
                }}  >Lecture-12</button>
                <a href="https://drive.google.com/drive/folders/1pcS5eEfXmuimdw4xtqY-Lr19k2yMRQAo?usp=sharing ">
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
