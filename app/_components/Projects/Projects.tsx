import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import { projects } from '@/data/projectsData'
import Project from './Project'
import { GridBackgroundDemo } from '@/components/ui/grid-background'



const Projects = () => {
  return (
    <SectionContainer id='projects'>
      <div className='section-contents mx-6 md:mx-16 '>
        <SectionHeader plainText="😎 Some of my" highlightText='Best Works' />
        <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5 md:w-5xl 
        '>
         
          {projects.map((project, id) => (
            <Project
              key={id}
              thumbnail={project.thumbnail}
              title={project.title}
              link={project.link}
              description={project.description}
              languageIcons={project.languageIcons}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

export default Projects