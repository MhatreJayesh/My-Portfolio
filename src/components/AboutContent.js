import './AboutContentStyles.css';
import { Link } from 'react-router-dom';

import React from 'react'

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left" >
                <h1>Who Am I?</h1>
                <p>I'm a full-stack dot net developer. I create responsive secure websites for my clients.</p>
                <Link to="/contact" className="btn">Contact</Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="image-stack top">
                        <img src="../assets/top-img.jpg" className='img' alt="img1" />
                    </div>
                    <div className="image-stack bottom">
                        <img src="../assets/bottom-img.webp" className='img' alt="img1" />
                    </div>
                </div> 
            </div>
        </div>
    )
}


export default AboutContent