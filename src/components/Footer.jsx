import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-customDarkBlue text-gray-400 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl text-white font-bold mb-2 animate-fadeIn ">SAIRA ATTA PORTFOLIO</h3>
            <p className="text-sm m-4">Frontend Developer | Designer </p>
            <p className="text-sm mt-1 m-4">Contact: sairaatta098@gmail.com</p>
          </div>
          
          <div className="flex space-x-6 ">
            <a href="https://www.linkedin.com/in/sairaatta-339481282" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={28} />
            </a>
            <a href="https://github.com/sairaatta" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaGithub size={28} />
            </a>
            <a href="mailto:sairaatta098@gmail.com" className="hover:text-white">
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sairaatta. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
