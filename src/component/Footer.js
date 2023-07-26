import React from 'react'
import './Footer.css'
// import { AiOutlineVerticalAlignTop } from 'react-icons/ai'

function Footer() {
  return (
    <div className='Footer'>
      {/* <div id='gototop'>
        <AiOutlineVerticalAlignTop />
      </div> */}
      <div className='footer-left'>
        <h2>Links</h2>
        <div>
          <li>Home</li>
          <li>Social Links</li>
          <li>Skills</li>
        </div>
      </div>
      <div className='footer-mid'><h1>Thank You</h1></div>
      <div className='footer-right'>
        <h2>Activity</h2>
        <div>
          <li>Experiance</li>
          <li>Project</li>
          <li>Resume</li>
        </div>
      </div>
    </div>
  )
}

export default Footer