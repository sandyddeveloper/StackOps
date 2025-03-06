import React from 'react'
import HeroContent from '../sub/HeroContent'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <Image 
          src="/top5.gif" 
          width={1200}
          height={750}
          alt="Animated GIF" 
          className='rotate-180 absolute top-[-540px] left-0 z-[1] w-full h-full object-cover'
        />
        <HeroContent /> 
    </div>
  )
}

export default Hero