import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className='skills'>
            <h1>Programming Languages</h1>
            <div className='block-container'>
                <div className='skills-block'>
                    <h1>Java</h1>
                </div>
                <div className='skills-block'>
                    <h1>C++</h1>
                </div>
                <div className='skills-block'>
                    <h1>Python</h1>
                </div>
            </div>
            <div className='block-container'>
                <div className='skills-block'>
                    <h1>Data Structures</h1>
                </div>
                <div className='skills-block'>
                    <h1>Algorithm</h1>
                </div>
                <div className='skills-block'>
                    <h1>Problem Solving</h1>
                </div>
            </div>
        </div>
    )
}

export default Skills