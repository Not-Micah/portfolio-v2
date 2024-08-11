import React from 'react'

const Hero = () => {
  return (
      <section 
      id='about'
      className="my-28 w-full
      flex flex-col justify-start items-start gap-y-2">
        <div className="w-full flex 
        max-lg:justify-center">
          <p className='dynamic-label mb-4 px-4 py-1 
          text-primary font-nerd
          border-2 border-primary rounded-full'>Hi, my name is</p>
        </div>
        <h3 className='dynamic-heading font-bold text-black/70 w-full
        max-lg:text-center'>Micah Tid.</h3>
        <h3 className='dynamic-heading font-bold text-black/60 mb-6 w-full
        max-lg:text-center'>I build web apps.</h3>
        <p className='max-w-[60%] dynamic-text mb-12
        max-lg:max-w-[80%] max-lg:w-full max-lg:text-center max-lg:mx-auto'>I am a currently an A Level student living in Surabaya, Indonesia. In my spare time, I code websites such as these.</p>
        <div className="w-full flex max-lg:justify-center">
          <div className='bg-primary px-4 py-2 rounded-lg'>
            <a href="" className='dynamic-text text-white font-nerd'>See more</a>
          </div>
        </div>
      </section>
  )
}

export default Hero