import React from 'react'
import { useState,useEffect } from 'react';
import { Book,  Code2, FileText, X, MailIcon, LucideMail } from 'lucide-react';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import { BsGit, BsGithub, BsLinkedin, BsMedium, BsTwitterX } from 'react-icons/bs';
import { FaMedium } from 'react-icons/fa6';

function Links() {
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

  
  return (
    <div>
         <h2 className='group md:text-xl sm:text-2xl lg:text-3xl font-bold text-black dark:text-white font-sans tracking-tighter relative w-fit'>
    Socials
    <span className=" block w-0 h-1 bg-violet-500 transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span>
  </h2>
   
<div className="grid grid-cols-4 md:grid-cols-2 gap-3 px-4 py-2 h-fit rounded-2xl inset-shadow-2xs ">
  {Links.map((link, idx) => (
    <a
      key={idx}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center py-6 px-6 gap-2 w-5 h-5 md:w-14 md:h-14 justify-center aspect-square border border-gray-200 dark:border-gray-700 rounded-lg hover:scale-105 dark:hover:scale-105 hover:shadow-sm transition-all duration-200 group"
    >
        
      <span className="dark:text-gray-400  group-hover:text-black dark:group-hover:text-white transition-colors">
      
        {link.icon}
      </span>
    </a>
  ))}
</div>



    </div>
  )
}

export default Links