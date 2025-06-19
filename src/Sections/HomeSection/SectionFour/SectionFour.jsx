import React from "react";
import "./SectionFour.css";
const SectionFour = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center">
          <h1
            className="title-p mt-5 mb-5 pb-3 pt-5"
            style={{ color: "#333", fontSize: "50px" }}
          >
            Neurofy App Users
          </h1>
        </div>
        <div className="row justify-content-center mb-5 mt-5">
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0">
            <div className="patient px-3 w-90">
              <img
                src="/images/epilepsy (2).png"
                alt="patient"
                className="group-icon"
              />
              <h3>Patients</h3>
              <ul className="body-text mt-2">
                <li>Sending alert before seizure</li>
                <li>Medication Reminders</li>
                <li>Adding doctors and caregivers</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center mb-4 mb-md-0 ">
            <div className="doctor px-3 w-90">
              <img
                src="/images/doctor.png"
                alt="doctor"
                className="group-icon"
              />
              <h3>Doctors</h3>
              <ul className="body-text mt-2">
                <li>Access seizure history of the patient</li>
                <li>Access medication dosses</li>
                <li>Follow up with different patients</li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center">
            <div className="caregiver px-3  w-90">
              <img
                src="/images/caregiver.png"
                alt="caregiver"
                className="group-icon"
              />
              <h3>Caregivers</h3>
              <ul className="body-text mt-2">
                <li>Access location of the patient</li>
                <li>Access medication reminders</li>
                <li>Help how to deal with patient</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
