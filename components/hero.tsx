import React from 'react'

function Hero() {
  return (
    <div className='bg-gray-200 z-[-1]'>
      <div className='min-h-screen flex justify-center items-center flex-col gap-6 py-[80px]'>
        <div className='text-[80px] md:text-[160px] lg:text-[240px]
                        uppercase text-[#2f394e]
                        font-semibold
                        text-center'>hello there...</div>
        <p className='text-[#2f394e] leading-[40px] text-[40px] md:text-[60px] font-thin max-w-[1200px] text-center mx-auto md:leading-[70px]'>As a professional photographer, Bala brings a wealth of experience and <span className='marked' >expertise</span> to every project. With a passion for capturing the beauty and essence of their subjects, Bala</p>
      </div>
    </div>
  )
}

export default Hero
