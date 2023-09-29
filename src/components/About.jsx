import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'
import robot from '../assets/rob.png'


const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })
  return (
    <section  className='section' id='about' ref={ref}>
      <div className='container mx-auto '>
        <div>
          <div className='flex-1  bg-about bg-contain bg-no-repeat  h-[640px] mix-blend-lighten bg-top'>
            
          </div>
          <div className='flex-1'>
            <h2 className='h2 text-accent'>
              About me
            </h2>
            <h3 className='h3 mb-4 '>I'm a Junior Front-end Developer with over 1 years of experience. </h3>
            <p>
              
              I admire how fast technology is developing and every day, more and more society
              is becoming dependent on it. Technologies and artificial intelligence are being improved
              and contribute to facilitating our work and life as a whole.I want to be as close as possible
              to technology, to be part of it and part of something big that will radically change our future.
              I am a detail-oriented person who is always ready for challenging tasks. I am looking for
              a promising and interesting job with the opportunity for professional and personal growth.
            </p>
            <div className='flex'> 
              <div >
              <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                  {
                    inView ? 
                    <CountUp start={0} end={13} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Month of <br />
                Experience
              </div>
              </div>
              
            </div>
          </div>
         </div>
      </div>
    </section>
  )
}

export default About
