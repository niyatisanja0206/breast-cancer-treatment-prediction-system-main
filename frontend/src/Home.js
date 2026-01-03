import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';
// Import FontAwesome if you've installed it
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChartLine, 
  faUserMd, 
  faClipboardCheck, 
  faHeartbeat,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import hero from "./Assets/bcs-img1.png"

export default function Home() {
      return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Personalized Breast Cancer Treatment Predictions</h1>
          <p>
            Using advanced ML algorithms to help patients and healthcare providers
            make informed decisions about breast cancer treatment options.
          </p>
          <div className="hero-buttons">
            <Link to="/Condition" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/About" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          {/* Placeholder for hero image */}
          <div className="image-placeholder">
            <div className="inner-placeholder">
              <span><img src={hero} alt="Hero-image"/></span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-item">
          <h3>95%</h3>
          <p>Accuracy for Predicting Conditions</p>
        </div>
        <div className="stat-item">
          <h3>90-95%</h3>
          <p>Accuracy for Predicting Alternative Treatment</p>
        </div>
        <div className="stat-item">
          <h3>80-85%</h3>
          <p>Accuracy for Predicting Treatment Plan</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>How It Works</h2>
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faClipboardCheck} />
            </div>
            <h3>Input Your Condition</h3>
            <p>
              Enter your medical details and diagnostic information to help our
              system understand your specific condition.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faChartLine} />
            </div>
            <h3>AI Analysis</h3>
            <p>
              Our advanced AI algorithms analyze your data against thousands of
              similar cases and latest research findings.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faUserMd} />
            </div>
            <h3>Treatment Options</h3>
            <p>
              Receive personalized treatment recommendations that you can discuss
              with your healthcare provider.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FontAwesomeIcon icon={faHeartbeat} />
            </div>
            <h3>Ongoing Support</h3>
            <p>
              Track your progress and receive updated recommendations as your
              treatment journey progresses.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="quote">"</div>
            <p>
              The treatment prediction gave me options I hadn't even discussed with my doctor.
              It helped me ask the right questions and feel more in control of my treatment journey.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Sarah Johnson</h4>
                <p>Breast Cancer Survivor</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote">"</div>
            <p>
              As an oncologist, I appreciate how this tool helps patients understand their options.
              It makes our consultations more productive and empowers shared decision-making.
            </p>
            <div className="testimonial-author">
              <div className="author-avatar"></div>
              <div className="author-info">
                <h4>Dr. Michael Chen</h4>
                <p>Oncologist</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Find Your Personalized Treatment Plan?</h2>
          <p>
            Take the first step towards informed treatment decisions for breast cancer.
            Our AI-powered system is here to help you understand your options.
          </p>
          <Link to="/Treatment_plan" className="btn btn-primary">
            Start Now <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </section>
    </div>
  );
};