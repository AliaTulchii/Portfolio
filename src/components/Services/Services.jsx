import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import {fadeIn} from '../../variants'
import { ImHtmlFive} from 'react-icons/im'
import { FaCss3Alt, FaReact } from 'react-icons/fa'
import {BiLogoJavascript, BiLogoRedux, BiLogoTailwindCss, BiChip} from 'react-icons/bi'
import { FiGitCommit} from 'react-icons/fi'
import './Services.css'
import { Link } from 'react-scroll'



const Services = () => {
  return (
    <div className=" relative mt-60 lg:p-40" id="services">
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

            <div className=' md:flex h-[250px] items-center'>
            <div className="stage-cube-cont ">

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
              

              <Link to='work' className="group cursor-none relative cursor-default w-[140px] h-[50px] bg-[linear-gradient(144deg,_#fff,_#5b42f3_50%,_#00ddeb)] text-white whitespace-nowrap flex flex-wrap rounded-full overflow-hidden before:content-['See_my_work'] before:pointer-events-none before:absolute before:z-[1] before:top-[50%] before:left-[50%] before:translate-y-[-50%] before:translate-x-[-50%] before:duration-[.4s] hover:before:text-teal-200 cursor-pointer  ">
              <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.5s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.5s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.9s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.45s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.6s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.65s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.15s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.55s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.85s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.4s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.55s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.25s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.35s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.3s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.05s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.05s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.15s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.75s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.2s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3.1s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.8s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.9s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent delay-0"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.05s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.15s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[3s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.85s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.6s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.1s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.3s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.6s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.7s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.9s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.75s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.2s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.8s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.1s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.7s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.55s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.15s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.65s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.65s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.45s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.1s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.85s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.7s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.5s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.25s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.65s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.25s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.6s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.2s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.45s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.55s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.2s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.25s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.35s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.45s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.5s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.8s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.3s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.3s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.4s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.4s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.75s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.05s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[2.35s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[0.4s]"></div>
  <div className="w-[10px] h-[10px] blur-[5px] bg-[rgb(30,41,59)] delay-[0.2s] duration-[0.4s] hover:bg-transparent hover:delay-0 hover:duration-0 group-focus:bg-transparent group-focus:delay-[1.35s]"></div>
  
          </Link>

{/* <Link to='work' className="btn btn-sm py-3 cursor-pointer">See my work</Link> */}
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