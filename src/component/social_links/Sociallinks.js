import React from 'react'
import './Sociallinks.css'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'

function Sociallinks() {
  return (
    <div className='social-links'>
      <h1>Social Links</h1>
      <div className='links-container'>
        <a target='_blank' href='https://instagram.com/omkar_sonawane_23'><FaInstagramSquare size={90} className='icons instagram'/></a>
        <a target='_blank' href='https://twitter.com/OmkarSonawane23'><FaTwitterSquare size={90} className='icons twitter'/></a>
        <a target='_blank' href='https://github.com/Web403'><FaGithubSquare size={90} className='icons github'/></a>
        <a target='_blank' href='https://www.linkedin.com/in/omkar-sonawane-0663a0257/'><FaLinkedin className='icons linkedin' size={90}/></a>
      </div>
    </div>
  )
}

export default Sociallinks