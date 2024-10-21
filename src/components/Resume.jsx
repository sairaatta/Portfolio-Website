import React from 'react';
import Hero from '../assets/images/hero.jpg';
import Navbar from './Navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons

const Resume = () => {
  return (
    <>
      <section
        className='bg-cyan-950 text-white bg-center bg-cover bg-no-repeat min-h-screen w-full'
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <Navbar />
        <div className='px-4 sm:px-6 md:px-16 lg:px-80 py-10 sm:py-16 md:py-20 lg:py-32'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 mb-6 transition-transform duration-500 ease-in-out transform hover:scale-105 animate-fadeIn'>
            Resume
          </h1>
          <div className='bg-gray-300 text-black p-8 w-full min-h-screen rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl animate-slideUp'>
            <div className='p-4'>
              <h1 className='text-2xl font-bold mb-3'>Profile Summary</h1>
              <p className='text-base text-justify leading-relaxed'>
                I am a passionate Frontend Developer with expertise in React.js, Tailwind CSS, and modern web development. Seeking opportunities to contribute my skills and grow as a software developer.
                <br />Out of the tech world, I am good at Baking, love playing Basketball, and enjoy reading Books.
              </p>
            </div>

            <hr className='border-1 border-black my-4' />
            <div className='p-4'>
              <h1 className='text-2xl font-bold mb-3'>Skills</h1>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                <ul className='list-disc'>
                  <li className='text-xl font-normal'>HTML5</li>
                  <li className='text-xl font-normal'>CSS</li>
                  <li className='text-xl font-normal'>JavaScript</li>
                </ul>
                <ul className='list-disc'>
                  <li className='text-xl font-normal'>Bootstrap</li>
                  <li className='text-xl font-normal'>React.js</li>
                  <li className='text-xl font-normal'>TailwindCSS</li>
                </ul>
                <ul className='list-disc'>
                  <li className='text-xl font-normal'>C++</li>
                  <li className='text-xl font-normal'>Python</li>
                  <li className='text-xl font-normal'>Machine Learning</li>
                </ul>
              </div>
            </div>

            <hr className='border-1 border-black my-4' />
            <div className='p-4'>
              <h1 className='text-2xl font-bold mb-3'>Education</h1>
              <div className='mb-6'>
                <p className='text-lg font-medium'>COMSATS University Islamabad, Vehari Campus</p>
                <p className='text-sm'>BS Computer Science (2021-2025)</p>
              </div>
              <div className='mb-6'>
                <p className='text-lg font-medium'>APSACS Mailsi</p>
                <p className='text-sm'>ICS Intermediate in Computer Science (2019-2021)</p>
              </div>
            </div>

            <hr className='border-1 border-black my-4' />
            <div className='p-4'>
              <h1 className='text-2xl font-bold mb-3'>Experience</h1>
              <p className='text-lg'>Frontend Developer Intern - Social Swirl Company <br />(August 2024 - October 2024)</p>
              <ul className='list-disc list-inside'>
                <li>Developed responsive web pages using React.js and Tailwind CSS.</li>
                <li>Collaborated with a team to improve the UI/UX of the main product.</li>
              </ul>
            </div>

            <hr className='border-1 border-black my-4' />
            <div className='p-4'>
              <h1 className='text-2xl font-bold mb-3'>Projects</h1>
              <div>
                <h3 className='text-xl font-medium'>Build Clone of Website</h3>
                <p>
                  Built a fully responsive platform (fidelity website) using React, Tailwind CSS, Redux Toolkit.
                  <br /> Click below to view all Projects:
                </p>
                <a
                  href='https://github.com/sairaatta'
                  className='inline-flex items-center bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out'
                  target='_blank'

                >
                  <FaGithub className='mr-2' />
                  View Projects on GitHub
                </a>

              </div>
            </div>

            <hr className='border-1 border-black my-4' />
            <div className='p-4'>
              <h1 className='text-2xl font-bold mb-3'>Contact</h1>
              <p className='text-base flex items-center'>
                <FaEnvelope className='mr-2' /> Email: sairaatta098@gmail.com
              </p>
              <p className='text-base flex items-center'>
                <FaLinkedin className='mr-2' />
                LinkedIn: <a href='https://www.linkedin.com/in/sairaatta-339481282' target='_blank' className='text-blue-500 underline hover:text-blue-600 ml-1'>linkedin.com/in/sairaatta</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
