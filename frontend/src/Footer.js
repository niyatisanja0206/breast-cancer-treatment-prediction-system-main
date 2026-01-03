import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPhone, 
  faEnvelope 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faFacebook, 
  faTwitter, 
  faInstagram, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <div className="logo-text">
              <h2>Br.<span>Care</span></h2>
            </div>
            <p>
              Empowering patients with accurate breast cancer treatment predictions
              through innovative technology and personalized care.
            </p>
            <div className="contact">
              <p><FontAwesomeIcon icon={faPhone} /> &nbsp; 123-456-7890</p>
              <p><FontAwesomeIcon icon={faEnvelope} /> &nbsp; support@brcapredict.com</p>
            </div>
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section resources">
            <h2>Resources</h2>
            <ul>
              <li><Link to="/treatment-guide">Treatment Guide</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/research">Research</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} BrCaPredict. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/privacy_policy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    );
};