import React from 'react'
import logo from "../../assets/logo.png"

function Header() {

    return (
        <div>
            <div className="flex flex-col items-center bg-[#0a0a23]">
                <img src={logo} alt="Logo" className="block mx-auto" width={70} height={50} />
                <div className='text-gray-300 flex flex-row align-middle justify-evenly gap-10'>
                    <div>Hindustan Times</div>
                    <div>The Economic Times</div>
                    <div>The Times UK</div>
                </div>
            </div>
        </div>
    )
}

export default Header
