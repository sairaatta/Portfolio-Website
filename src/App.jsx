import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Home from './Pages/Home';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/ContactMe';


const App = () => {

  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <div className='flex flex-grow'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/aboutme' element={<AboutMe/>}></Route>
            <Route path='/skills' element={<Skills/>}></Route>
            <Route path='/resume' element={<Resume/>}></Route>
            <Route path='/contactme' element={<Contact/>}></Route>

          </Routes>
        </div>
        <Footer/>
      </div>
    </Router >
  )
}

export default App