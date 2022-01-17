import React from 'react'
import  './Navbar.css'
import headlogo from './images/headerlogo.jpeg'

const Navbar = () => {
    return (
        <div>
            <div className='headLogo' >
            <div>
                <img src={headlogo} alt='Logo' />
            </div>
            <div>
                <h2>HUDDLE</h2>
            </div>
            <div>
                <button className='btn'>Try it Free</button>
            </div>
            </div>  
        </div>
    )
}

export default Navbar
