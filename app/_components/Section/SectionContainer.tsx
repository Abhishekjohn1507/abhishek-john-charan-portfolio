import React from 'react'

type Props = React.PropsWithChildren<{
    id:string
}>

const SectionContainer = ({children,id}: Props) => {
  return (
<section id={id} className='w-full mt-10 relative flex justify-center z-30'>{children}</section>
)
}

export default SectionContainer