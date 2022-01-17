import React from 'react'
import './Home.css'
import Navbar from './Navbar'
import Section1 from './Section1'
import Lastsection from './Lastsection'

const Home = () => {
    return (
        <div className='Total'>
            <Navbar></Navbar>
            <Section1/>
            <Lastsection/>
            
        </div>
    )
}

export default Home
