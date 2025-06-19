import React from "react";
import "../Styles/StyleSection.css";
import EpilepsyOne from "../Sections/Epilepsy/EpilepsyOne/EpilepsyOne";
import EpilepsyTwo from "../Sections/Epilepsy/EpilepsyTwo/EpilepsyTwo";
import EpilepsyThree from "../Sections/Epilepsy/EpilepsyThree/EpilepsyThree";
import EpilepsyFour from "../Sections/Epilepsy/EpilepsyFour/EpilepsyFour";
import EpilepsyFive from "../Sections/Epilepsy/EpilepsyFive/EpilepsyFive";
import EpilepsySix from "../Sections/Epilepsy/EpilepsySix/EpilepsySix";
import EpilepsySeven from "../Sections/Epilepsy/EpilepsySeven/EpilepsySeven";
const Epilepsy = () => {
  return (
    <div style={{ backgroundColor: "rgb(106, 44, 145, 0.05)" }}>
      <div className="style-hero-section">
        <EpilepsyOne />
      </div>
      <div className="style-section">
        <EpilepsyTwo />
      </div>
      <div className="style-section">
        <EpilepsyThree />
      </div>
      <div className="style-section">
        <EpilepsyFour />
      </div>
      <div className="style-section">
        <EpilepsyFive />
      </div>
      <div className="style-section">
        <EpilepsySix />
      </div>
      <div className="style-section">
        <EpilepsySeven />
      </div>
    </div>
  );
};

export default Epilepsy;
