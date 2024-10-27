import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
const About = () => {
  return (
    <div>
        <div className='w-screen h-[430px] bg-zinc-900 '>
          <div className=' flex items-center justify-center w-[420px] h-[0.5px] bg-slate-400 rounded ml-64'></div>
          <h2 className='flex justify-center text-gray-400  mt-4 font-bold font-mono text-lg'>ABOUT</h2>
           <div className='flex  ml-32 mt-8'> 
            <div className='w-44 h-44 rounded-full bg-slate-400 ml-0 overflow-hidden'>
              <Image src="/images/aboutimg.jpg" width={100} height={100} alt='about me' className='w-48 h-44 rounded-r-md'></Image>
            </div>
            <div className='w-96 h-52 ml-20  pt-2'>
              <p className='text-neutral-100 font-mono font-thin text-xs'>I'm <span className='text-gray-400 font-bold'>BARIRA MUBASHIR</span>, a versatile Developer and Marketer with a passion for blending technical expertise with strategic marketing. With a unique skill set in coding and digital marketing, I create solutions that are both technically robust and effectively positioned to engage target audiences. Whether building optimized web applications or crafting data-driven marketing strategies, I’m driven by a commitment to innovation and measurable impact. Let’s connect to explore how I can bring value to your project!</p>
              <button type="button" className="py-0.5 px-5 mt-3 text-sm font-medium text-gray-600  rounded-sm border border-gray-600  hover:text-white focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-white dark:border-gray-600 dark:hovertext-white ">Contact</button>

            </div>
            </div>   
       </div>
    </div>
  )
}

export default About;