import React from 'react';
import Hero from '../assets/images/hero.jpg';
import Navbar from './Navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

const ContactMe = () => {
  return (
    <>
      <section className='bg-cyan-950 text-white bg-center bg-cover bg-no-repeat min-h-screen w-full'
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <Navbar />

        <div className='flex flex-col items-center justify-center h-full py-10 px-4'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fadeIn'>
            Contact Me
          </h1>

          <form className='bg-gray-200 text-black p-8 rounded-lg shadow-md w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 animate-slideUp'>
            <div className='mb-4'>
              <label className='block text-lg font-serif mb-2'>Name</label>
              <input 
                type='text' 
                id='name' 
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                placeholder='Your Name'
              />
            </div>

            <div className='mb-4'>
              <label className='block text-lg font-serif mb-2' htmlFor='email'>Email</label>
              <input 
                type='email' 
                id='email' 
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                placeholder='Your Email'
              />
            </div>

            <div className='mb-6'>
              <label className='block text-lg font-serif mb-2' htmlFor='message'>Message</label>
              <textarea 
                id='message' 
                className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500' 
                rows='4' 
                placeholder='Your Message'
              />
            </div>

            <button 
              type='submit' 
              className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-500 ease-in-out transform hover:scale-105'>
              Send Message
            </button>
          </form>

          {/* Social Media Links */}
          <div className='mt-10 mb-6 flex space-x-6'>
            <a href='https://www.linkedin.com/in/sairaatta-339481282' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
              <FaLinkedin size={30} />
            </a>
            <a href='https://github.com/sairaatta' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400'>
              <FaGithub size={30} />
            </a>
            <a href='mailto:sairaatta098@gmail.com' className='text-white hover:text-gray-400'>
              <FaEnvelope size={30} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
