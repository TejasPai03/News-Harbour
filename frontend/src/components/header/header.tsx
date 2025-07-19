import React from 'react'
import logo from "../../assets/logo.png"

function Header() {

    return (
            <div className=" sticky top-0 z-10 pt-2 flex flex-col items-center bg-[#0a0a23] gap-1">
                {/* High effort News Harbour logo that was developed painstakingly */}
                <img src={logo} alt="Logo" className="block mx-auto" width={70} height={50} />
                
                {/* The legendary navbar (that doesn't do anything for now) */}
                <div className='text-xs sm:text-xl text-gray-300 flex flex-row align-middle justify-evenly gap-10 mb-1 mx-4 '>
                    <div>Hindustan Times</div>
                    <div>The Economic Times</div>
                    <div>The Times UK</div>
                </div>
            </div>
    )
}

export default Header
