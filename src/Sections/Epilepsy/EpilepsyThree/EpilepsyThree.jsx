import React from "react";
import "./EpilepsyThree.css";
const EpilepsyThree = () => {
  return (
    <section className="container">
      <div className="text-center pb-5">
        <h1 className="title-p" style={{ color: "#333" }}>
          Types of Seizures
        </h1>
        <p
          className="body-text"
          style={{ fontSize: "18px", color: "#333333ae" }}
        >
          Seizures are classified into different types based on where they start
          in the brain and how they
          <br /> affect consciousness and movement.
        </p>
      </div>
      {/*three cards starts here*/}
      <div className="div-box-container d-flex">
        {/*div-one starts here*/}
        <div className="seizure-type-div me-3">
          <h3 className="seizure-type-title title-p">
            <img
              src="/ImagesCompressed/flash-rounded.webp"
              alt="flash-rounded"
              style={{ margin: "3px 7px 7px", height: "28px" }}
            />
            Focal Seizures
            <p className="seizure-type-info">Start in one are of the brain</p>
          </h3>

          <p className="seizure-type-sent">
            Previously called partial seizures, these begin in a specific area
            of the brain and may or may not affect consciousness.
          </p>
          <ul>
            <li className="seizure-type-list-point">
              Simple focal seizures (aware)
            </li>
            <li className="seizure-type-list-point">
              Complex focal Seizures (impaired awarness)
            </li>
            <li className="seizure-type-list-point">
              May spread to become generalized
            </li>
          </ul>
        </div>
        {/*div-two starts here*/}
        <div className="seizure-type-div me-3">
          <h3 className="seizure-type-title title-p">
            <img
              src="/ImagesCompressed/brain-rounded.webp"
              alt="flash-rounded"
              style={{ margin: "3px 7px 7px", height: "28px" }}
            />
            Generalized Seizures
            <p className="seizure-type-info">Affect both sides of the brain</p>
          </h3>

          <p className="seizure-type-sent">
            Begin on both sides of the brain simultaneously and typically
            involve loss of consciousness.
          </p>
          <ul>
            <li className="seizure-type-list-point">
              Tonic-clonic (grand mal)
            </li>
            <li className="seizure-type-list-point">Absence (petit mal)</li>
            <li className="seizure-type-list-point">Myoclonic seizures</li>
          </ul>
        </div>
        {/*div-three starts here*/}
        <div className="seizure-type-div me-3">
          <h3 className="seizure-type-title title-p">
            <img
              src="/ImagesCompressed/warning-rounded.webp"
              alt="flash-rounded"
              style={{ margin: "3px 7px 7px", height: "28px" }}
            />
            Unknown Onset
            <p className="seizure-type-info">Origin cannot be determined</p>
          </h3>

          <p className="seizure-type-sent">
            When the beginning of a seizure is not witnessed or seen on EEG,
            it's classified as unknown onset.
          </p>
          <ul>
            <li className="seizure-type-list-point">
              May be reclassified later
            </li>
            <li className="seizure-type-list-point">
              Treatment approach similar
            </li>
            <li className="seizure-type-list-point">
              Requires further evaluation
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EpilepsyThree;
