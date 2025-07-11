import React from 'react'
import logo from "../../assets/logo.png"


function NewsCard() {
    return (
        <div className="border-1 rounded-xl border-[#f0f2f2] h-72 w-64 mx-2 sm:h-60 sm:w-52 xs:h-40 xs:w-32 bg-[#3a3a4f] hover:bg-[white] transition-colors duration-300 group">
            <div className='flex flex-col'>
                <img src={logo} alt="Thumbnail" className="w-36 h-24 mx-auto my-4" />
                <div className='text-white font-bold group-hover:text-black mx-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, at?</div>
            </div>
        </div>
    )
}

export default NewsCard
