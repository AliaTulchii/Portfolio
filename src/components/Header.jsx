import React from 'react'
import logo from '../assets/tulc.png'

const Header = () => {
  return (
    <header className=' py-8 '>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#" >
            <img src={logo} alt="logo" className="w-[85px] h-[105px]"/>
          </a>
          <button className='btn btn-sm'> Work with me</button>
        </div>
      </div>
    </header>
  )
}

export default Header
