import React from 'react'

import "./FooterStyles.css"
import { FaFacebook, FaHome, FaInstagram, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>At.kolgaon,Po.Sasawane,Near maruti temple.</p>
                            <p>Alibag,Raigad-Maharashtra.</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <p>7767915136</p>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <p>developerjohn07@gmail.com</p>
                    </div>
                </div>
                <div className="right">
                    <h4>About Company</h4>
                    <p>This is Jayesh Mhatre, passionate freelancer offering your services, e.g., web development. Committed to delivering high-quality work tailored to client needs, with a focus on creativity, efficiency, and professionalism. Let's bring your vision to life!</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer