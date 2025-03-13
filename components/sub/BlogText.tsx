"use client"
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const BlogText = () => {
  return (
    <div className='w-full pt-10 h-auto flex flex-col items-center justify-center'>
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
        Let&apos;s Connect & Collaborate!
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
      >
       <h1 className="text-[42px] md:text-[50px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 border-2 border-dotted border-cyan-500 inline-block px-4 py-1 shadow-[0_0_15px_rgba(0,255,255,0.6)]">
          Blog & Article
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='thefont text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
      >
        Feel free to reach out for collaborations, inquiries, or just a chat.
      </motion.div>
</div>

  )
}

export default BlogText