import Image from 'next/image';
import React from 'react'

type Props = {
  name:string;
  icon:string
}

const Skill = ({name,icon}: Props) => {
  return (
<div className='relative flex gap-2 p-2 border-primary border rounded-lg h-11'>
      <Image src={icon} alt={`${name} icon`} width={20} height={20}/>
      <p className='text-lg'>{name}</p>
    </div>  )
}

export default Skill