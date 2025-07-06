import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Competitions.css";

const Competitions = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const achievements = [
    {
      src: "/ImagesCompressed/Hack.webp",
      label: "1st place at Hack24",
      desc: "Organized by AUC and e& among 141 teams from 8 countries",
    },
    {
      src: "/ImagesCompressed/Creativa.jpg",
      label: "1st place at Industry 4.0 Hackathon",
      desc: "Organized by Creativa Mansoura Hub",
    },
    {
      src: "/ImagesCompressed/Sanam.webp",
      label: "Pre-incubation",
      desc: "By Sanam Ventures",
    },
    {
      src: "/ImagesCompressed/Eureca.webp",
      label: "Presented Academic Poster",
      desc: "At EURECA Conference Organized by AUC",
    },
    {
      src: "/ImagesCompressed/Appx.jpg",
      label: "Best Technical Project at AppX",
      desc: "Organized by IEEE Zewail City",
    },
    {
      src: "/ImagesCompressed/DELL.jpg",
      label: "Finalist at Dell Competition",
      desc: "Competing with 259 teams from 20 countries",
    },
  ];

  return (
    <section className="my-5">
      <div className="container text-center">
        <h1 className="title-p">What we achieved?</h1>
        <p className="body-text para">
          <i>Here’s how far we’ve come — and what we’re proud of achieving</i>
          <br />
          Swipe to see more...
        </p>

        <div
          id="carouselExampleCaptions"
          className="carousel slide mx-auto small-carousel"
        >
          <div className="carousel-inner text-center cont">
            {achievements.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img
                  src={item.src}
                  className="d-block w-100 carousel-img"
                  alt={item.label}
                />
                <div className="carousel-caption-below text-center">
                  <h5 className="label-text title-p">{item.label}</h5>
                  <p className="desc-text body-text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Competitions;
