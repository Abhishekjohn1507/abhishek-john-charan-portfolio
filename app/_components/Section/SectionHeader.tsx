import React from 'react'

type Props = {
    plainText:string;
    highlightText:string;
}

 const SectionHeader = ({plainText,highlightText}: Props) => {
  return (
<h2 className='  text-2xl  md:text-4xl px-1 text-center mb-3 '>
    {plainText}{"  "}<span className='highlight px-2 whitespace-nowrap'>{highlightText}</span>
</h2>
  )
}

export default SectionHeader