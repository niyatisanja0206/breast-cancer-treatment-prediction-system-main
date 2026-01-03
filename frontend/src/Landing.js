import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./CSS/Landing.css"
import "bootstrap"
import ic1 from "./Assets/bcs-landing-ic1.png"
import ic2 from "./Assets/bcs-landing-ic2.png"
import ic3 from "./Assets/bcs-landing-ic3.png"

export default function Landign() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <>
            <header className={`landing-header ${scrolled ? 'glass-header' : ''}`}>
                <div className="landing-logo">
                    <h1>Br.<span>Care</span></h1>
                </div>
                <div className="landing-auth">
                    <Link to="/login" className="btn btn-secondary landing-btn">Log In</Link>
                    <Link to="/signup" className="btn btn-primary landing-btn">Sign Up</Link>
                </div>
            </header>
            <div className="landing-container">
                <div className="overlay">
                    <div className="landing-content">

                        <h1>Br.Care</h1>
                        <p>Advanced prediction tool using Machine Learning to help Breast Cancer Patients with treatment recommendations and personalized care</p>

                        <div className="buttons-container">
                            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
                            <Link to="/login" className="btn btn-secondary">Log In</Link>
                        </div>

                        <div className="features">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <img src={ic1} alt="Accurate Predictions" />
                                </div>
                                <h3>Accurate Predictions</h3>
                                <p>Utilizing advanced machine learning algorithms for high accuracy</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <img src={ic2} alt="Accurate Predictions" />
                                </div>
                                <h3>Secure Data</h3>
                                <p>Your patient data is encrypted and securely stored</p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">
                                    <img src={ic3} alt="Accurate Predictions" />
                                </div>
                                <h3>Research-Based</h3>
                                <p>Treatment recommendations based on latest clinical research</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};