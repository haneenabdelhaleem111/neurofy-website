import React from "react";
import "../Styles/StyleSection.css";
import HeroSection from "../Sections/HomeSection/HeroSection/HeroSection";
import SectionOne from "../Sections/HomeSection/SectionOne/SectionOne";
import SectionTwo from "../Sections/HomeSection/SectionTwo/SectionTwo";
import SectionThree from "../Sections/HomeSection/SectionThree/SectionThree";
import SectionFour from "../Sections/HomeSection/SectionFour/SectionFour";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <div className="style-section">
        <SectionOne />
      </div>
      <div className="style-section">
        <SectionTwo />
      </div>
      <div className="style-section">
        <SectionThree />
      </div>
      <SectionFour />
    </React.Fragment>
  );
};

export default Home;
