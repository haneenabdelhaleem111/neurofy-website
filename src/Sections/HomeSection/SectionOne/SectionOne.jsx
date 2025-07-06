import React from "react";
import { Link } from "react-router-dom";

import "./SectionOne.css";

const SectionOne = () => {
  return (
    <section className="sectionOne py-5">
      <div className="container">
        <h1
          className="text-center mb-3 mt-5 title-p pt-5 "
          style={{ fontSize: "50px", color: "#434343" }}
        >
          Problem Statement
        </h1>
        <p className="body-text text-center mb-5" style={{ color: "#434343" }}>
          Epilepsy is a serious neurological condition that continues to be
          misunderstood <br />
          and underestimated—yet its impact is far-reaching. Explore key facts
          below.{" "}
          <Link
            to="/epilepsy"
            className="link-epilepsy"
            style={{ color: " rgb(106, 44, 145, 0.7)" }}
          >
            Explore Awareness page
          </Link>
        </p>
        <div className="row justify-content-center">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 mb-4 card-one">
            <div className="card h-100 border-0 ">
              <img
                src="/ImagesCompressed/increasing.webp"
                alt="increasing"
                className="icon mx-auto mb-1"
              />
              <h1 className="title-m text-center txt"> Fourth </h1>
              <div className="card-body">
                <p className="card-text-one text-center txt">
                  Most common{" "}
                  <span className="highlight">Neurological Disorder</span>,
                  Epilepsy Foundation
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 mb-4 card-one">
            <div className="card h-100 border-0">
              <img
                src="/ImagesCompressed/networking.webp"
                alt="increasing"
                className="icon mx-auto mb-1"
              />
              <h1 className="title-m text-center txt"> 50 Million </h1>
              <div className="card-body">
                <p className="card-text-one text-center txt">
                  People with{" "}
                  <span className="highlight">Epilepsy Worldwide</span>
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-4 col-md-6 mb-4 card-one">
            <div className="card h-100  border-0">
              <img
                src="/ImagesCompressed/support.webp"
                alt="increasing"
                className="icon mx-auto mb-1"
              />
              <h1 className="title-m text-center txt"> 500 Million </h1>
              <div className="card-body">
                <p className="card-text-one text-center txt">
                  <span className="highlight">
                    Caregivers and Support Network
                  </span>
                  , Epilepsy Foundation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
