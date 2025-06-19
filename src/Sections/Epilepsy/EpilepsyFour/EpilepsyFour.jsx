import React from "react";
import "./EpilepsyFour.css";
const EpilepsyFour = () => {
  return (
    <section className="container">
      <div className="d-flex">
        <div className="symptoms">
          <h3 className="title-p div-title">Common Symptoms</h3>
          <p className="body-text div-info">
            Seizure symptoms vary widely depending on the type and location in
            the brain.
          </p>
          {/*boxes start here*/}
          <div className="d-flex">
            <div className="box">
              <h5 className="box-title">Physical Symptoms</h5>
              <ul>
                <li className="box-list point">Muscle jerking or stiffening</li>
                <li className="box-list point">Loss of muscle control</li>
                <li className="box-list point">Falling or dropping</li>
                <li className="box-list point">Repetitive movements</li>
              </ul>
            </div>
            <div className="box">
              <h5 className="box-title">Sensory Symptoms</h5>
              <ul>
                <li className="box-list point">Strange tastes or smells</li>
                <li className="box-list point">Visual disturbance</li>
                <li className="box-list point">Hearing changes</li>
                <li className="box-list point">Tingling sensations</li>
              </ul>
            </div>
          </div>
          {/*second two boxes*/}
          <div className="d-flex">
            <div className="box">
              <h5 className="box-title">Cognitive Symptoms</h5>
              <ul className="box-list point">
                <li className="box-list point">Confusion or memory loss</li>
                <li className="box-list point">Difficulty speaking</li>
                <li className="box-list point">Staring spells</li>
                <li className="box-list point">Altered consciousness</li>
              </ul>
            </div>
            <div className="box">
              <h5 className="box-title">Emotional Symptoms</h5>
              <ul>
                <li className="box-list point">Sudden fear or anxiety</li>
                <li className="box-list point">Déjà vu feelings</li>
                <li className="box-list point">Mood changes</li>
                <li className="box-list point">Panic sensations</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="triggers">
          <h3 className="title-p div-title">Common Triggers</h3>
          <p className=" body-text div-info">
            Identifying and avoiding triggers can help reduce seizure frequency.
          </p>
          <div className="table-list">
            <h3 className="box-title">Seizure Triggers</h3>
            <p className="div-info ">Factors that may increase seizure risk</p>
            <ul style={{ listStyle: "none" }}>
              <li className="box-two-list">
                <span style={{ color: "red" }}> • </span>Sleep deprivation
              </li>
              <li className="box-two-list">
                <span style={{ color: "orange" }}> • </span>Stress and anxiety
              </li>
              <li className="box-two-list">
                <span style={{ color: "yellow" }}> • </span>Flashing lights
              </li>
              <li className="box-two-list">
                <span style={{ color: "green" }}> • </span>Missed medications
              </li>
              <li className="box-two-list">
                <span style={{ color: "blue" }}> • </span>Alcohol or drug use
              </li>
              <li className="box-two-list">
                <span style={{ color: "purple" }}> • </span>Hormonal changes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpilepsyFour;
