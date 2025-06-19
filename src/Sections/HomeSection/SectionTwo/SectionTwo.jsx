import React from "react";
import "../SectionTwo/SectionTwo.css";

const SectionTwo = () => {
  return (
    <section className="pt-5">
      <div className="container mt-5">
        <div className="row align-items-start">
          {/* Text Section */}
          <div className="col-lg-6 col-md-12 mb-4">
            <h1
              className="title-p mt-4"
              style={{ color: "#333", fontSize: "50px" }}
            >
              About Neurofy
            </h1>
            <h5 className="body-text info">
              Neurofy is a revolutionary healthcare solution designed to predict
              epileptic seizures in real time. By integrating Artificial
              Intelligence of Things (AIoT), Neurofy empowers patients,
              caregivers, and healthcare professionals with timely alerts and
              insights.
            </h5>
          </div>

          {/* Feature Boxes */}
          <div className="col-lg-6 col-md-12">
            <div className="row justify-content-center">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="key-feature text-center my-3">
                  Real-time seizure alerts
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div className="key-feature text-center my-3">
                  Medication Reminders
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div className="key-feature text-center my-3">
                  Seizure History tracking
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div className="key-feature text-center my-3">
                  Location Tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
