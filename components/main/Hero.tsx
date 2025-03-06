import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <img 
          src="/top5.gif" 
          alt="Animated GIF" 
          className='rotate-180 absolute top-[-540px] left-0 z-[1] w-full h-full object-cover'
        />
        <HeroContent /> 
    </div>
  )
}

export default Hero