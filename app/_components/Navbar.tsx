'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const menuTab=[
    {
        name:'Home',
        link:'/'
    },
    {
        name:'Blog',
        link:'/'
    }, 
     {
        name:'Projects',
        link:'/'
    },
    {
        name:'Contact',
        link:'/'
    },

]

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='flex flex-col sm:flex-row justify-between mt-2 mx-2 sm:mt-6 sm:mx-20 border-4 z-10 bg-gray-900 p-2 sm:p-3 rounded-4xl shadow-2xl'>
            {/* Logo and Hamburger */}
            <div className='flex items-center justify-between mb-2 sm:mb-0 w-full sm:w-auto'>
                <Link href={"/"}>
                    <Image className='rounded-2xl' src={"/music.jpeg"} alt='logo' width={40} height={40} />
                </Link>
                {/* Hamburger icon for mobile */}
                <button
                    className="sm:hidden ml-2 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>
            {/* Navigation links */}
            <div className={`flex-col sm:flex-row text-lg sm:text-xl font-bold items-center gap-2 sm:gap-4 ${menuOpen ? 'flex' : 'hidden'} sm:flex bg-gray-900 sm:bg-transparent p-4 sm:p-0 rounded-2xl sm:rounded-none`}>
                {menuTab.map((item) => (
                    <Link key={item.name} href={item.link} className="px-2 py-1 hover:underline w-full sm:w-auto text-center">
                        {item.name}
                    </Link>
                ))}
            </div>
            {/* Sign In button */}
            <div className={`flex justify-center sm:justify-end mt-2 sm:mt-0 px-2 sm:px-0 ${menuOpen ? 'flex' : 'hidden'} sm:flex`}>
                <Button>Sign In</Button>
            </div>
        </div>
    )
}

export default Navbar