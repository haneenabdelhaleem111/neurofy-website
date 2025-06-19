import React from "react";
import "../Styles/StyleSection.css";

import AboutUsSection from "../Sections/AboutUs/SectionOne/AboutUsSection";
import Vision from "../Sections/AboutUs/Vision/Vision";
import TeamSection from "../Sections/AboutUs/TeamMembers/TeamSection";
import AdvisoryBoaard from "../Sections/AboutUs/AdvisoryBoard/AdvisoryBoard";
import Competitions from "../Sections/AboutUs/Competitions/Competitions";

const About = () => {
  return (
    <React.Fragment>
      <AboutUsSection />

      <div className="style-section">
        <Vision />
      </div>
      <div className="style-section">
        <Competitions />
      </div>
      <div className="style-section">
        <TeamSection />
      </div>

      <AdvisoryBoaard />
    </React.Fragment>
  );
};

export default About;
