import React from 'react'
import {motion} from 'motion/react'

function Skills() {
    
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
    <div>
        
       <h2 className="group text-xl  sm:text-2xl lg:text-3xl font-bold text-black dark:text-white font-sans tracking-tighter relative w-fit">
  Skills
  <span className=" block w-0 h-1 bg-violet-500 transition-all duration-500 group-hover:w-full absolute bottom-0 left-0"></span>
</h2>
        <div className='flex flex-wrap gap-1  py-6 px-2 h-fit rounded-2xl  '>
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
    </div>
  )
}

export default Skills