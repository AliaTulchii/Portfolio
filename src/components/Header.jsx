import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className=' py-8 '>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#" >
            <h2 className='h2' ><span className='text-gradient'>Alia</span> <br/>Tulchii</h2>
          </a>
          <Link to='contact' className='btn btn-sm py-3 cursor-pointer'> Work with me</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
