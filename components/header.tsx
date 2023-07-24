import React from 'react'
import {Great_Vibes} from "next/font/google"
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['latin'] })

const MrDafoe= Great_Vibes({ subsets: ["latin"] , weight: "400"}) ;

function Header() {
  return (
    <div className='shadow-xl'>
      <a href='/' className='container mx-auto flex justify-between items-center p-5 '>
        <div className={`text-4xl font-bold text-slate-800 logo ${MrDafoe.className} uppercase` }>Bala
          <span className={`text-2xl ${cairo.className}`}> .jpg</span>
        </div>
        <nav>
          <ul className='flex gap-2 md:gap-8'>
            <li className='cursor-pointer font-semibold text-blue-900 transition-all hover:text-blue-700 md:text-xl '>Contact Us</li>
            <li className='cursor-pointer font-semibold text-blue-900 transition-all hover:text-blue-700 md:text-xl  '>About My</li>
          </ul>
        </nav>
      </a>
    </div>
  )
}

export default Header
