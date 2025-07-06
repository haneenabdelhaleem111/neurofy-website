import React from "react";
import "./EpilepsyFive.css";

const EpilepsyFive = () => {
  return (
    <section className="container">
      <div className="text-center">
        <h1 className="title-p">Treatment Options</h1>
        <p
          className="body-text"
          style={{ color: "#3333339a", fontSize: "16px" }}
        >
          Modern epilepsy treatment offers many effective options to help
          control seizures and improve
          <br /> quality of life.
        </p>
      </div>

      <div className="row mt-5">
        {/* Box 1 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="div-option"
            style={{ borderTop: "3px solid rgba(5, 67, 239, 0.671)" }}
          >
            <h3
              className="title-p"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              <img
                src="/ImagesCompressed/shield-blue.webp"
                alt="shield"
                style={{ height: "20px", margin: "5px 5px 10px 0px" }}
              />
              Medications
              <p
                className="body-text"
                style={{ fontSize: "13px", color: "#3333339a" }}
              >
                Anti-seizure medications (ASMs)
              </p>
            </h3>
            <p className="body-text paragraph-div">
              The most common treatement approach, with many different
              medications available to control various seizure types
            </p>
            <ul className="list-div">
              <li>First-line treatement option</li>
              <li>Multiple medication choices</li>
              <li>Regular monitoring required</li>
              <li>70% achieve seizure control</li>
            </ul>
          </div>
        </div>

        {/* Box 2 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="div-option"
            style={{ borderTop: "3px solid rgba(31, 161, 17, 0.67)" }}
          >
            <h3
              className="title-p"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              <img
                src="/ImagesCompressed/flash-green.webp"
                alt="flash"
                style={{ height: "20px", margin: "5px 5px 10px 0px" }}
              />
              Surgery
              <p
                className="body-text"
                style={{ fontSize: "13px", color: "#3333339a" }}
              >
                Surgical intervention options
              </p>
            </h3>
            <p className="body-text paragraph-div">
              For medication-resistant epilepsy, surgery may be an option to
              remove or disconnect seizure-causing brain tissue.
            </p>
            <ul className="list-div">
              <li>Resective surgery</li>
              <li>Disconnection procedures</li>
              <li>Laser ablation</li>
              <li>Careful candidate selection</li>
            </ul>
          </div>
        </div>

        {/* Box 3 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="div-option"
            style={{ borderTop: "3px solid rgba(115, 37, 223, 0.67)" }}
          >
            <h3
              className="title-p"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              <img
                src="/ImagesCompressed/brain.webp"
                alt="brain"
                style={{ height: "20px", margin: "5px 5px 10px 0px" }}
              />
              Device Therapy
              <p
                className="body-text"
                style={{ fontSize: "13px", color: "#3333339a" }}
              >
                Implantable devices
              </p>
            </h3>
            <p className="body-text paragraph-div">
              Devices that can help control seizures through electrical
              stimulation or responsive therapy.
            </p>
            <ul className="list-div">
              <li>Vagus nerve stimulation (VNS)</li>
              <li>Responsive neurostimulation (RNS)</li>
              <li>Deep brain stimulation (DBS)</li>
              <li>Adjunctive therapy option</li>
            </ul>
          </div>
        </div>

        {/* Box 4 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="div-option"
            style={{ borderTop: "3px solid rgba(239, 135, 25, 0.79)" }}
          >
            <h3
              className="title-p"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              <img
                src="/ImagesCompressed/heart-orange.webp"
                alt="heart"
                style={{ height: "20px", margin: "5px 5px 10px 0px" }}
              />
              Dietary Therapy
              <p
                className="body-text"
                style={{ fontSize: "13px", color: "#3333339a" }}
              >
                Specialized diets
              </p>
            </h3>
            <p className="body-text paragraph-div">
              Specific diets that can help reduce seizures, particularly
              effective in children with certain epilepsy types.
            </p>
            <ul className="list-div">
              <li>Ketogenic diet</li>
              <li>Modified Atkins diet</li>
              <li>Low glycemic index diet</li>
              <li>Medical supervision required</li>
            </ul>
          </div>
        </div>

        {/* Box 5 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="div-option"
            style={{ borderTop: "3px solid rgba(26, 157, 120, 0.67)" }}
          >
            <h3
              className="title-p"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              <img
                src="/ImagesCompressed/user-green.webp"
                alt="user"
                style={{ height: "20px", margin: "5px 5px 10px 0px" }}
              />
              Lifestyle Management
              <p
                className="body-text"
                style={{ fontSize: "13px", color: "#3333339a" }}
              >
                Complementary approaches
              </p>
            </h3>
            <p className="body-text paragraph-div">
              Lifestyle modifications and complementary therapies that support
              overall epilepsy management.
            </p>
            <ul className="list-div">
              <li>Stress management</li>
              <li>Regular sleep schedule</li>
              <li>Exercise and fitness</li>
              <li>Trigger avoidance</li>
            </ul>
          </div>
        </div>

        {/* Box 6 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="div-option"
            style={{ borderTop: "3px solid rgba(79, 17, 161, 0.67)" }}
          >
            <h3
              className="title-p"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              <img
                src="/ImagesCompressed/open-magazine.webp"
                alt="magazine"
                style={{ height: "20px", margin: "5px 5px 10px 0px" }}
              />
              Clinical Trials
              <p
                className="body-text"
                style={{ fontSize: "13px", color: "#3333339a" }}
              >
                Research opportunities
              </p>
            </h3>
            <p className="body-text paragraph-div">
              Participation in research studies testing new treatments and
              therapies for epilepsy.
            </p>
            <ul className="list-div">
              <li>New medications</li>
              <li>Novel devices</li>
              <li>Innovative therapies</li>
              <li>Access to cutting-edge care</li>
            </ul>
          </div>
        </div>

        {/* Box 7 */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className="div-option"
            style={{ borderTop: "3px solid #08AA99" }}
          >
            <h3
              className="title-p"
              style={{ fontWeight: "600", fontSize: "24px" }}
            >
              <img
                src="/ImagesCompressed/monitor.webp"
                alt="monitor"
                style={{ height: "20px", margin: "5px 5px 10px 0px" }}
              />
              Predictive Monitoring
              <p
                className="body-text"
                style={{ fontSize: "13px", color: "#3333339a" }}
              >
                Advanced seizure prediction technology
              </p>
            </h3>
            <p className="body-text paragraph-div">
              Wearable devices that monitor brain activity and predict seizures
              before they occur, enabling proactive management.
            </p>
            <ul className="list-div">
              <li>Real-time EEG monitoring</li>
              <li>Predictive algorithms</li>
              <li>Automatic alerts to caregivers</li>
              <li>Continuous data collection</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EpilepsyFive;
