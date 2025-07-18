import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import TopBackground from './Hero/TopBackground';
const words = `A Web Dev & Cloud Practitioner`;
function Hero() {
  return (

    <div className="relative flex flex-col sm:flex-row h-auto sm:h-[50rem] w-full items-center justify-center bg-white dark:bg-black py-8 sm:py-0">
      <TopBackground />
      <div

        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )} />

      {/* Radial gradient for the container to give a faded look */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>


      <div

        className="flex flex-col-reverse sm:flex-row-reverse items-center justify-center gap-4 relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-4 sm:py-8 text-xl sm:text-7xl font-bold text-transparent">
        
        <div className="flex flex-col items-center justify-center sm:items-center">
          <h1 className="text-3xl sm:text-7xl">          
            I am Abhishek
                 </h1>

          <TextGenerateEffect words={words}  />
        </div>
        <Image
          src={'/pgor.jpg'}
          alt='img'
          width={140}
          height={140}
          className='rounded-3xl mb-4 sm:mb-0 sm:mr-20 w-32 h-32 sm:w-[400px] sm:h-[500px] object-cover'
        />
      </div>


    </div>
  )
}

export default Hero