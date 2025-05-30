import React from 'react'
import {motion} from 'motion/react'
function About() {
  return (
    <div>
        <motion.div 
     initial={{
    x:-100,
    
  }
  }
  whileInView={{
   x:0,
   y:0
  }}
  transition={{
    duration:0.5
  }}
   viewport={{
    once:true
  }}
 
  className=' backdrop-blur-3xl   overflow-hidden border bg-neutral-300 dark:bg-[#121212]  border-zinc-600 rounded-lg p-4 sm:p-6 col-span-1 sm:col-span-2 lg:col-span-2'
>
  


  
  
  <div className='relative z-10 flex flex-col gap-4 0 py-6 px-5 h-fit rounded-2xl'>
    
    <div className='flex flex-row items-center gap-4'>
      <motion.div 
      
      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 shrink-0 b">
         <motion.svg 
  animate={{
    rotate: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]
  }}
  transition={{
    duration: 0.3,
    repeat: Infinity
  }}
  className="w-20 h-20 py-2 px-2 fill-yellow-200 drop-shadow-[0_0_10px_#fbbf24] shadow-xl  rounded-full "
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 16 16" 
  id="Fan--Streamline-Font-Awesome" 
  height="16" 
  width="16"
>

  <desc>
   
  </desc>

  <path d="M8.08125 0c-0.053125 0 -0.10625 0.003125 -0.159375 0.015625C5.25 0.53125 3.6125 3.196875 4.078125 5.915625c0.090625 0.53125 0.2625 1.028125 0.496875 1.48125L1 7h-0.08125C0.4125 7 0 7.4125 0 7.91875c0 0.053125 0.003125 0.10625 0.015625 0.159375C0.53125 10.75 3.196875 12.3875 5.915625 11.921875c0.53125 -0.090625 1.028125 -0.2625 1.48125 -0.496875L7 15v0.08125c0 0.50625 0.4125 0.91875 0.91875 0.91875 0.053125 0 0.10625 -0.003125 0.159375 -0.015625 2.671875 -0.515625 4.309375 -3.18125 3.84375 -5.9 -0.090625 -0.53125 -0.2625 -1.028125 -0.496875 -1.48125L15 9h0.08125c0.50625 0 0.91875 -0.4125 0.91875 -0.91875 0 -0.053125 -0.003125 -0.10625 -0.015625 -0.159375 -0.515625 -2.671875 -3.18125 -4.309375 -5.9 -3.84375 -0.53125 0.090625 -1.028125 0.2625 -1.48125 0.496875L9 1v-0.08125C9 0.4125 8.5875 0 8.08125 0zM8 7a1 1 0 1 1 0 2 1 1 0 1 1 0 -2z"  stroke-width="0.0313"></path>
</motion.svg>
      </motion.div>

      <div className='flex flex-col min-w-0 flex-1 font-mono'>
      
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-orange-300 font-sans tracking-tighter'>
          
          Aswin 
        </h2>
        <p className='text-sm sm:text-base  font-mono dark:text-amber-200' >
         @ __pseudocode__
        </p>
      </div>
    </div>
 
    <motion.div 
    whileHover={{
      x:5
    }}
    transition={{
      duration:0.3
    }}
    className='w-full'>
      <p className='text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-300 font-sans tracking-tight'>
        Hello I am Aswin, I am a tech enthusiast and I love building user centric applications.
        With experience in Technologies I thrive to Build Scalable applications.
      </p>
    </motion.div>
    <p className="font-sans tracking-tight">
  Check out my{' '}
  <a
    href="https://drive.google.com/file/d/1V67x1NlX1AFVpI2XJtHw3ikYVMs6JzLg/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="font-bold underline bg-blue-200 text-black py-2 px-2 rounded-lg"
  >
    Resume
  </a>
</p>

    {/* Status Badge */}
    <div className='flex gap-2 w-fit py-2 px-3 rounded-lg items-center justify-center dark:bg-zinc-700 font-bold tracking-tighter font-sans dark:text-black  '>
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity }}
        className='w-2 h-2 bg-green-400 rounded-full shadow-2xl shadow-green-500'
      ></motion.div>
      <p className='text-xs sm:text-sm text-neutral-200 '>Available for opportunities</p>
    </div>
  </div>
</motion.div>

    </div>
  )
}

export default About