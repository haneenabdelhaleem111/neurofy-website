import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-wrapper" id="hero">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side: Text */}
          <div className="text-container col-lg-6 col-md-12 text-white text-center text-lg-start">
            <h1 className="title-p">Freedom Redefined!</h1>
            <p className="body-text">
              Enhancing lives by empowering epilepsy patients and caregivers
              with predictive seizure alerts.
            </p>
            <div className="mt-4 mb-4">
              <button
                className="Button-App btn-lg"
                onClick={() => alert("Coming soon. Stay tuned!")}
              >
                Get Neurofy's band & App
              </button>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="col-lg-6 col-md-12 d-flex justify-content-center">
            <img
              src="/ImagesCompressed/heropic.webp"
              alt="Neurofy Mockup"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
