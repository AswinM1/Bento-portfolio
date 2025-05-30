"use client";
import React from 'react';
import { motion } from 'motion/react';
import Homepro from '../components/Homepro';
import Balancer from 'react-wrap-balancer';
import Image from 'next/image';
import acc from '../components/images/acc.png'
import tvs from '../components/images/tvs.png'
import { useState,useEffect } from 'react';
import { Book,  Code2, FileText, X, MailIcon, LucideMail } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { BsGit, BsGithub, BsLinkedin, BsMedium, BsTwitterX } from 'react-icons/bs';
import { FaMedium } from 'react-icons/fa6';

function Home() {
  
  const Links = [
    {
      name: 'GitHub',
      url: 'https://github.com/AswinM1', 
      icon:<BsGithub size={30} className='text-white'></BsGithub>
    },
    {
      name: 'Mail',
     url: 'mailto:aswinheria@gmail.com',
      icon:(<svg xmlns="http://www.w3.org/2000/svg" id="gmail" enableBackground="new 0 0 141.7 141.7" viewBox="0 0 141.7 141.7" className="w-6 h-6 sm:w-7 sm:h-7">
  <path fill="#4285f4" d="M24.3,111.3h17.2V69.6L16.9,51.3V104C16.9,108,20.2,111.3,24.3,111.3z"></path>
  <path fill="#34a853" d="M100.3,111.3h17.2c4.1,0,7.4-3.3,7.4-7.4V51.3l-24.5,18.4V111.3z"></path>
  <path fill="#fbbc04" d="M100.3,37.8v31.9l24.5-18.4v-9.8c0-9.1-10.4-14.3-17.7-8.8L100.3,37.8z"></path>
  <path fill="#ea4335" fillRule="evenodd" d="M41.4,69.6V37.8l29.4,22.1l29.4-22.1v31.9L70.9,91.7L41.4,69.6z" clipRule="evenodd"></path>
  <path fill="#c5221f" d="M16.9,41.4v9.8l24.5,18.4V37.8l-6.9-5.2C27.3,27.2,16.9,32.4,16.9,41.4z"></path>
</svg>)
    },
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1V67x1NlX1AFVpI2XJtHw3ikYVMs6JzLg/view', 
      icon: (<p className='font-black text-white text-sm sm:text-base'>CV</p>)
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/aswinmfullstack',
      icon: <BsLinkedin size={30} className='text-blue-400'/>
    },
    {
      name: 'Blog',
      url: 'https://medium.com/@aswinheria',
      icon: <FaMedium size={30} className='text-white'/>
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/ASWIN__M',
      icon: <SiLeetcode size={30} className='text-yellow-400'/>
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://auth.geeksforgeeks.org/user/yourusername',
      icon: <SiGeeksforgeeks size={30} className='text-green-400' />
    },
    {
      name: 'X',
      url: 'https://x.com/__pseudocode__',
      icon: <BsTwitterX size={30} className='text-white '/>
    }
  ];

  type pro = {
    name: string,
    role: string,
    des: string,
    time: string,
    img:any
  }
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Update the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Format time as HH:MM:SS
  const formattedTime = time.toLocaleTimeString();
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

  const skill = [
    { text: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { text: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { text: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { text: "React.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { text: "Javascript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { text: "Typescript", logo: "urlll" },
    { text: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { text: "EC2", logo: "https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png" },
    { text: "S3", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { text: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    { text: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { text: "DSA", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.jpg" },
    { text: "OOPS", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.jpg" },
    { text: "Next.js", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5a/Data_structure.jpg" },
  ];

  return (
    <div className='cursor-grab grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-3 p-3 sm:p-4 lg:p-6 min-h-screen w-full max-w-5xl mx-auto'>
   
   
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
  drag
  dragConstraints={{ top: 4, bottom: 4, left: 4, right: 4 }}
  className=' backdrop-blur-3xl   overflow-hidden border bg-neutral-300 dark:bg-[#121212]  border-zinc-600 rounded-lg p-4 sm:p-6 col-span-1 sm:col-span-2 lg:col-span-2'
>
  


  
  
  <div className='relative z-10 flex flex-col gap-4 bg-neutral-900 py-6 px-5 h-fit rounded-2xl inset-shadow-2xs inset-shadow-black'>
    
    <div className='flex flex-row items-center gap-4'>
      <motion.div 
      
      className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 shrink-0">
         <motion.svg 
  animate={{
    rotate:[0,10,20,30,40,50,60,70,80,90]
  }}
  transition={{
   duration:0.3,
    repeat:Infinity
  }}
   className="w-20 h-20"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="Fan--Streamline-Font-Awesome" height="16" width="16">
  <desc>
    Fan Streamline Icon: https://streamlinehq.com
  </desc>

  <path d="M8.08125 0c-0.053125 0 -0.10625 0.003125 -0.159375 0.015625C5.25 0.53125 3.6125 3.196875 4.078125 5.915625c0.090625 0.53125 0.2625 1.028125 0.496875 1.48125L1 7h-0.08125C0.4125 7 0 7.4125 0 7.91875c0 0.053125 0.003125 0.10625 0.015625 0.159375C0.53125 10.75 3.196875 12.3875 5.915625 11.921875c0.53125 -0.090625 1.028125 -0.2625 1.48125 -0.496875L7 15v0.08125c0 0.50625 0.4125 0.91875 0.91875 0.91875 0.053125 0 0.10625 -0.003125 0.159375 -0.015625 2.671875 -0.515625 4.309375 -3.18125 3.84375 -5.9 -0.090625 -0.53125 -0.2625 -1.028125 -0.496875 -1.48125L15 9h0.08125c0.50625 0 0.91875 -0.4125 0.91875 -0.91875 0 -0.053125 -0.003125 -0.10625 -0.015625 -0.159375 -0.515625 -2.671875 -3.18125 -4.309375 -5.9 -3.84375 -0.53125 0.090625 -1.028125 0.2625 -1.48125 0.496875L9 1v-0.08125C9 0.4125 8.5875 0 8.08125 0zM8 7a1 1 0 1 1 0 2 1 1 0 1 1 0 -2z" fill="violet" stroke-width="0.0313"></path>
</motion.svg>
      </motion.div>

      <div className='flex flex-col min-w-0 flex-1 font-mono'>
      
        <h2 className='text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-orange-300 font-sans tracking-tighter'>
          
          Aswin 
        </h2>
        <p className='text-sm sm:text-base  font-mono dark:text-amber-200' >
          __pseudocode__
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
    className="font-bold underline"
  >
    Resume
  </a>
</p>

    {/* Status Badge */}
    <div className='flex gap-2 w-fit py-2 px-3 rounded-lg items-center justify-center dark:bg-blue-100 font-bold tracking-tighter font-sans dark:text-black  '>
      <motion.div 
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity }}
        className='w-2 h-2 bg-green-400 rounded-full shadow-2xl shadow-green-500'
      ></motion.div>
      <p className='text-xs sm:text-sm  '>Available for opportunities</p>
    </div>
  </div>
</motion.div>


     <motion.div
  drag
  dragConstraints={{ top: 4, bottom: 4, left: 4, right: 4 }}
  initial={{
    y:-100,
    
  }
  }
  whileInView={{
   x:0,
   y:5
  }}
  transition={{
    duration:0.3
  }}
   viewport={{
    once:true
  }}
  className='border  group backdrop-blur-3xl bg-neutral-200 z-10 rounded-lg p-4 sm:p-6 col-span-1 sm:col-span-2 lg:col-span-1 border-zinc-600 dark:bg-[#131212]'
>

       <h2 className="group text-xl mb-3 sm:text-2xl lg:text-3xl font-bold text-black dark:text-white font-sans tracking-tighter relative w-fit">
  Skills
  <span className=" block w-0 h-1 bg-violet-500 transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span>
</h2>
        <div className='flex flex-wrap gap-2 bg-neutral-900 py-6 px-2 h-fit rounded-2xl inset-shadow-2xs inset-shadow-black'>
          {skill.map((val, idx) => (
            <motion.div
            
              key={idx}
              className="w-fit flex flex-wrap items-center px-2 py-1 gap-2 bg-black dark:bg-zinc-800 text-white dark:text-zinc-200 border border-zinc-700 rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
            >
              <p className='flex w-2 h-2 bg-emerald-300 rounded-full'></p>
              <span className="text-xs sm:text-sm font-medium">{val.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Links Box */}
     <motion.div
      initial={{
    x:100,
    
  }
  }
  whileInView={{
   x:0,
   
  }}
  transition={{
    duration:0.3
  }}
   viewport={{
    once:true
  }}
  drag
  dragConstraints={{ top: 4, bottom: 4, left: 4, right: 4 }}
  className=' relative rounded-md  p-4 sm:p-6 col-span-1 lg:col-span-1  shadow-purple-600'
>

  <h3 className='text-2xl sm:text-xl font-semibold mb-3 text-black dark:text-white tracking-tighter font-sans'>
    Socials</h3>
   
  <div className='flex  flex-wrap gap-0.5 sm:grid sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 bg-neutral-900 py-6 px-2 h-fit rounded-2xl inset-shadow-2xs inset-shadow-black'>
    {Links.map((link, idx) => (
      <a
      key={idx}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className='flex items-center justify-center px-2 py-2  w-20 h-20 sm:w-auto sm:h-auto sm:aspect-square border border-gray-200 dark:border-gray-700 rounded-lg hover:hover:scale-105 dark:hover:scale-105 hover:shadow-sm transition-all duration-200 group'
      >
        <span className='text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors'>
          {link.icon}
        </span>
        
      </a>
    ))}
  </div>
 <div className='w-auto h-auto bg-green-300 text-black font-sans  justify-center items-center sm:w-fit tracking-tight font-bold mt-2 py-2 px-2 rounded-2xl flex-col'><p className='flex-col'>{formattedTime}</p></div>
</motion.div>
   <motion.div
    initial={{
    x:-100,
    
  }
  }
  whileInView={{
   x:0,
   y:5
  }}
  transition={{
    duration:0.3
  }}
   viewport={{
    once:true
  }}
  drag
  dragConstraints={{ top: 4, bottom: 4, left: 4, right: 4 }}
  className=' dark:bg-[#131212] group border rounded-lg p-4 sm:p-6 lg:p-7 col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 border-zinc-700'
>


        <p className=" dark:bg-[#131212] relative w-fit text-xl group sm:text-2xl lg:text-3xl tracking-tighter font-sans font-semibold text-black dark:text-white mb-4 sm:mb-6">
   Experience
          <span className="block w-0 h-1  bg-violet-500 transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span></p>
      {/* interm */}
       <div className="space-y-4 sm:space-y-6 bg-neutral-900 py-6 px-2 h-fit rounded-2xl inset-shadow-2xs inset-shadow-black">
  {comp.map((val, idx) => (
    <motion.div key={idx} className="flex flex-col gap-2 rounded-lg"
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

      {/* Description */}
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        {val.des}
      </p>
    </motion.div>
  ))}
</div>

      </motion.div>

      
      <motion.div 
      drag
      dragConstraints={{
        top:4,
        bottom:4,
        left:4,
        right:4
      }}
       initial={{
    x:100,
    
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
      className='border dark:bg-[#131212] z-10 rounded-lg p-4 sm:p-6 lg:p-7 col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 border-zinc-700'>
        <Homepro />
      </motion.div>
    </div>
  );
}

export default Home;