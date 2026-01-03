import "./CSS/About.css"
import "bootstrap"
import person1 from "./Assets/person1.jpg"
import person2 from "./Assets/person 2.jpg"
import person3 from "./Assets/person 3.jpg"
import person4 from "./Assets/person 4.jpg"

export default function About() {
    return (
    <div className="about-page">
      <main>
        <section className="hero">
          <div className="container">
            <h1>About Us</h1>
            <p>Advancing breast cancer treatment through technology and innovation</p>
          </div>
        </section>

        <section className="about-content">
          <div className="container">
            <div className="mission">
              <h2>Our Mission</h2>
              <p>At BreastCareAI, we're dedicated to improving breast cancer treatment outcomes through advanced predictive analytics. Our mission is to provide healthcare professionals with accurate, timely predictions that can help personalize treatment plans and improve patient outcomes.</p>
            </div>

            <div className="about-grid">
              <div className="about-card">
                <div className="icon">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Data-Driven Predictions</h3>
                <p>Our platform leverages machine learning algorithms trained on extensive clinical data to provide evidence-based treatment recommendations.</p>
              </div>
              
              <div className="about-card">
                <div className="icon">
                  <i className="fas fa-user-md"></i>
                </div>
                <h3>Supporting Healthcare Providers</h3>
                <p>We aim to be a valuable tool for oncologists and healthcare professionals, providing insights that complement clinical expertise.</p>
              </div>
              
              <div className="about-card">
                <div className="icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h3>Patient-Centered Approach</h3>
                <p>We believe in personalized medicine that considers each patient's unique circumstances and clinical profile.</p>
              </div>
              
              <div className="about-card">
                <div className="icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h3>Privacy & Security</h3>
                <p>Patient data security is our priority. We implement robust measures to protect sensitive information.</p>
              </div>
            </div>

            <div className="team">
              <h2>Our Team</h2>
              <p>BreastCareAI was developed by a multidisciplinary team of healthcare professionals, data scientists, and software engineers dedicated to improving cancer care outcomes.</p>
              
              <div className="team-grid">
                <div className="team-member">
                  <div className="member-photo"><img src={person3} alt="Person 1"/></div>
                  <h3>Dr. Jane Smith</h3>
                  <p>Oncologist & Medical Director</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"><img src={person2} alt="Person 2"/></div>
                  <h3>Dr. Robert Chen</h3>
                  <p>Data Science Lead</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"><img src={person1} alt="Person 3"/></div>
                  <h3>Sarah Johnson</h3>
                  <p>Software Engineer</p>
                </div>
                <div className="team-member">
                  <div className="member-photo"><img src={person4} alt="Person 4"/></div>
                  <h3>Michael Patel</h3>
                  <p>UI/UX Designer</p>
                </div>
              </div>
            </div>
            
            <div className="research">
              <h2>Our Research</h2>
              <p>Our prediction models are built on peer-reviewed research and continuously improved through feedback from healthcare professionals and new clinical data.</p>
              <div className="research-stats">
                <div className="stat">
                  <h3>95%</h3>
                  <p>Accuracy for Predicting Condition</p>
                </div>
                <div className="stat">
                  <h3>90-95%</h3>
                  <p>Accuracy for Predicting Alternative treatment</p>
                </div>
                <div className="stat">
                  <h3>80-85%</h3>
                  <p>Accuracy for Predicting Treatment plan</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};