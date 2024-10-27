import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  return (

    <div >
      <div className='bg-zinc-950'>          
        <div className=' flex items-center justify-center w-[420px] h-[0.5px] bg-slate-400 rounded ml-64'></div>
      </div>
          <h2 className='flex justify-center bg-zinc-950 text-gray-400  mt-0 font-bold font-mono text-lg pt-3' >Projects</h2>
        <div className='flex  bg-zinc-950 w-screen h-[360px] justify-evenly'>
          <div className='w-44 h-56 border-gray-600 my-14 border-2 hover:border-gray-200'>
             <Image src="/images/cal.jpg" alt='calculator' width={100} height={100} className='w-60 h-38'></Image>
             <h4 className='justify-center text-gray-400  mt-[0.8px] font-medium font-mono text-base pl-9 pb-1'> CALCULATOR </h4>
             <p className='text-neutral-300 font-thin leading-3 font-mono pt-[2px] tracking-tighter text-xs pl-2 pb-10 '> <span className='pl-5'>A simple,reliable</span> <span className='pl-2'>calculator app for quick</span> <span className='pl-3'> everyday calculations.</span> <span className='pl-3'>Designed for ease and</span> <span className='pl-12'>accuracy.</span></p>
             <button type="button" className="py-2.5 px-5 ml-7 text-sm font-medium text-gray-600  rounded-sm border border-gray-600  hover:text-white focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-white dark:border-gray-600 dark:hovertext-white "><Link href="https://github.com/BariraRizwan/Simple_Calculator">View Project</Link></button>
          </div>
          <div className='w-44 h-56 border-gray-600 my-14 border-2 hover:border-gray-200'>
             <Image src="/images/numberguessedt.jpg" alt='calculator' width={100} height={100} className='w-60 h-[120px]'></Image>
             <h4 className=' text-gray-400  mt-[0.8px] font-medium font-mono text-base pl-5 py-1 tracking-tighter leading-3'> NUMBER GUESSING <span className='pl-12'>GAME</span> </h4>
             <p className='text-neutral-300 font-thin leading-3 font-mono pt-[2px] tracking-tighter text-xs pl-2 pb-9 '> <span className='pl-4'>Explore the thrill of</span> <span className='pl-4'> guessing in this fun </span>  <span className='pl-[0.3px]'> project! Sharpen your logic </span> as you hunt for the hidden <span className='pl-[0.2px]'> number and beat the game.</span></p>
             <button type="button"  className="py-2.5 px-5 ml-7 text-sm font-medium text-gray-600  rounded-sm border border-gray-600  hover:text-white focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-white dark:border-gray-600 dark:hovertext-white "><Link href="https://github.com/BariraRizwan/number_game">View Project</Link></button>
          </div>
          <div className='w-44 h-56 border-gray-600 my-14 border-2 hover:border-gray-200'>
            <Image src="/images/word.jpg" alt='calculator' width={100} height={100} className='w-60 h-[120px]'></Image>
            <h4 className=' text-gray-400  mt-[0.8px] font-medium font-mono text-base pl-9 py-1 tracking-tighter leading-3'> WORD COUNTER </h4>
            <p className='text-neutral-300 font-thin leading-3 font-mono pt-[2px] tracking-tighter text-xs pl-2  pb-9'> <span className='pl-2'>Count words effortlessly </span> <span className='pl-3'> with this handy tool!</span> <span className='pl-1'>Perfect for tracking word </span> <span className='pl-4'>counts and boosting </span> <span className='pl-4'>productivity in any</span> <span className='pl-10'>writing task.</span></p>
            <button type="button" className="py-2.5 px-5 ml-7 text-sm font-medium text-gray-600  rounded-sm border border-gray-600  hover:text-white focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-white dark:border-gray-600 dark:hovertext-white "><Link href="https://github.com/BariraRizwan/Word-counter-prog">View Project</Link></button>
          </div>
        </div>

  <div className='flex  bg-zinc-950 w-screen h-[360px] justify-evenly'>
          <div className='w-44 h-56 border-gray-600 my-10 border-2 hover:border-gray-200'>
             <Image src="/images/todo.jpg" alt='calculator' width={100} height={100} className='w-60 h-[120PX]'></Image>
             <h4 className='justify-center text-gray-400  mt-[0.8px] font-medium font-mono text-base pl-9 pb-1'> TO-DO LIST </h4>
             <p className='text-neutral-300 font-thin leading-3 font-mono pt-[2px] tracking-tighter text-xs pl-2 pb-10 '> Effortlessly manage tasks with this user-friendly <span className='pl-8'> to-do list!</span><br /> <span className='pl-2'>Boost your productivity </span> <span className='pl-3'>and stay organized.</span></p>
             <button type="button" className="py-2.5 px-5 ml-7 text-sm font-medium text-gray-600  rounded-sm border border-gray-600  hover:text-white focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-white dark:border-gray-600 dark:hovertext-white "><Link href="https://github.com/BariraRizwan/Todo_list">View Project</Link></button>
          </div>
          <div className='w-44 h-56 border-gray-600 my-10 border-2 hover:border-gray-200'>
             <Image src="/images/atm.jpg" alt='calculator' width={100} height={100} className='w-60 h-[120px]'></Image>
             <h4 className=' text-gray-400  mt-[0.8px] font-medium font-mono text-base pl-9 py-1 tracking-tighter leading-3'> ATM MACHINE <span className='pl-[-2px]'>FUNCTIONALITY</span> </h4>
             <p className='text-neutral-300 font-thin leading-3 font-mono pt-[2px] tracking-tighter text-xs pl-2 pb-9 '>Explore banking basics with <span className='pl-3'>this ATM functionality</span> project!Effortlessly manage deposits,withdrawals,and <span className='pl-6'>balance inquiries.</span></p>
             <button type="button" className="py-2.5 px-5 ml-7 text-sm font-medium text-gray-600  rounded-sm border border-gray-600  hover:text-white focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-white dark:text-white dark:border-gray-600 dark:hovertext-white "><Link href="https://github.com/BariraRizwan/ATM-Machine_prog">View Project</Link></button>
          </div>
          
        </div>

      
        
    </div>
  )
}

export default Projects;