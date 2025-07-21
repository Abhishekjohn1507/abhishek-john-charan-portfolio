import { skills } from '@/data/skillsData'
import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import Skill from './Skill';
import Image from 'next/image';


const Skills = () => {
  return (
    <SectionContainer  id='skills'>
      
      <div className=''>
      <div className='section-contents mx-6 md:mx-28 mb-2.5 justify-center '>
        <SectionHeader plainText="💻This is my " highlightText='Tech Stack'></SectionHeader>
      </div>
      <div className=' max-w-7xl  px-8 py-7 flex flex-wrap bg-black md:bg-gray-950  rounded-4xl  md:flex-row md:card justify-center items-center gap-5 md:gap-8 '>
        {skills.map((skill, id) => (
          <Skill key={id} name={skill.name} icon={skill.icon} />
        ))}

      </div>
      </div>

      <>
      <Image src={'/tech_stack_grid_dark.svg'} alt='bg-dec' width={369} height={373}
      className='hidden dark:md:block -z-10 absolute left-58 -top-13'/>
<Image src={'/tech_stack_grid_dark.svg'} alt='bg-dec' width={369} height={373}
      className=' hidden dark:md:block -z-10 absolute left-128 -top-13'/>

      </>
    </SectionContainer>

  )
}

export default Skills