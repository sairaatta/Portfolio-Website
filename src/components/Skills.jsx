import React from 'react'
import Hero from '../assets/images/hero.jpg';
import Navbar from './Navbar';

const skillSets = [
  { name: 'HTML5', description: 'Building the structure of modern web applications.' },
  { name: 'CSS', description: 'Styling web pages with modern layouts and animations.' },
  { name: 'JavaScript', description: 'Creating interactive and dynamic user experiences.' },
  { name: 'React.js', description: 'Building efficient and scalable UI components.' },
  { name: 'Tailwind CSS', description: 'Utility-first framework for rapid UI development.' },
  { name: 'Bootstrap', description: 'Creating responsive and modern layouts with pre-built components.' },
  { name: 'C++', description: 'Problem-solving and software development with object-oriented programming.' },
  { name: 'Git', description: 'Version control for managing and collaborating on code projects.' },
  { name: 'React Hooks', description: 'Efficient state and lifecycle management in functional components.' },
  { name: 'Frontend Designs', description: 'Crafting visually appealing and user-friendly interfaces.' },
  { name: 'Machine Learning', description: 'Using algorithms and data to build predictive models and intelligent systems.' },
  { name: 'MySQL', description: 'Managing and querying relational databases for efficient data storage and retrieval.' }

];


const Skills = () => {

  return (
    <>
      <section className='bg-cyan-950 text-white bg-center bg-cover bg-no-repeat min-h-screen w-full'
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <Navbar />
        <div className='px-4 sm:px-6 md:px-16 lg:px-80 py-10 sm:py-16 md:py-20 lg:py-32'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 mb-6 transition duration-500 ease-in-out transform hover:scale-105 animate-fadeIn'>MY SKILLS </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
            {skillSets.map((skill, index) => (
              <div key={index} className='bg-gray-300   text-black p-10 m-2 rounded-lg shadow-inner shadow-black transition duration-500 ease-in-out hover:text-black transform hover:scale-105 hover:bg-yellow-600 animate-slideUp'>
                <h1 className='text-3xl font-semibold mb-4'> {skill.name} </h1>
                <p className='text-xl '> {skill.description} </p>
              </div>
            ) )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills