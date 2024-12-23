import React, { useState } from 'react';
import '../styles/Contact.css';
import {message} from 'antd';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  // const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setStatus('Sending...');

    // Form submission via Formspree
    fetch('https://formspree.io/f/xeooqvbr', {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      })
    })
      .then((response) => {
        if (response.ok) {
          message.success('Message Sent Successfully!');
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } else {
          message.error('Failed to send message.');
        }
      })
      .catch(() => message.error('Failed to send message.'));
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1 className="contact-heading">
          Contact <span className="highlight">Me</span>
        </h1>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xeooqvbr" // Use your Formspree endpoint here
          method="POST"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="contact-input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contact-input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="contact-input"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Subject"
            className="contact-input"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-button">
            Send Message
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
