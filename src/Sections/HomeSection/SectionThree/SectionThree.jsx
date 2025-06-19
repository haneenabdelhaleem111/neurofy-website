import React from "react";
import "./SectionThree.css";

const SectionThree = () => {
  return (
    <section className="sectionTwo py-5 mt-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* Left Column */}
          <div className="col-lg-4 col-md-6 mb-4 div-one pt-5">
            <div className="step mt-3 mb-3">
              <h4>
                <span className="step-title">Step 1:</span> EEG Data Collection
              </h4>
              <h6 className="body-text">
                A lightweight, wearable EEG headband collects brainwave signals
                from the FP2-F8 channel in real time.
              </h6>
            </div>
            <div className="step mt-3 mb-3">
              <h4>
                <span className="step-title">Step 2:</span> Signal Amplification
                & Preprocessing
              </h4>
              <h6 className="body-text">
                Neurofy’s hardware amplifies the EEG data and cleans it to
                eliminate noise for better accuracy.
              </h6>
            </div>
            <div className="step mt-3 mb-3">
              <h4>
                <span className="step-title">Step 3:</span> Machine Learning
                Analysis
              </h4>
              <h6 className="body-text">
                Our AI models analyze EEG patterns to predict seizures before
                they happen.
              </h6>
            </div>
          </div>

          {/* Middle Circle Column */}
          <div className="col-lg-4 col-md-12 mb-5 text-center">
            <div className="div-two mx-auto">
              <h1 className="title-p div-two-title">How Neurofy works?</h1>
              <h5 className="body-text div-two-para">
                Your Brain speaks, Neurofy listens
              </h5>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 col-md-6 mb-4 div-three">
            <div className="step mt-3 mb-3">
              <h4>
                <span className="step-title">Step 4:</span> Backend Integration
              </h4>
              <h6 className="body-text">
                Secure cloud infrastructure handles data processing, device
                synchronization, and continuous updates.
              </h6>
            </div>
            <div className="step mt-3 mb-3">
              <h4>
                <span className="step-title">Step 5:</span> Mobile Application
              </h4>
              <h6 className="body-text">
                A user-friendly mobile app displays live brain activity, medical
                history, and pushes alerts to patients and caregivers.
              </h6>
            </div>
            <div className="step mt-3 mb-3">
              <h4>
                <span className="step-title">Step 6:</span> Instant Alerts
              </h4>
              <h6 className="body-text">
                If a seizure is predicted, real-time notifications are sent to
                caregivers, family members, and healthcare providers.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
