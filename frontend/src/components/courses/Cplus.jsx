import React,{useState} from 'react'

export const Cplus = () => {
    const [link,setLink] = useState('')
  return (
    <>
    <div className="w-full h-[85vh] flex justify-evenly items-center" >
        <div className="w-1/4 h-full gap-3 flex justify-center items-center flex-col overflow-y-auto" >
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/cnT1oW5_ePM?si=dAPNVuiK2L4Az0XC')
            }}  >Lecture-1</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/7dPdMtBX1d8?si=X3Ll0z9NQytc_-i5')
            }}  >Lecture-2</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/cyB3HNlQyjY?si=gAqDJYn_dZxJqE4R')
            }}  >Lecture-3</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/IlIn_D1RT7M?si=HqasMpqCI6v3ReNX')
            }}  >Lecture-4</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/Stf7KBiA1vs?si=_oPv90Or4haSqqWV')
            }}  >Lecture-5</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/G80-j_xnE_8?si=lw_s8WyhNxM_izia')
            }}  >Lecture-6</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/JBgZxnAj4hg?si=tlp1iAk24NV5HFjB')
            }}  >Lecture-7</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/LfgAOZ1kKMw?si=HofH0pwlJ4F0g2KW')
            }}  >Lecture-8</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/k9OlCJFy5yo?si=FNC0YdmaHNFHYAPX')
            }}  >Lecture-9</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/QIyugGzih4k?si=NbosilEhWvm4TzVg')
            }}  >Lecture-10</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/6TzUHrAXytM?si=1Vt-mLzt4fFlHt21')
            }}  >Lecture-11</button>
            <button class="flex justify-center items-center bg-[#DF2771] text-xl font-semibold py-5 h-10 w-full rounded-lg text-white " onClick={(e)=>{
                setLink('https://www.youtube.com/embed/83KtncYgHYQ?si=EVXY4rgLYLeWyc7f')
            }}  >Lecture-12</button>
            <a href="https://drive.google.com/drive/folders/1ZOTB0crAly76hH2Gd2EWfd0sryFbBXOg?usp=sharing">
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
