
import React from 'react'
import SectionContainer from '../Section/SectionContainer'
import SectionHeader from '../Section/SectionHeader'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { testimonials } from '@/data/testimonial'



const Testimonials = () => {
  return (
<SectionContainer id='testimonials'>
    <div className='section-contents'>
        <SectionHeader plainText='🔊 Check out these' highlightText='Testimonials'/>
        <div className='w-full overflow-x-clip'>
            <div className=''>
<AnimatedTestimonials testimonials={testimonials}/>
            </div>
        </div>
    </div>

</SectionContainer>
  )
}

export default Testimonials