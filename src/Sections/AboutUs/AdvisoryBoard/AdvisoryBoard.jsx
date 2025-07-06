import React from "react";
//import "./TeamSection.css";

const AdvisoryBoaard = () => {
  const BoardMembers = [
    {
      name: "Dr. Sarah Ayyad",
      image: "/ImagesCompressed/Sarah.webp",
      description: "AI Professor Mansoura University",
    },
    {
      name: "Dr. Mohamed Ali",
      image: "/ImagesCompressed/Mohamed.webp",
      description: "Neurology Specialist Armed Forces Hospital",
    },
    {
      name: "Eng. Mahmoud Abo Elnaga",
      image: "/ImagesCompressed/CEO.jpg",
      description: "CEO PUIUX",
    },
    {
      name: "Eng. Omar Wahba",
      image: "/ImagesCompressed/Omar.webp",
      description: "M.Sc. Candidate Université du Québec",
    },
    {
      name: "Eng. Ahmed Gamal",
      image: "/ImagesCompressed/Eng.jpg",
      description: "Teaching Assistant at Mansoura University",
    },
  ];

  return (
    <div className=" team-container ">
      <div className="section-container">
        <h1 className="section-title">Our Advisory Board</h1>
        {/* <i className="section-quote">
          A group of passionate innovators, each bringing unique skills and
          dedication to create impactful solutions together
        </i>*/}
      </div>
      <div className="container" style={{ margin: "auto" }}>
        <div className="row ">
          {BoardMembers.map((member, index) => (
            <div className="col-md-4 mb-4 " key={index}>
              <div className="team-card h-100 p-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-circle mx-auto"
                  style={{
                    width: "130px",
                    height: "130px",
                    objectFit: "cover",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvisoryBoaard;
