import React from "react";
import PROFILE_PIC from "../../assests/about.gif";
import BADGE_ICON from "../../assests/badge.svg";
import EDUCATION_ICON from "../../assests/education.svg";

import "./styles.css";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col textStyle gap-2 text-center">
        <span className="text-md">Get To Know More</span>
        <span className="text-5xl font-semibold text-[#3c5b6f] about-heading">
          About Me
        </span>
      </div>

      <div className="about-content-wrapper">
        {/* LEFT: GIF */}
        <div className="about-img-wrapper">
          <img
            className="rounded-full about-profile-img"
            src={PROFILE_PIC}
            alt="profile-pic"
          />
        </div>

        {/* RIGHT: Cards + Bio */}
        <div className="about-info-section">
          <div className="about-cards-row">
            <div className="about-card flex flex-col border border-black bg-white rounded-3xl items-center justify-center p-4 shadow-lg">
              <img src={BADGE_ICON} alt="badge-icon" width={40} height={40} />
              <span className="text-sm font-bold">Experience</span>
              <span className="text-sm font-medium">2+ Years</span>
              <span className="text-sm font-normal">
                Mobile App &amp; Web App Frontend Developer
              </span>
            </div>
            <div className="about-card flex flex-col border border-black bg-white rounded-3xl items-center justify-center p-4 shadow-lg">
              <img
                src={EDUCATION_ICON}
                alt="badge-icon"
                width={40}
                height={40}
              />
              <span className="text-sm font-bold">Education</span>
              <span className="text-sm font-medium">
                Bachelor of Engineering
              </span>
              <span className="text-[0.6rem] font-medium">
                {`(Information Science & Engineering)`}
              </span>
              <span className="text-sm font-normal">{`6.75 (CGPA)`}</span>
            </div>
          </div>

          <div className="about-bio textStyle">
            <span className="text-left">
              Experienced Javascript developer with 2+ years of experience in
              the industry, which includes extensive experience as a React
              Native Developer and strong experience in UI Design, and Mobile
              application development with mobile technologies such as React
              Native, Android SDK and others.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
