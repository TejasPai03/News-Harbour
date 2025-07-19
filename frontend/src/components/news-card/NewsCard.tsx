import React from 'react'
import logo from "../../assets/logo.png"


function NewsCard() {
    return (
        // TODO: change each entry in the news card to those from spider outputs
        <div className="border-1 rounded-xl border-[#f0f2f2] h-80 w-64 mx-2 sm:h-72 sm:w-52 xs:h-44 xs:w-32 bg-[#3a3a4f] hover:bg-[white] transition-colors duration-300 group">
            <div className='flex flex-col'>
                {/* News thumbnail image */}
                <img src={logo} alt="Thumbnail" className="w-36 h-24 mx-auto my-4" />
                
                {/* News headline */}
                <div className='text-white font-bold group-hover:text-black line-clamp-4 mx-2  overflow-ellipsis'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere rem est quam sit ullam commodi beatae consequatur, maxime natus tempore maiores recusandae praesentium quia veritatis distinctio, dolorum labore eligendi necessitatibus reprehenderit suscipit repudiandae hic aliquid in! Sint, autem incidunt! Animi aperiam magni officia possimus fuga mollitia laboriosam odit dolorem quaerat qui, vel sint! In nostrum sit quos dolor unde corporis facere iure dolores itaque impedit, nihil sapiente, repellat similique voluptatum est eos quidem eum dolore explicabo assumenda. Qui, quo.
                </div>

                {/* Date/time */}
                <div className='text-[#a3a4b5] text-sm pb-1 pt-1 mx-2 group-hover:text-black'>
                    19th July 2025
                </div>

                {/* Source */}
                <div className="text-white mr-2 self-end group-hover:text-black">
                    Daily Bugle
                </div>
            </div>
        </div>
    )
}

export default NewsCard
