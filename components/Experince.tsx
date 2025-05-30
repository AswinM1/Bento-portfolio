import React from 'react'
import {motion} from 'motion/react'
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import acc from '../components/images/acc.png'
import tvs from '../components/images/tvs.png'

function Experince() {
    type pro = {
        name: string,
        role: string,
        des: string,
        time: string,
        img:any
      }
    const comp: pro[] = [
    {
      name: "Accenture",
      role: "Summer Intern",
      des: "Interning at Accenture India",
      time: "May 2025 - Present",
      img:acc
    },
    {
      name: "TVS Sensing Solutions",
      role: "Front-end Intern",
      des: "Developed a responsive and user-friendly UI for the knowledge portal of the company",
      time: "June 2024 - July 2024",
      img:tvs
    }
  ];


  return (
    <div className='relative'> 
         <p className=" dark:bg-[#131212] relative w-fit text-xl group sm:text-2xl lg:text-3xl tracking-tighter font-sans font-semibold text-black dark:text-white mb-4 sm:mb-6">
   Experience
          <span className="block w-0 h-1  bg-violet-500 transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span></p>
      {/* interm */}
       <div className="space-y-4 sm:space-y-6 py-6 px-2 h-fit rounded-2xl ">
  {comp.map((val, idx) => (
    <motion.div key={idx} className="flex flex-col gap-2 rounded-lg "
    whileHover={{
      
      z:40,
      x:5
    }}
      transition={{
        duration:0.1
      }}
      >
      
  
      <div className="flex items-center justify-between">
        
        {/* Left: Image and Name */}
        <div className="flex items-center gap-2">
          <Image
            src={val.img}
            width={30}
            height={30}
            alt={val.name}
            className="rounded-full object-cover"
          />
          <h1 className="font-semibold tracking-tight text-base sm:text-lg lg:text-xl text-black dark:text-white">
            {val.name}
          </h1>
        </div>
        
        {/* Right: Time */}
        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
          {val.time}
        </span>
      </div>

      {/* Role */}
      <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300">
        {val.role}
      </p>

    
    </motion.div>
  ))}
</div></div>
  )
}

export default Experince