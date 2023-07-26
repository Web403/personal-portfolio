import React from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './component/Home';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Sociallinks from './component/social_links/Sociallinks';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';

const App = () =>{
    return(
        <BrowserRouter>
            <Navbar name='Welcome'/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Links' element={<Sociallinks/>} />
                <Route path='/Skills' element={<Skills/>}/>
                <Route path='/projects' element={<Projects/>}/>
            </Routes>
            <Sociallinks/>
            <Skills/>
            <Projects/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App