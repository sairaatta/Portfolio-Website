import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';




const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='p-6 text-white '>
        <div className='flex justify-between items-center '>
          <div className='font-bold text-2xl '>
            <Link to='/'>
              <h1 className='hover:text-yellow-600 transition duration-500 ease-in-out transform hover:scale-100'>MY PORTFOLIO</h1>
            </Link>
          </div>
          {/* it will display for large screens */}
          <div className=' hidden md:block '>
            <ul className='flex space-x-8 '>
              <li>
                <Link to='/aboutme' className='hover:text-yellow-600'>About Me</Link>
              </li>
              <li>
                <Link to='/skills' className='hover:text-yellow-600'>My Skills</Link>
              </li>
              <li>
                <Link to='/resume' className='hover:text-yellow-600'>Resume</Link>
              </li>
              <li>
                <Link to='/contactme' className='hover:text-yellow-600'>Contact Me</Link>
              </li>
            </ul>
          </div>

          {/* hamburger icon for mobile screens */}
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none'>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* dropdown menu for mobile */}
        {isOpen && (
          <div className=' md:hidden '>
            <ul className='flex flex-col space-y-4 mt-4 '>
              <li>
                <Link to='/aboutme' className='hover:text-yellow-600' onClick={toggleMenu}>About Me</Link>
              </li>
              <li>
                <Link to='/skills' className='hover:text-yellow-600' onClick={toggleMenu}>My Skills</Link>
              </li>
              <li>
                <Link to='/resume' className='hover:text-yellow-600' onClick={toggleMenu}>Resume</Link>
              </li>
              <li>
                <Link to='/contactme' className='hover:text-yellow-600' onClick={toggleMenu}>Contact Me</Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar