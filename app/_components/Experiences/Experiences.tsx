import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import { experience } from '@/data/experiences'
import Experience from './Experience'
import Image from 'next/image'

const Experiences = () => {
  return (
    <SectionContainer id='experiences'>
      <div className='section-contents mb-16 md:mb-11 relative'>
        <SectionHeader plainText='💼 My Prior' highlightText='Work Experience'/>
        <div className='w-full px-6 md:px-12 flex flex-col items-center gap-5'>
          {experience.map((experience, id) => (
            <Experience
              key={id}
              id={id}
              image={experience.image}
              company={experience.company}
              role={experience.role}
              description={experience.description}
              date={experience.date}
            />
          ))}
        </div>
        {/* Decorative Icons */}
        <div className='circle-icon h-14 w-14 absolute top-18 right-1.5 md:top-40 md:right-39 -z-10'>
          <Image src={"/icons/bracket_icon.svg"} alt='bracket' width={23} height={23}/>
        </div>
        <div className='circle-icon h-14 w-14 absolute bottom-0 left-1.5 md:left-48 -z-10'>
          <Image src={"/icons/electricity_icon.svg"} alt='bracket' width={23} height={23}/>
        </div>
      </div>
    </SectionContainer>
  )
}

export default Experiences