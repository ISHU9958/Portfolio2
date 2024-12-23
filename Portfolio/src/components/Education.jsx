import React from 'react';
import '../styles/Education.css';

const Education = () => {
  return (
    <div className="education-container" id="education">
      <h1 className="education-tag">Education</h1>
      <div className="education-cards">
        <div className="education-card">
          <div className="card-header">
            <h3>2024 - Present</h3>
            <h4>Delhi Technological University</h4>
          </div>
          <div className="card-body">
            <p>Bachelor of Technology in Computer Science & Engineering (Computer Science Department) with CGPA - 9.7</p>
          </div>
        </div>

        <div className="education-card">
          <div className="card-header">
            <h3>2020 - 2021</h3>
            <h4>Govt. Boys Senior Secondary School</h4>
          </div>
          <div className="card-body">
            <p>Class XII - 94% Affiliated to CBSE</p>
          </div>
        </div>

        <div className="education-card">
          <div className="card-header">
            <h3>2018 - 2019</h3>
            <h4>Govt. Boys Senior Secondary School</h4>
          </div>
          <div className="card-body">
            <p>Class X - 84% Affiliated to CBSE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
