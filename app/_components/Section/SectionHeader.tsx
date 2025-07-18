import { h2 } from 'motion/react-client';
import React from 'react'

type Props = {
    plainText:string;
    highlightText:string;
}

 const SectionHeader = ({plainText,highlightText}: Props) => {
  return (
<h2 className='  text-2xl md:text-4xl px-3 text-center mb-3 '>
    {plainText}{" "}<span className='highlight px-3 whitespace-nowrap  '>{highlightText}</span>
</h2>
  )
}

export default SectionHeader