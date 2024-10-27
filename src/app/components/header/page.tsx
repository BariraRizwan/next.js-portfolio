import React from 'react'
import Link from 'next/link';
import About from '../about/page';
import Image from 'next/image';

function Header() {
  return (
    <div className="flex bg-zinc-950  shadow-gray-300">
         <div className='logo pl-9 bg-zinc-950 ' >
           <Image src="/images/logo.jpeg" width={100} height={80} alt='logo'  className='pl-2.5 pt-1 w-11 h-7 cursor-pointer' ></Image> 
         </div>
         <div className=" bg-zinc-950 text-slate-50	w-96 h-8 flex justify-items-end ml-80 gap-6 pt-1 pl-28 text-base font-thin font-mono ">
           <Link href="/" className='hover:text-slate-400'>Home</Link>
           <Link href="/components/about" className= 'bg-zinc-950 hover:text-slate-400'>About</Link>
           <Link href="/components/projects" className='hover:text-slate-400'>Projects</Link>
           <Link href="/" className='hover:text-slate-400'>Contact</Link>
         </div>
    </div>
  )
}

export default Header;