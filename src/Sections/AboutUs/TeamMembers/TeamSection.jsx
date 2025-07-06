import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Haneen Abdelhaleem",
      image: "/ImagesCompressed/Haneen.webp",
      description: "Frontend Developer - Mobile Developer",
      linkedin: "https://www.linkedin.com/in/haneen-abdulhaleem-87969121a/",
      gmail: "haneenhaleem111@gmail.com",
    },
    {
      name: "Hazem Shaker",
      image: "/ImagesCompressed/Hazem.webp",
      description: "Full Stack Developer - Business Developer",
      linkedin:
        "https://www.linkedin.com/in/hazem-shaker?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVGnr4kMUSeyvUZy0QGSsuQ%3D%3D",
      gmail: "hazemohamed.shaker@gmail.com",
    },
    {
      name: "Khaled Waleed",
      image: "/ImagesCompressed/Khaled.webp",
      description: "Full Stack Developer",
      linkedin: "https://www.linkedin.com/in/khaled-waleed-mohammed/",
      gmail: "khalodatia@gmail.com ",
    },
    {
      name: "Roaa Osama",
      image: "/ImagesCompressed/Roaa.webp",
      description: "Backend Developer",
      linkedin: "https://www.linkedin.com/in/roaa-fouda",
      gmail: "roaa.fouda2@gmail.com",
    },
    {
      name: "Mohamed Nagy",
      image: "/ImagesCompressed/Nagy.webp",
      description: "Embedded Systems Engineer - Business Developer",
      linkedin: "https://www.linkedin.com/in/mohamed-nagy11",
      gmail: "mohamed.nagy.elkholy@gmail.com",
    },
    {
      name: "Hassan Mohamed",
      image: "/ImagesCompressed/Hassan.webp",
      description: "Embedded Systems Engineer",
      linkedin: "https://www.linkedin.com/in/hassan-mohamed-4436471b9",
      gmail: "hassanmohamed25687@gmail.com",
    },
    {
      name: "Mohamed Abdelhameed",
      image: "/ImagesCompressed/Abdelhameed.jpg",
      description: "ML Engineer - Business Developer",
      linkedin:
        "https://www.linkedin.com/in/mohamed-abdelhamid-253178222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      gmail: "moh.abhamid02@gmail.com",
    },
    {
      name: "Salma Khaled",
      image: "/ImagesCompressed/Salma.webp",
      description: "ML Engineer",
      linkedin: "https://www.linkedin.com/in/salma-eltahhan",
      gmail: "salmaeltahan184@gmail.com",
    },
    {
      name: "Tasneem Abdelgawad",
      image: "/ImagesCompressed/Tasnim.webp",
      description: "ML Engineer",
      linkedin: "http://linkedin.com/in/tasnim-elyamany-293043217",
      gmail: "Tasneemabdeljwad@std.mans.edu.eg",
    },
    {
      name: "Ahmed Waly",
      image: "/ImagesCompressed/Waly.webp",
      description: "Security Engineer",
      linkedin: "https://www.linkedin.com/in/ahmedwaly1",
      gmail: "awaly404@gmail.com",
    },
    {
      name: "Rokia Ahmed",
      image: "/ImagesCompressed/Rokia.webp",
      description: "UI/UX Designer",
      linkedin: "www.linkedin.com/in/rokia-elbishbishy-496704218",
      gmail: "rokiaelbishbishy@gmail.com",
    },
  ];

  return (
    <div className=" team-container ">
      <div className="section-container">
        <h1 className="section-title">Our team</h1>
        <i className="section-quote">
          A group of passionate innovators, each bringing unique skills and
          dedication to create impactful solutions together
        </i>
      </div>
      <div className="container">
        <div className="row ">
          {teamMembers.map((member, index) => (
            <div className="col-md-2 mb-4" key={index}>
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
                  <div className="mt-2">
                    <a href={member.linkedin} className="text-primary me-2">
                      <img
                        src="/ImagesCompressed/social.webp"
                        alt="linkedin"
                        style={{ height: "20px" }}
                      />
                    </a>
                    <a href={member.gmail} className="text-dark">
                      <img
                        src="/ImagesCompressed/mail outline.webp"
                        alt="..."
                        style={{ height: "20px" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
