import React from 'react'
import {Great_Vibes} from "next/font/google"
import { Cairo } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils';
import Link from 'next/link';

const cairo = Cairo({ subsets: ['latin'] })

const MrDafoe= Great_Vibes({ subsets: ["latin"] , weight: "400"}) ;

async function  Header() {
  const pages  = await getPages()
  return (
    <div className='shadow-xl'>
      <div className='container mx-auto flex justify-between items-center p-5'>
        <a href='/' className=' '>
          <div className={`text-4xl font-bold text-slate-800 logo ${MrDafoe.className} uppercase` }>Bala
            <span className={`text-2xl ${cairo.className}`}> .jpg</span>
          </div>
        </a>
        <div className='flex gap-2 md:gap-8'>
          {pages.map((page)=>(
            <Link
              className='cursor-pointer font-semibold text-blue-900 transition-all hover:text-blue-700 md:text-xl '
              key={page._id} href={`/${page.slug}`} > {page.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
