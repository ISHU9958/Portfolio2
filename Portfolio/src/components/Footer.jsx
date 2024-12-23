import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (

        <div className="footermain">
            <footer className="footer-container">
                <div className="social-media-icons info">
                    <i className="fa-brands fa-github icon" onClick={() => {
                        const link = document.createElement('a');
                        link.href = `https://github.com/ISHU9958`;
                        link.target = '_blank'
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
                <div className="footer-bottom">
                    <p>© 2024 Ishu | All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
