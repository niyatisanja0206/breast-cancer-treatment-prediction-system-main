import "./CSS/Contact.css"
import "bootstrap"
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
      const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill out all required fields.'
      });
      return;
    }
    
    // In a real application, you would send the form data to your backend here
    // This is just a simulation for demonstration purposes
    setFormStatus({
      submitted: true,
      error: false,
      message: 'Thank you for your message. We will get back to you soon!'
    });
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <main>
        <section className="hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Have questions about our breast cancer treatment prediction platform? We're here to help.</p>
          </div>
        </section>

        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Get in Touch</h2>
                <p>We value your feedback and inquiries. Our team is committed to improving breast cancer treatment outcomes through innovative technology.</p>
                
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="info-details">
                      <h3>Our Location</h3>
                      <p>123 Medical Center Drive<br />San Francisco, CA 94143</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="info-details">
                      <h3>Phone Number</h3>
                      <p>(555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="info-details">
                      <h3>Email Address</h3>
                      <p>info@breastcareai.com</p>
                    </div>
                  </div>
                  
                  <div className="info-item">
                    <div className="info-icon">
                      <FontAwesomeIcon icon={faClock} />
                    </div>
                    <div className="info-details">
                      <h3>Office Hours</h3>
                      <p>Monday - Friday: 9am - 5pm<br />Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="social-connect">
                  <h3>Connect With Us</h3>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                    <a href="https://www.twitter.com/" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="https://www.linkedin.com/" className="social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    <a href="https://www.instagram.com/" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-container">
                <h2>Send us a Message</h2>
                {formStatus.submitted && (
                  <div className="form-success">
                    {formStatus.message}
                  </div>
                )}
                
                {formStatus.error && (
                  <div className="form-error">
                    {formStatus.message}
                  </div>
                )}
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};