import Image from 'next/image';
import React from 'react'

type Props = {
    id:number;
    image:string;
    role:string;
    company:string;
    date:string;
    description:string;
}

const Experience = ({image,role,date,description,company}:Props) => {
  return (
    <div className='card flex flex-col items-stretch w-full max-w-screen-lg px-6 py-7 md:px-8 gap-3'>
        <div className='flex justify-between items-start'>
            <div className='flex items-center gap-4'>
                <Image src={image} alt={company} width={48} height={48} className='rounded-md' />
                <div>
                    <h3 className='font-bold text-lg'>{role}</h3>
                    <p className='text-gray-400'>{company}</p>
                </div>
            </div>
            <p className='text-gray-400'>{date}</p>
        </div>
        <p className='mt-3 text-gray-300'>{description}</p>
    </div>
  )
}

export default Experience