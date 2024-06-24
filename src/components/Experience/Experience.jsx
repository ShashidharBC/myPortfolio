import React from "react";
import CHECK_ICON from "../../assests/check.svg";
import "./styles.css";

const Experience = () => {
  const mobileAppDevData = [
    {
      name: "JavaScript",
      rate: "Experienced",
    },
    {
      name: "TypeScript",
      rate: "Experienced",
    },
    {
      name: "React Native",
      rate: "Experienced",
    },
    {
      name: "HTML5",
      rate: "Experienced",
    },
    {
      name: "CSS3",
      rate: "Experienced",
    },
    {
      name: "Git, GitHub",
      rate: "Experienced",
    },
  ];
  const feAndBeDevData = [
    {
      name: "Next.JS",
      rate: "Experienced",
    },
    {
      name: "React.JS",
      rate: "Experienced",
    },
    {
      name: "Redux",
      rate: "Intermediate",
    },
    {
      name: "MySQL",
      rate: "Intermediate",
    },
    {
      name: "PostgreSQL",
      rate: "Intermediate",
    },
    {
      name: "GraphQL",
      rate: "Intermediate",
    },
    {
      name: "Rest API's",
      rate: "Experienced",
    },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col textStyle gap-2">
        <span className="text-md">Explore My</span>
        <span className="text-5xl font-semibold">Experience</span>
      </div>
      <div className="flex w-[90%] textStyle items-center justify-between">
        <div className="flex flex-col w-[45%] h-[18rem] border border-black rounded-lg justify-start gap-6 p-4 shadow-lg">
          <span className="text-lg font-medium">Mobile App Developement</span>
          <div className="flex flex-wrap gap-10">
            {mobileAppDevData &&
              mobileAppDevData.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <img
                    src={CHECK_ICON}
                    alt="check-icon"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col">
                    <span className="text-left text-md font-semibold">
                      {item?.name}
                    </span>
                    <span className="text-left text-sm font-normal">
                      {item?.rate}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col w-[45%] h-[18rem] border border-black rounded-lg justify-center gap-6 p-4 shadow-lg">
          <span className="text-lg font-medium">FE & BE Developement</span>
          <div className="flex flex-wrap gap-10">
            {feAndBeDevData &&
              feAndBeDevData.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <img
                    src={CHECK_ICON}
                    alt="check-icon"
                    width={24}
                    height={24}
                  />
                  <div className="flex flex-col">
                    <span className="text-left text-md font-semibold">
                      {item?.name}
                    </span>
                    <span className="text-left text-sm font-normal">
                      {item?.rate}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
