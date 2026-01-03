import React from 'react';
import './CSS/Privacy Policy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last Updated: April 7, 2025</p>

        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to the Breast Cancer Treatment Prediction Tool. We understand that your health data is extremely personal and sensitive. 
            This Privacy Policy outlines how we collect, use, store, and protect your information when you use our services.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>
            To provide you with accurate treatment predictions, we may collect the following types of information:
          </p>
          <ul>
            <li>Personal identifiers (name, email address, date of birth)</li>
            <li>Medical history related to breast cancer diagnosis</li>
            <li>Diagnostic test results</li>
            <li>Treatment history</li>
            <li>Genetic information, if provided</li>
            <li>Technical data (IP address, browser type, device information)</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>
            We use your information solely for the following purposes:
          </p>
          <ul>
            <li>To generate treatment prediction recommendations</li>
            <li>To improve our prediction algorithms</li>
            <li>To secure and maintain our services</li>
            <li>To communicate with you about your account and results</li>
          </ul>
          <p className="data-commitment">
            <strong>Our Commitment:</strong> We do not misuse your data. Your health information will never be sold, rented, or traded to third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement strict security measures to protect your information:
          </p>
          <ul>
            <li>End-to-end encryption for all data transfers</li>
            <li>Secure database storage with restricted access</li>
            <li>Regular security audits and vulnerability testing</li>
            <li>Staff training on data privacy and security protocols</li>
            <li>Anonymization of data used for research purposes</li>
          </ul>
        </section>

        <section>
          <h2>Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to provide you with our services and as required by law. You may request deletion of your data at any time through your account settings.
          </p>
        </section>

        <section>
          <h2>Information Sharing</h2>
          <p>
            We may share your information under the following limited circumstances:
          </p>
          <ul>
            <li>With your healthcare providers, only with your explicit consent</li>
            <li>With service providers who help us operate our platform (all bound by confidentiality agreements)</li>
            <li>For research purposes, only in anonymized or aggregated form</li>
            <li>When required by law or to protect our legal rights</li>
          </ul>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Delete your information</li>
            <li>Restrict or object to certain processing activities</li>
            <li>Download a copy of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or for legal reasons. We will notify you of any significant changes through the email address associated with your account or via a notice on our website.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="contact-info">
            <p>privacy@breastcancerprediction.example.com</p>
            <p>Data Protection Officer</p>
            <p>Breast Cancer Treatment Prediction Tool</p>
            <p>123 Healthcare Avenue</p>
            <p>Medical District, MD 12345</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;