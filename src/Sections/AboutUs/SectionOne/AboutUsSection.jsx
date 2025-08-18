import React from "react";
import "./AboutUsSection.css";
import teamImage from "../../../assets/images/team1.webp";
const AboutUsSection = () => {
  return (
    <React.Fragment>
      <section
        className="hero-background d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url(${teamImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "720px",
          width: "fixed",
          position: "relative",
          loading: "lazy",
        }}
      >
        <div className="overlay"></div>
        <div>
          <h1 className="hero-title text-white">About Us</h1>
          <br />
          <h5 className="hero-text text-white">
            "A world where no one fears the uncertainty of epilepsy"
          </h5>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutUsSection;
