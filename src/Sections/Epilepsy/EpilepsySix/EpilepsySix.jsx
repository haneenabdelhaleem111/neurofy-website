import React from "react";
import "../EpilepsySix/EpilepsySix.css";

const EpilepsySix = () => {
  return (
    <section className="section-container-Neurofy pb-5">
      <div className="container">
        <div className="text-center mb-5">
          <h3 className="title-p">Neurofy, Future of Epilepsy Care</h3>
          <p className="body-text" style={{ fontSize: "17px", color: "#333" }}>
            Revolutionary AI-powered headband technology that predicts seizures
            before they
            <br />
            happen, giving you the freedom to live life without limits.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Left Image */}
          <div className="col-lg-6 mb-4 mb-lg-0 text-center">
            <img
              src="/images/Neurofy-people.png"
              alt="people"
              className="img-fluid"
              style={{ maxHeight: "600px", borderRadius: "20px" }}
            />
          </div>

          {/* Right Text and Features */}
          <div className="col-lg-6">
            <div className="mb-4">
              <h4 className="title-p" style={{ fontSize: "32px" }}>
                Transforming Lives Through Innovation
              </h4>
              <p className="body-text" style={{ fontSize: "15px" }}>
                Neurofy combines cutting-edge neuroscience with artificial
                intelligence to create the world's first consumer-grade seizure
                prediction system.
              </p>
            </div>

            <div className="row">
              {/* Feature 1 */}
              <div className="col-6 mb-4">
                <div className="feature-container-box h-100 p-3">
                  <img
                    src="/images/brain-squared.png"
                    alt="AI"
                    style={{ height: "35px" }}
                  />
                  <h5 className="title-p my-2" style={{ fontSize: "18px" }}>
                    AI Prediction
                  </h5>
                  <p className="body-text small" style={{ color: "#333" }}>
                    Advanced algorithms detect pre-seizure patterns
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="col-6 mb-4">
                <div className="feature-container-box h-100 p-3">
                  <img
                    src="/images/exclamation-squared.png"
                    alt="Alert"
                    style={{ height: "35px" }}
                  />
                  <h5 className="title-p my-2" style={{ fontSize: "18px" }}>
                    Instant Alerts
                  </h5>
                  <p className="body-text small" style={{ color: "#333" }}>
                    Real-time notifications to you and caregivers
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="col-6 mb-4">
                <div className="feature-container-box h-100 p-3">
                  <img
                    src="/images/heart-squared.png"
                    alt="Comfort"
                    style={{ height: "35px" }}
                  />
                  <h5 className="title-p my-2" style={{ fontSize: "18px" }}>
                    24/7 Comfort
                  </h5>
                  <p className="body-text small" style={{ color: "#333" }}>
                    Lightweight, comfortable design for all-day wear
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="col-6 mb-4">
                <div className="feature-container-box h-100 p-3">
                  <img
                    src="/images/people-squared.png"
                    alt="Family"
                    style={{ height: "35px" }}
                  />
                  <h5 className="title-p my-2" style={{ fontSize: "18px" }}>
                    Family Connected
                  </h5>
                  <p className="body-text small" style={{ color: "#333" }}>
                    Keep loved ones informed and at peace
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpilepsySix;
