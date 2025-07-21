import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import { projects } from '@/data/projectsData'
import Project from './Project'
import { GridBackgroundDemo } from '@/components/ui/grid-background'



const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <SectionHeader plainText="My" highlightText="Projects" />
      <div className="mt-12 grid gap-8 px-3 sm:grid-cols-2 lg:grid-cols-3 sm:px-20">
        {projects.map((project, index) => (
            <Project
              key={index}
              thumbnail={project.thumbnail}
              title={project.title}
              link={project.link}
              description={project.description}
              languageIcons={project.languageIcons}
            />
          ))}
        </div>
      </section>
  )
}

export default Projects