import React from 'react'
import me from '../assets/chair.png'
import {FaGithub, FaLinkedinIn, FaTelegram} from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import { motion } from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div  className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:tex-[110px]'>ALIA <span>TULCHII</span></motion.h1>
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[45px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a</span>
              <TypeAnimation sequence={[
                'Junior',
                2000,
                'Frontend',
                2000,
                'Developer',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
              
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'>Junior front-end developer with experience in designing, developing and supporting web platforms. Equipped with a diverse and promising skill set. Knowledge of various languages, built-in development tools and experience with HTML, CSS, JavaScript, React, responsive design, Git and others, which you can see in my skills column on my resume. Able to effectively manage himself during independent projects, as well as collaborate as part of a productive team.</motion.p>
            <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max  flex-col gap-x-6  mb-12 mx-auto lg:mx-0'>
              <div className='flex max-w-max  gap-x-6 items-center mb-12 '>
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
              </div>
              
              <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                <a href="https://github.com/AliaTulchii" target='blank'>
                  <FaGithub/>
                </a>
                <a href="https://www.linkedin.com/in/halyna-tulchii-869569271/" target='blank'>
                  <FaLinkedinIn/>
                </a>
                <a href="https://t.me/alia_tulchii" target='blank'>
                  <FaTelegram/>
                </a>
             </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('down', 0.7)}
            initial='hidden'
            whileInView={'show'}
            
            className='rounded-full 
      bg-gradient-to-r from-cyan-500 from-10% via-sky-500 via-30% to-cyan-900 to-90%
      hidden lg:flex flex-1 max-w-[320px] mix-blend-lighten max-h-[320px] lg:max-w-[450px] max-h-[460px] mx-auto
      '>
        <img src={me} alt="my photo"  />
      </motion.div>
</div>
      </div>
      
    </section>
  )
}

export default Banner
