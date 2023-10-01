import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import {fadeIn} from '../../variants'
import { ImHtmlFive} from 'react-icons/im'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import {BiLogoJavascript, BiLogoRedux, BiLogoTailwindCss, BiChip} from 'react-icons/bi'
import { FiGitCommit} from 'react-icons/fi'
import './Services.css'



const Services = () => {
  return (
    <div className="section relative" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-baseline gap-16">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
            className="flex-1  mb-12 lg:mb-0">
            <h2 className="h2 text-accent mb-6">What I Do</h2>
            <h3 className="h3 max-w-[555px] mb-16">
              I'm a Junior Front-end Developer with over 1 years of experience.
            </h3>
            <div className='flex h-[250px] items-center'>
            <div className="stage-cube-cont">

<div className="cubespinner">
  <div className="face1">
    <ImHtmlFive color="#f06529" />
  </div>

  <div className="face2">
    <FaCss3Alt color="#28a4d9" />
  </div>

  <div className="face3">
    <BiLogoJavascript color="#fff700" />
  </div>

  <div className="face4">
    <FaReact color="#5ed4f4" />
  </div>

  <div className="face5">
    <BiLogoRedux color="#8400ff" />
  </div>

  <div className="face6">
    <BiLogoTailwindCss color="#5ed4f4" />
  </div>
</div>
</div>
<button className="btn btn-sm">See my work</button>
</div>
            </motion.div>
           

          
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.3}}
            className='flex-1 h-[550px]'>
            <div >
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                Development
              </h4>
              <ul>
                <li className='font-secondary leading-tight flex  mb-[20px]'> <FiGitCommit color="#5ed4f4" className='mr-[20px]  '/>Creating the user interface and user experience for web applications</li>
                <li className='font-secondary leading-tight flex mb-[20px]'> <FiGitCommit color="#5ed4f4" className='mr-[20px] w-[26px]'/>Working closely with web designers and back-end developers to create a cohesive experience for users</li>
                <li className='font-secondary leading-tight flex mb-[20px] '> <FiGitCommit color="#5ed4f4" className='mr-[20px] '/>Ensuring that the user interface is easy to use and visually appealing</li>
                <li className='font-secondary leading-tight flex  mb-[20px]'><FiGitCommit color="#5ed4f4" className='mr-[20px] '/>Writing code that is standards-compliant and optimized for performance</li>
                <li className='font-secondary leading-tight flex  mb-[20px]'><FiGitCommit color="#5ed4f4" className='mr-[20px] w-[26px]'/>Testing the user interface to ensure it is compatible with different browsers and devices</li>
                <li className='font-secondary leading-tight flex  mb-[20px]'><FiGitCommit color="#5ed4f4" className='mr-[20px]'/>Debugging errors and fixing issues</li>
              </ul>
            </div>


          </motion.div>
          
        </div>
      </div>
    </div>
  );
}

export default Services


// lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten