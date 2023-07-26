import React from 'react'
import './Home.css'
// import back from './back3.png'

function Home() {
    return (
        <div className='Container'>
            <div className='main-image'>
                <img alt='Background imge'></img>
            </div>
            <div className='main-text'>
                <h1 id='name'>Omkar Sonawane</h1><br></br>
                <div className='description'>
                    <p id='descr'>Motivated computer science Second-year student seeking a challenging
                        internship opportunity to gain hands-on experience and contribute to innovative
                        projects. Eager to apply my technical skills, problem-solving abilities, and strong
                        work ethic to a dynamic and collaborative team environment.</p>
                </div>
            </div>
        </div>
    );
}

export default Home