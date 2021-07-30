import React from 'react'
import Hero from '../hero/Hero'
import AboutUs from '../about_us/AboutUs'
import HowWorks from '../how_works/HowWorks'
import GetStarted from '../get_started/GetStarted'
import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="sections">
                <Hero />
                <hr></hr>
                <AboutUs />
                <hr></hr>
                <HowWorks />
                <hr></hr>
                <GetStarted />
            </div>
        </div>
    )
}

export default Home


