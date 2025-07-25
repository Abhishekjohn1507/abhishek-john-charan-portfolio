import React from 'react'
import SectionHeader from '../Section/SectionHeader'
import { testimonials } from '@/data/testimonial'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards' // Assuming this is the correct path
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const mappedTestimonials = testimonials.map(t => ({
  quote: t.quote,
  name: t.name,
  title: t.designation,
  src: t.src, // map 'designation' to 'title'
}));

const Testimonials = () => {
  return (
    <section id="testimonials" className='px-2 sm:px-4 lg:px-8'> {/* px-2 adds 0.5rem padding on each side for mobile */}
      <SectionHeader plainText="What my" highlightText="Clients Say" />
      <div className="mt-2">
        {/* Mobile: show animated-testimonials */}
        <div className="flex sm:hidden flex-col items-center justify-center relative">
          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
        {/* Tablet and up: show InfiniteMovingCards */}
        <div className="hidden sm:flex flex-col items-center justify-center relative">
          <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-y-auto p-1 sm:p-0 max-h-full sm:h-[20rem]">
            <InfiniteMovingCards
              items={mappedTestimonials}
              direction="right"
              speed="slow"
              pauseOnHover={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials