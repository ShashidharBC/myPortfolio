import React from "react";
import CHECK_ICON from "../../assests/check.svg";
import "./styles.css";

const Experience = () => {
  const mobileAppDevData = [
    { name: "JavaScript", rate: "Experienced" },
    { name: "TypeScript", rate: "Experienced" },
    { name: "React Native", rate: "Experienced" },
    { name: "HTML5", rate: "Experienced" },
    { name: "CSS3", rate: "Experienced" },
    { name: "Git, GitHub", rate: "Experienced" },
  ];

  const feAndBeDevData = [
    { name: "Next.JS", rate: "Experienced" },
    { name: "React.JS", rate: "Experienced" },
    { name: "Redux", rate: "Intermediate" },
    { name: "MySQL", rate: "Intermediate" },
    { name: "PostgreSQL", rate: "Intermediate" },
    { name: "GraphQL", rate: "Intermediate" },
    { name: "Rest API's", rate: "Experienced" },
  ];

  const renderSkillCard = (title, data) => (
    <div className="experience-card flex flex-col border border-black rounded-lg justify-start gap-6 p-4 shadow-lg">
      <span className="text-lg font-semibold text-[#3c5b6f]">{title}</span>
      <div className="flex flex-wrap gap-6">
        {data.map((item, index) => (
          <div key={index} className="flex gap-2">
            <img src={CHECK_ICON} alt="check-icon" width={24} height={24} />
            <div className="flex flex-col">
              <span className="text-left text-md font-semibold">
                {item.name}
              </span>
              <span className="text-left text-sm font-normal">{item.rate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col textStyle gap-2">
        <span className="text-md">Explore My</span>
        <span className="experience-heading text-5xl font-semibold text-[#3c5b6f]">
          Experience
        </span>
      </div>
      <div className="experience-cards-wrapper textStyle">
        {renderSkillCard("Mobile App Development", mobileAppDevData)}
        {renderSkillCard("FE & BE Development", feAndBeDevData)}
      </div>
    </section>
  );
};

export default Experience;
