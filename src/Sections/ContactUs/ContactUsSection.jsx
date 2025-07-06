import React from "react";
import "../ContactUs/ContactUsSection.css";
const ContactUs = () => {
  return (
    <section
      className="py-5 mt-2 d-flex justify-content-center align-items-center "
      style={{ minHeight: "80vh" }}
    >
      <div
        className="container contact-box px-5 py-5"
        style={{ maxWidth: "650px" }}
      >
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="contact-form text-center">
              <h2 className="title-m mb-4" style={{ color: "#33333ae" }}>
                Contact Us
              </h2>
              <form>
                <div className="mb-3 text-start d-flex flex-column align-items-center">
                  <label htmlFor="name" className="body-text form-label w-100">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="mb-3 text-start d-flex flex-column align-items-center">
                  <label htmlFor="name" className="body-text form-label w-100">
                    Phone Number
                  </label>
                  <input
                    type="Phone-number"
                    className="form-control"
                    id="number"
                    required
                    autoComplete="number"
                  />
                </div>
                <div className="mb-3 text-start d-flex flex-column align-items-center">
                  <label htmlFor="email" className="body-text form-label w-100">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    autoComplete="email"
                  />
                </div>
                <div className="mb-3 text-start d-flex flex-column align-items-center">
                  <label
                    htmlFor="message"
                    className="body-text form-label w-100"
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    required
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className="mb-3 text-start d-flex flex-column align-items-center">
                  <p className="body-text form-label w-100">
                    Don't forget to follow us on{" "}
                    <a
                      style={{ color: " rgb(106, 44, 145, 0.7)" }}
                      href="https://www.facebook.com/profile.php?id=61575927120573"
                    >
                      Facebook
                    </a>
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{
                    borderRadius: "30px",
                    fontSize: "20px",
                    color: "#fff",
                    padding: "10px 30px",
                    backgroundColor: "rgba(106, 44, 145, 0.8)",
                  }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
