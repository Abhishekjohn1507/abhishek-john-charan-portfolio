
import React from 'react'
import SectionHeader from '../Section/SectionHeader'
import { testimonials } from '@/data/testimonial'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'

const mappedTestimonials = testimonials.map(t => ({
  quote: t.quote,
  name: t.name,
  title: t.designation, // map 'designation' to 'title'
}));

const Testimonials = () => {
  return (
    <section id="testimonials" className=' px-4 sm:px-6 lg:px-8'>
      <SectionHeader plainText="What my" highlightText='Clients Say' />
      <div className="mt-2">
        <div className="flex flex-col items-center justify-center relative">
          <div className="h-[20rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={mappedTestimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials