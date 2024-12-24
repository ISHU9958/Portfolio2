import React, { useEffect, useState } from 'react'
import '../styles/Home.css'
import MyPhoto from '../assets/MyPhoto.png';
import resumePdf from '../assets/IshuResume.pdf';
import Typewriter from 'typewriter-effect';
const Home = () => {

    

    
    const handleResumeDownload = () => {
    
        const link = document.createElement('a');
        link.href = `${resumePdf}`;
        link.download = 'Ishu_Resume.pdf'; 
        link.click(); // Trigger the download
    };

    const handleContact = () => {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({
            behavior: 'smooth', 
            block: 'start',
        });
    };

    return (
        <div className='home-container'>
            <div className="info-container">
                <h1 className='first-heading info'>Hi, It's <span style={{ color: '#ea580c' ,fontFamily:'cursive'}}>Ishu</span></h1>
                <h4 className='second-heading info'>
                    <span>I'm a</span> 
                    <h2 className='typewriter-text'>
                        <Typewriter
                            options={{
                                strings: [`Software Engineer!`, `Mern Developer!`],
                                autoStart: true,
                                loop: true,

                            }}
                        />
                    </h2>
                </h4>
                <div className="social-media-icons info">
                    <i className="fa-brands fa-github icon" onClick={()=>{
                        const link = document.createElement('a');
                        link.href = `https://github.com/ISHU9958`;
                        link.target='_blank'
                        link.click(); 
                    }}></i>
                    <i className="fa-brands fa-linkedin icon" onClick={() => {
                        const link = document.createElement('a');
                        link.href = `https://www.linkedin.com/in/ishu-0aa66b263/`;
                        link.target = '_blank'
                        link.click();
                    }}></i>
                    <i className="fa-brands fa-instagram icon" onClick={() => {
                        const link = document.createElement('a');
                        link.href = `https://www.instagram.com/ishu.aggarwal9958/`;
                        link.target = '_blank'
                        link.click();
                    }}></i>
                    <i className="fa-brands fa-twitter icon" onClick={() => {
                        const link = document.createElement('a');
                        link.href = `https://x.com/ISHUAGG94687589`;
                        link.target = '_blank'
                        link.click();
                    }}></i>
                </div>
                <div className="btn-contactResume-container info">
                    <button className='my-btn' onClick={handleResumeDownload}>Resume</button>
                    <button className='my-btn' onClick={handleContact}>Contact</button>
                </div>
            </div>
            <div className="photo-container">
                <img src={MyPhoto} className='my-photo' alt="no photo found" />
            </div>
        </div>
    )
}

export default Home
