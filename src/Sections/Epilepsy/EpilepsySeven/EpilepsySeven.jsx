import React from "react";
import { Link } from "react-router-dom";

const EpilepsySeven = () => {
  return (
    <section className="container">
      <div className="text-center">
        <h1 className="title-p">Ready to Take Control?</h1>
        <p className="body-text">
          Learn how Neurofy's innovative seizure prediction technology can help
          <br />
          you or your loved ones live with greater confidence and security.
          Discover Neurofy
        </p>
        <div className="mt-4">
          <Link
            className="Button-App btn-lg mt-5"
            aria-current="page"
            to="/#hero"
            style={{ textDecorationLine: "none" }}
          >
            Explore our app
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EpilepsySeven;
