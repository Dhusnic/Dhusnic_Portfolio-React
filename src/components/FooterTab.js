import React from "react";
import "./FooterTab.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram,faGithub,faLinkedin, faAndroid  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';




export default function FooterTab() {
    return(
        <>
            <div className="footerTab">
                <div className="socialIcon">
                    <div className="iconDiv"><a href="https://www.instagram.com/dhusnic_infant/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="icon" /></a></div>
                    <div className="iconDiv"><a href="https://github.com/Dhusnic" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon" /></a></div>
                    <div className="iconDiv"><a href="https://www.linkedin.com/in/dhusnic-infant-dm/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon" /></a></div>
                    <div className="iconDiv"><a href="mailto:dhusnicinfant@gmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="icon" /></a></div>
                    <div className="iconDiv"><a href="tel:+919894630347"><FontAwesomeIcon icon={faPhoneAlt} className="icon" /></a><div className="phone-number">+91 9894630347</div></div>
                
                    

                </div>
            </div>
        </>
    )
}