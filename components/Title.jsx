import Image from 'next/image'
import React from 'react'

const Title = ({ title, subtitle }) => {
  return (
    <div className='relative w-full flex-center flex-col text-center'>      
      <span className="text-2xl text-secondary font-[Mullish]">{subtitle}</span>
      <h2 className="text-5xl">{title}</h2>
      <hr className='w-16 mt-6' />
    </div>
  )
}

export default Title