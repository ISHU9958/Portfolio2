import React from 'react'
import '../styles/About.css';
import overviewImage from '../assets/overview.png';

const About = () => {
  return (

    <div className="main">


      <div className='about-container'>


        <div className="overview-image">
          <img src={overviewImage} alt="No Image" className='overview-img' />
        </div>
        <div className="overview-text">
          <h1 className="overview" style={{ textAlign: 'center' }}>Overview</h1>
          <hr className="styled-hr" />

          <p>
            Greetings, I'm Ishu, a passionate MERN stack developer with a strong foundation in Data Structures and Algorithms (DSA). My expertise lies in creating full-stack web applications that seamlessly integrate user-friendly front-end designs with efficient and scalable back-end architectures. Leveraging the power of the MERN stack—MongoDB, Express.js, React, and Node.js—I deliver dynamic solutions tailored to diverse user needs.
          </p>

          <p>
            Beyond web development, my proficiency in DSA enables me to tackle complex coding challenges, optimize performance, and implement effective problem-solving techniques. By staying up-to-date with industry trends and best practices, I ensure my projects are innovative, efficient, and future-proof. I am committed to delivering exceptional, user-focused applications and exceeding expectations in every endeavor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
