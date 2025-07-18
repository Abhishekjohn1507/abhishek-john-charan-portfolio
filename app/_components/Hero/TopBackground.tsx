import Image from 'next/image'
import React from 'react'



function TopBackground() {
    return (
        <div className='pointer-events-none absolute inset-0 w-full h-full z-0 flex items-center justify-center'>
            {/* Rocket icon - top left, responsive and popping on desktop */}
            <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14  bg-opacity-10 absolute top-4 left-8 sm:top-10 sm:left-[280px]'>
                <Image src={"/icons/rocket_icon.svg"} alt='rocket_icon'
                    width={28} height={28}
                    className='w-[28px] h-[28px] sm:w-[46px] sm:h-[46px] sm:drop-shadow-lg sm:opacity-100 opacity-80' />
            </div>
            {/* Bracket icon - bottom right, responsive and popping on desktop */}
            <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14  bg-opacity-10 absolute bottom-8 right-8 sm:bottom-40 sm:right-[180px] z-50'>
                <Image src={"/icons/bracket_icon.svg"} alt='bracket_icon'
                    width={28} height={28}
                    className='w-[28px] h-[28px] sm:w-[46px] sm:h-[46px] sm:drop-shadow-lg sm:opacity-100 opacity-80 ' />
            </div>
            {/* Github icon - bottom left, responsive and popping on desktop */}
            <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14  bg-opacity-10 absolute bottom-24 left-4 sm:bottom-[100px] sm:left-[30px]'>
                <Image src={"/icons/github_icon.svg"} alt='github_icon'
                    width={28} height={28}
                    className='w-[28px] h-[28px] sm:w-[46px] sm:h-[46px] sm:drop-shadow-lg sm:opacity-100 opacity-80' />
            </div>
            {/* Electricity icon - top right, responsive and popping on desktop */}
            <div className='flex items-center justify-center rounded-full w-11 h-11 md:w-14 md:h-14  bg-opacity-40 absolute top-24 right-4 sm:top-[60px] sm:right-[150px] opacity-90 sm:opacity-100 '>
                <Image src={"/icons/electricity_icon.svg"} alt='electricity_icon'
                    width={28} height={28}
                    className='w-[28px] h-[28px] sm:w-[46px] sm:h-[46px] sm:drop-shadow-lg' />
            </div>
            {/* Highlight background image, responsive */}
            <Image src={"/icons/top_highlight.svg"} alt='bg' width={350} height={340} className='absolute -top-4 right-0 sm:w-[900px] sm:h-[977px] sm:-top-[52px] sm:right-[27px] w-[350px] h-[340px]' />
        </div>
    )
}

export default TopBackground