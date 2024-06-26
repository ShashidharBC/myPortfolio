import React from "react";
import PROFILE_PIC from "../../assests/about.gif";
import BADGE_ICON from "../../assests/badge.svg";
import EDUCATION_ICON from "../../assests/education.svg";

import "./styles.css";

const About = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col textStyle gap-2">
        <span className="text-md">Get To Know More</span>
        <span className="text-5xl font-semibold text-[#3c5b6f]">About Me</span>
      </div>
      <div className="textStyle w-[75%] flex justify-center gap-20 ml-[15%]">
        <div>
          <img className="rounded-full" src={PROFILE_PIC} alt="profile-pic" />
        </div>
        <div className="flex flex-col w-[80%] gap-4 items-start justify-evenly">
          <div className="flex gap-8">
            <div className="flex flex-col w-[14rem] border border-black bg-white rounded-3xl items-center justify-center p-4 shadow-lg">
              <img src={BADGE_ICON} alt="badge-icon" width={40} height={40} />
              <span className="text-sm font-bold">Experience</span>
              <span className="text-sm font-medium">2+ Years</span>
              <span className="text-sm font-normal">Frontend Developer</span>
            </div>
            <div className="flex flex-col w-[14rem] border border-black bg-white rounded-3xl items-center justify-center p-4 shadow-lg">
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
              <span className="text-sm font-normal">{`6.75 (CGPA)`}</span>
            </div>
          </div>
          <div className="flex w-full min-h-2 textStyle">
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
