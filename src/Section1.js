import React from 'react'
import './Section1.css'
import { useState } from 'react';

const Section1 = () => {
    const [header, setHeader] = useState('Build The Community Your Fans Will Love')
    const handleClick = () =>{
        setHeader("Let's get Started")
    }


    return (
        <div className='section1'>
            <h1> {header} </h1>
            <p>Huddle re-imagines the way we build Communities. You have a 
            voice, but so does your audience.Create connections with your
            users as you engage in genuine discussion.</p>
            <button onClick={handleClick} >Get Started For Free</button>
        </div>
    )
}

export default Section1
