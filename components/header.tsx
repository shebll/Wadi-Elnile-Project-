import React from 'react'

function Header() {
  return (
    <div className='shadow-xl'>
      <div className='container mx-auto flex justify-between items-center p-5'>
        <div className='text-6xl font-bold text-slate-800 logo '>MR ALI</div>
        <nav>
          <ul className='flex gap-8'>
            <li className='cursor-pointer font-semibold text-blue-900 transition-all hover:text-blue-700 text-xl'>Contact Us</li>
            <li className='cursor-pointer font-semibold text-blue-900 transition-all hover:text-blue-700 text-xl'>About My</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
