import React from 'react';
import Hero from '../assets/images/hero.jpg';
import Navbar from './Navbar';

const AboutMe = () => {
  return (
    <>
      <section className='bg-cyan-950 text-white bg-center bg-cover bg-no-repeat min-h-screen w-full'
        style={{ backgroundImage: `url(${Hero})` }}
      >

        <Navbar />
        <div className='px-4 sm:px-6 md:px-16 lg:px-80 py-10 sm:py-16 md:py-20 lg:py-32'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 mb-6 transition duration-500 ease-in-out transform hover:scale-105 animate-fadeIn'>
            ABOUT ME
          </h1>
          <p className='text-base sm:text-lg md:text-xl font-mono leading-relaxed max-w-full text-justify transition duration-700 ease-in-out opacity-95 hover:bg-opacity-100 animate-slideUp'>
            I'm currently a 7th Semester Student at COMSATS University Islamabad, Vehari Campus. I'm passionate about Frontend Development and seeking opportunities in Software Development. I have a strong foundation in web technologies such as HTML, CSS, JavaScript, and modern libraries like React.js.
            <br /><br />
            I enjoy turning complex problems into simple and intuitive designs, and I believe in writing clean, maintainable code. Additionally, I'm constantly learning and staying up to date with the latest industry trends and technologies to improve my skills.
            <br /><br />
            In my free time, I explore new frameworks, contribute to open-source projects, and work on personal projects to enhance my portfolio. I'm excited to collaborate with teams that share a vision for innovative solutions and a passion for technology.
          </p>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
