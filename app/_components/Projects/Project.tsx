import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type Props = {
  thumbnail:string;
  title:string;
  link:{
    url:string;
    label:string;
  };
  description:string;
  languageIcons:string[]
}

const Project = ({thumbnail,title,link,description,languageIcons}: Props) => {
  return (
    <div className='card flex flex-col items-stretch w-full  p-5 md:p-5 rounded-4xl md:w-full shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-[#181818]'>
      <Image src={thumbnail} alt={` thumbnail ${title}`} width={350} height={230} className='w-full  h-60 object-cover rounded-2xl'/>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
          <h3 className='font-semibold text-xl md:text-2xl'>{title}</h3>
          <Link className='flex px-1.5 py-0.5 gap-1 bg-[#b9b9b9] bg-opacity-[24] rounded-xl text-xs' href={link.url}>{link.label}</Link>
        </div>
        <p className='line-clamp-2 text-sm md:text-base'>{description}</p>
        <div className='flex flex-row gap-3'>
          {languageIcons.map((icon,iconId)=>(
            <Image src={icon} alt={`${iconId}`} width={25} height={25} key={iconId}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project