import React from 'react'

const Contact = () => {
  return (
    <div className='mt-56 mb-4 flex flex-col justify-center items-center gap-y-4
    max-w-[600px] mx-auto'>
        <h3 className='text-center dynamic-subheading font-semibold text-primary'>Want to chat?</h3>
        <p className='text-center dynamic-text text-gray-600
        mx-8'>I&apos;m open to new opportunities and collaboration so send me a message and I&apos;ll get back to you as soon as possible! Click on any of the icons at the side of the screen!</p>
        <p className='mt-28 dynamic-label font-nerd text-gray-400
        text-center'>Built by Micah Tid <br /> with React, NextJS and Tailwind CSS.</p>
    </div>
  )
}

export default Contact