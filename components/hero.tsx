import React from 'react'

function Hero() {
  return (
    <div className='bg-gray-200 z-[-1]'>
      <div className='min-h-screen'>
        <div className='text-[80px] md:text-[160px] lg:text-[260px]
                        uppercase pt-[100px] text-[#2f394e]
                        font-semibold
                        text-center'>helo there...</div>
        <p className='text-[#2f394e] text-[80px] font-thin w-[1200px] text-center mx-auto leading-[80px] '>A wonderful serenity has taken possession of my entire soul, like these sweet <span className='marked' >mornings</span> of spring which I enjoy with my whole heart.</p>
      </div>
    </div>
  )
}

export default Hero
