import React from 'react'
import "./HeroImgStyles.css"

import { Link } from 'react-router-dom'
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="back-img" src='../assets/main-img.jpg' alt="IntroImg" />
            </div>
            <div className='content'>
                <p>HI, I'M A FREELANCER</p>
                <h1>Dot Net Developer.</h1>
                <div>
                    <Link to="/project" className="btn" >PROJECTS</Link>
                    <Link to="/contact" className="btn btn-light" >CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg