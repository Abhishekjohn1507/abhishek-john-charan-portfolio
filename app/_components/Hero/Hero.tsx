import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import TopBackground from './TopBackground';
const words = `I'm very curious for learning new technologies`;
function Hero() {
  return (
    <section id="home" className='relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden'>
      <TopBackground />
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black">
        
      </div>
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 gap-2 items-center justify-items-center w-full max-w-7xl mx-auto py-6 sm:py-15">
        {/* On mobile, image on top, text below. On desktop, side by side. */}
        <div className="flex justify-center col-start-1 row-start-1 sm:col-start-auto sm:row-start-auto relative w-60 h-80 sm:w-[450px] sm:h-[650px]">
          {/* Light purple image (bottom layer) */}
          <Image
            src={'/profile_dark_purple.png'}
            alt='img'
            width={170}
            height={170}
            className='absolute left-4 top-4 w-52 h-72 sm:w-[500px] sm:h-[650px] rounded-3xl object-center z-10'
          />
          {/* Dark purple image (top layer, slightly offset) */}
          <Image
            src={'/profile_light_purple.png'}
            alt='img'
            width={170}
            height={170}
            className='absolute left-0 top-0 w-52 h-72 sm:w-[500px] sm:h-[650px] rounded-3xl object-center z-20'
          />
           <Image
            src={'/hero.jpg'}
            alt='img'
            width={170}
            height={170}
            className='absolute left-5 top-6 w-48 h-65 sm:w-[400px] sm:h-[600px] rounded-3xl  z-30 animate-collapsible-up'
          />
        </div>
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left col-start-1 row-start-2 sm:col-start-auto sm:row-start-auto">
          <h1 className="text-2xl sm:text-6xl mt-3 text-gray-300">
            <span>👋</span>
            I am Abhishek John
          </h1>
          <div className='mt-4 flex flex-col  sm:flex-row items-center sm:items-start  '>
            <span className='bg-purple-400 rounded-3xl text-gray-100 mt-2 text-2xl sm:text-3xl font-bold p-2 text-right mx-0 sm:mx-1 animate-pulse'>Web Dev</span>
            <span className='text-4xl hidden  sm:text-5xl font-bold  sm:block'>,</span>
            <span className='bg-green-400 rounded-3xl text-gray-100 text-2xl mt-2 sm:text-3xl font-bold p-2 animate-pulse '>Cloud Practitioner</span>
          </div>
          <TextGenerateEffect words={words} />
        </div>
      </div>
    </section>
  )
}

export default Hero