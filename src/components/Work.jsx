import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'


const Work = () => {
  return (
    <div className='section' id='work'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <div className='flex-1 flex-col gap-y-12 mb-10 '>
            <div>
              <h2 className='h2 leading-tight text-accent'>My Latest <br /> Work</h2>
              <p className='max-w-sm mb-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate nobis, quas laudantium ipsam reiciendis ut.</p>
           <button className='btn btn-sm mb-10'>View all projects</button>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="project" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>Daily Goals Tracking App</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl text-white'>About project</span>
                </div>
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-y-[68px]'>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="project" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>Daily Goals Tracking App</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl text-white'>About project</span>
                </div>
            </div>


            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500' src={img1} alt="project" />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient '>Daily Goals Tracking App</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-xl text-white'>About project</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
