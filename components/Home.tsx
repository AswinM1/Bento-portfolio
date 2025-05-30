"use client";
import React from 'react';
import { motion } from 'motion/react';
import Homepro from '../components/Homepro';
import Skills from './Skills';
import Links from './Links';
import Experince from './Experince';
import About from './About';



function Home() {
  
 
  

  // Format time as HH:MM:SS
  
  return (
    <div
   style={{
  backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/5/5f/512x512_Dissolve_Noise_Texture.png')"
}}

     className='cursor-pointer grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-row-5 gap-3 p-3 sm:p-4 lg:p-6 min-h-screen w-full max-w-6xl mx-auto'>
   
   {/* home */}
    
    <div className='md:col-span-2'>
      <About></About>
    </div>
      {/* Skills Box - Now Rectangular */}
      <div className='md:col-span-1 md:row-span-full'>
      <motion.div 
       initial={{
    x:100,
    
  }
  }
  whileInView={{
   x:0,
   y:0
  }}
  transition={{
    duration:0.3
  }}
   viewport={{
    once:true
  }}
      className="border dark:bg-[#121212] border-zinc-600 p-4 rounded-lg h-fit sm:p-6 col-span-1 sm:col-span-2 lg:col-span-2">
<div className="noise-overlay"></div>
<Skills></Skills>

     
      </motion.div>
      </div>

{/* sdsad */}
<div className=''>
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
  className='border  dark:bg-[#121212] border-zinc-600 rounded-lg p-4 sm:p-6 col-span-1 md:w-fit sm:w-full sm:col-span-2 lg:col-span-2'
>
<Links></Links>
 
</motion.div>

</div>

 <div className='md:col-span-2 md:row-span-auto'>
      <motion.div 
     
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
{/* second */}
<div className='md:col-span-2'>
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
  
  className='  relative dark:bg-[#131212] group border rounded-lg p-4 sm:p-6 lg:p-7  sm:col-span-2 lg:col-span-2 lg:row-span-2 border-zinc-700'
>
  <div className='noise absolute w-full h-full flex'></div>
<Experince></Experince>


      </motion.div>
<div className="mt-3 rounded-lg z-10 md:bg-white md:flex md:col-span-2 md:w-full md:h-[170px] md:row-span-3 sm:hidden">
  <img 
    src="https://i.pinimg.com/736x/d9/8e/60/d98e60053a4c9948809b2c391e6c36ed.jpg" 
    className="object-cover w-full h-full rounded-lg" 
    alt="Decorative" 
  >
  </img>
</div>
</div>
    </div>
  );
}

export default Home;