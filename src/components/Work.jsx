import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import img1 from '../assets/img1.png'
import img2 from '../assets/img3.png'
import img3 from '../assets/img4.png'


const Work = () => {
  return (
    <div className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
            className='flex-1 flex-col gap-y-12 mb-10 '>
            <div className='mb-[60px]'>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nobis, quas laudantium ipsam reiciendis ut.</p>
           <a href='https://github.com/AliaTulchii?tab=repositories' target='blank' className='btn py-2 px-6 text-sm '>View all projects</a>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <a href="https://aliatulchii.github.io/daily-goals-tracking-app/" target='blank'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="project" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>Daily Goals Tracking App</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl text-white'>About project</span>
                </div>
              </a>
              
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 lg:gap-y-[68px]'>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img2} alt="project" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>IceCream App</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl text-white'>About project</span>
                </div>
            </div>


            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img3} alt="project" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>Cars Rental App</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl text-white'>About project</span>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Work
