import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div className='nav-bar'>
            <div className='nav-left ele'>
                <li>Home</li><p>|</p>
                <li>Social Links</li><p>|</p>
                <li>Skills</li>
            </div>
            <div className='logo'>
                <h1>{props.name}</h1>
            </div>
            <div className='nav-right ele'>
                <li>Experiance</li><p>|</p>
                <li>Projects</li><p>|</p>
                <li>Resume</li>
            </div>
        </div>
    )
}

export default Navbar