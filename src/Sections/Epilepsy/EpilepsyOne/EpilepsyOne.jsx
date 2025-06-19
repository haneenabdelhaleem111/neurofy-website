import React from "react";
import "../EpilepsyOne/EpilepsyOne.css";

const EpilepsyOne = () => {
  return (
    <section className="container pt-5">
      <div className="text-center">
        <h1 className="title-p title-cont">Understanding Epilepsy</h1>
        <p className="body-text para-cont">
          Comprehensive information about epilepsy and how Neurofy's headband
          <br />
          technology helps predict seizures.
        </p>
      </div>

      <ul className="d-flex flex-wrap justify-content-center text-start mt-4 list-unstyled custom-list">
        <li className="pt-4 px-3 text-center list-point">
          • 500+ people affected worldwide
        </li>
        <li className="pt-4 px-3 text-center list-point">
          • AI-powered seizure prediction
        </li>
        <li className="pt-4 px-3 text-center list-point">• 24/7 monitoring</li>
      </ul>
    </section>
  );
};

export default EpilepsyOne;
