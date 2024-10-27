import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Herosection = () => {
  return (
    <div>
        <main className="mainsec w-screen h-screen bg-black flex justify-center ">
       <div className=" w-[295px] max-h-960 mt-10 ml-16">
        <h1 className="font-mono font-medium text-neutral-100 pt-28 bg-black">Hey!</h1>
        <h1 className="font-mono font-medium text-neutral-100  pb-2 bg-black">It's <span className="font-bold text-slate-400 bg-black">BARIRA MUBASHIR</span></h1>
         <p className="text-neutral-300 font-thin leading-4 font-mono pt-[1px] -tracking-2 text-xs">I'm frontend developer based in Pakistan, I'll help you
            build beautiful websites your users will love.
          </p>
          <button type="button" className="py-0.5 px-5 mt-3 text-sm font-medium text-gray-600  rounded-sm border border-gray-600  hover:text-white focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-white dark:border-gray-600 dark:hovertext-white "><Link href="hhttps://github.com/BariraRizwan?tab=repositories">View Projects</Link></button>

       </div>

       <div className=" w-40 h-40 rounded-full border-2 border-gray-600 relative top-32 hover:{border-white-200}">
      <Image src='/images/its.jpeg' alt='hi there' width={100} height={100} className="absolute right-8 bottom-6 h-38 w-38 bg-slate-200  " ></Image>
       </div>

        </main>
    </div>
  )
}
export default Herosection;