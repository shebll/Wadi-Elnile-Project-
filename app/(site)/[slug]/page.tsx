import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import React from 'react'

type props ={
  params : {slug:string}
}
async function page({params} : props)  {
  const slug= params.slug ;
  const page = await getPage(slug) ;
  return (
    <div className='container flex bg-slate-800 text-white mx-auto text-6xl p-16'>
      <PortableText value={page.content}></PortableText>
    </div>
  )
}

export default page
