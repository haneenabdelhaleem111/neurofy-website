import React from "react";
import "./EpilepsyTwo.css";

const EpilepsyTwo = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="d-flex">
        <div className="ps-md-5 ms-md-5">
          {/* Text content */}
          <div className=" order-1 order-md-1">
            <h1 className="title-p">What is epilepsy?</h1>
            <p className="body-text epilepsy-body">
              Epilepsy is a neurological disorder characterized by recurrent,
              unprovoked seizures. It affects people of all ages and is one of
              the most common neurological conditions worldwide.
            </p>
          </div>
          <div className="ms-0">
            {[
              {
                img: "warning.webp",
                title: "Affects 500 million people worldwide",
                desc: "Making it the fourth most common neurological disorder",
              },
              {
                img: "flash.webp",
                title: "Caused by abnormal brain activity",
                desc: "Temporary disruption of normal electrical activity in the brain",
              },
              {
                img: "heart.webp",
                title: "Highly treatable condition",
                desc: "With proper treatment, many people live seizure-free lives",
              },
              {
                img: "brain.webp",
                title: "Modern monitoring technology",
                desc: "Advanced devices can now predict and monitor seizure activity in real-time",
              },
            ].map((item, index) => (
              <div className="align-items-center" key={index}>
                <div className="d-flex">
                  <div>
                    <img
                      src={`/ImagesCompressed/${item.img}`}
                      alt={item.title}
                      className="me-2"
                      style={{ height: "20px" }}
                    />
                  </div>
                  <div>
                    <h5 className="list-point-e">{item.title}</h5>
                    <p className="body-text sentence-list">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="col-md-6 ps-md-5 text-center mb-4 mb-md-0 order-2 order-md-2">
          <img
            src="/ImagesCompressed/Epilepsy-pana.webp"
            alt="epilepsy"
            className="img-fluid"
            style={{ maxHeight: "500px", width: "100%", objectFit: "contain" }}
          />
        </div>
      </div>
    </section>
  );
};

export default EpilepsyTwo;
