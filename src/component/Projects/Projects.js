import React from 'react'
import './Projects.css'

function Projects() {
    return (
        <div className='Projects'>
            <h1>Projects</h1>
            <div className='project-block'>
                <div className='project-header'>
                    <h2>YouTube Bot</h2><p>- Project Under GSSOC (March-2023)</p>
                </div>
                <p>Contributed On This Project under Gssoc(Girlscript Summer Of Code)
                    This Is simple Youtube Bot That Uses YouTube api.
                    This Bot Can Search, Extract Tag and Play Video In Console.</p>
            </div>
            <div className='project-block'>
                <div className='project-header'>
                    <h2>Coffee Shop</h2><p>- Self Made Project (April-2023)</p>
                </div>
                <p>This Is a Simple Reactjs Project.
To Make Beautiful Frontend Page</p>
            </div>
        </div>
    )
}

export default Projects