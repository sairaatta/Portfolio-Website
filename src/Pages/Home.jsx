import React from 'react'
import Hero from '../assets/images/hero.jpg';
import Navbar from '../components/Navbar';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importing icons


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
const Home = () => {
    return (
        <>
            {/* hero section */}
            <section className='bg-customDarkBlue bg-cover bg-no-repeat  bg-center text-white w-full min-h-screen'
                style={{ backgroundImage: `url(${Hero})` }}
            >
                <Navbar />
                <div className='px-4 sm:px-8 md:px-16 py-20 md:py-32'>
                    <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-mono mb-4'>Hello! </h1>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-full sm:w-10/12  md:w-8/12 leading-snugs mb-4'>I'm <span className='text-yellow-500 font-serif animate-slideUp'>SAIRA ATTA</span></h1>
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl  font-mono animate-fadeIn '>Passionate Frontend Developer </p>
                    <div className='mt-8 flex flex-col sm:flex-row'>
                        <button className='mb-4 sm:mb-0 sm:mr-4 px-8 sm:px-8 py-3 w-full sm:w-2/5 md:w-1/3 lg:w-1/6 rounded-lg outline-none bg-yellow-600 hover:-translate-y-1 transition-transform hover:bg-yellow-700 animate-fadeIn'>
                            Hire Me
                        </button>
                        <button className='px-8 sm:px-8 py-3 rounded-lg border-2 w-full sm:w-2/5 md:w-1/3 lg:w-1/6 border-yellow-600 bg-transparent hover:-translate-y-1 transition-transform animate-fadeIn'>
                            My Work
                        </button>
                    </div>
                </div>
                {/* aboutme section */}
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
                {/* skill sets */}
                <div className='px-4 sm:px-6 md:px-16 lg:px-80 py-10 sm:py-16 md:py-20 lg:py-32'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-serif text-yellow-500 mb-6 transition duration-500 ease-in-out transform hover:scale-105 animate-fadeIn'>MY SKILLS </h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {skillSets.map((skill, index) => (
                            <div key={index} className='bg-gray-300 text-black p-10 m-2 rounded-lg shadow-inner shadow-black transition animate-slideUp duration-500 ease-in-out hover:text-black transform hover:scale-105 hover:bg-yellow-600'>
                                <h1 className='text-3xl font-semibold mb-4'> {skill.name} </h1>
                                <p className='text-xl '> {skill.description} </p>
                            </div>
                        ))}
                    </div>
                </div>
              


            </section>





        </>
    )
}

export default Home