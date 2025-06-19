import React from "react";
import "./EpilepsyTwo.css";

const EpilepsyTwo = () => {
  return (
    <section className="container mt-5 pt-5">
      <div className="row flex-column-reverse flex-md-row align-items-center ps-md-5 ms-md-5">
        {/* Text content */}
        <div className="col-md-6">
          <h1 className="title-p">What is epilepsy?</h1>
          <p className="body-text">
            Epilepsy is a neurological disorder characterized by recurrent,
            unprovoked seizures. It affects people of all ages and is one of the
            most common neurological conditions worldwide.
          </p>
          <div className="ms-0">
            {[
              {
                img: "warning.png",
                title: "Affects 500 million people worldwide",
                desc: "Making it the fourth most common neurological disorder",
              },
              {
                img: "flash.png",
                title: "Caused by abnormal brain activity",
                desc: "Temporary disruption of normal electrical activity in the brain",
              },
              {
                img: "heart.png",
                title: "Highly treatable condition",
                desc: "With proper treatment, many people live seizure-free lives",
              },
              {
                img: "brain.png",
                title: "Modern monitoring technology",
                desc: "Advanced devices can now predict and monitor seizure activity in real-time",
              },
            ].map((item, index) => (
              <div className="d-flex" key={index}>
                <div>
                  <img
                    src={`/images/${item.img}`}
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
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="col-md-6 ps-md-5 text-center mb-4 mb-md-0">
          <img
            src="/images/Epilepsy-pana.png"
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
