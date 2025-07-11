import React from 'react'
import logo from "../../assets/logo.png"

function Header() {

    return (
        <div>
            <div className="pt-2 flex flex-col items-center bg-[#0a0a23] gap-1">
                <img src={logo} alt="Logo" className="block mx-auto" width={70} height={50} />
                <div className='text-xs sm:text-xl text-gray-300 flex flex-row align-middle justify-evenly gap-10 mb-1 mx-4 '>
                    <div>Hindustan Times</div>
                    <div>The Economic Times</div>
                    <div>The Times UK</div>
                </div>
            </div>
        </div>
    )
}

export default Header
