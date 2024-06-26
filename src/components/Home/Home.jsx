import React from "react";
import PROFILE_PIC from "../../assests/My_pic-circle-2.png";
import LINKEDIN from "../../assests/linkedin.png";
import GITHUB_ICON from "../../assests/github.png";
import MY_RESUME from "../../assests/ShashidharBC_CV.pdf";
import "./styles.css";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import TypeWriter from "./TypeWriter";

const Home = () => {
  const handleDownloadCV = () => {
    window.open(MY_RESUME);
  };
  const handleContactInfo = () => {
    window.location.href = "#contact";
  };

  const renderBtnContainer = () => {
    return (
      <div className="flex gap-3">
        <button
          className="w-[9rem] bg-[#fff] border border-[#1A2130] hover:bg-[#1A2130] hover:text-white text-lg font-semibold text-center text-black p-3 rounded-full"
          onClick={handleDownloadCV}
        >
          Download CV
        </button>
        <button
          className="w-[9rem] bg-[#1A2130] hover:bg-[#000]  text-lg font-semibold text-center text-white p-3 rounded-full"
          onClick={handleContactInfo}
        >
          Contact Info
        </button>
      </div>
    );
  };
  const renderSocialsContainer = () => {
    return (
      <div className="flex gap-4">
        <img
          src={LINKEDIN}
          alt="linked-icon"
          className="hover:cursor-pointer hover:opacity-40"
          width={40}
          height={40}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/shashidhara-b-challamarada-656117218/",
              "_blank"
            )
          }
        />
        <img
          src={GITHUB_ICON}
          alt="github-icon"
          className="hover:cursor-pointer hover:opacity-40"
          width={40}
          height={40}
          onClick={() =>
            window.open("https://github.com/ShashidharBC", "_blank")
          }
        />
      </div>
    );
  };
  const renderIntroduction = () => {
    return (
      <section className="flex items-center justify-center width-[5rem] mt-[4%] gap-20">
        <div className="shadow-black">
          <img src={PROFILE_PIC} alt="profile-pic" width={350} height={350} />
        </div>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-4">
            <span className="textStyle text-md font-light">Hello, I am</span>
            <span className="textStyle text-3xl font-semibold">
              Shashidhara B Challamarada
            </span>
            <span className="textStyle text-2xl font-semibold text-[#3c5b6f]">
              <TypeWriter />
            </span>
          </div>
          {renderBtnContainer()}
          {renderSocialsContainer()}
        </div>
      </section>
    );
  };

  return <section className="">{renderIntroduction()}</section>;
};

export default Home;
