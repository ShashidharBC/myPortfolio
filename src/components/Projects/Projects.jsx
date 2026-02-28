import React from "react";
import LINK_ICON from "../../assests/link-1.jpg";
import PLAYSTORE_ICON from "../../assests/play-store-3.png";
import TRAG_CONNECT_1 from "../../assests/trag-connect.webp";
import TRAG_CONNECT_2 from "../../assests/trag-connect-2.webp";
import TRAG_CONNECT_3 from "../../assests/trag-connect-3.webp";
import TRAG_CONNECT_4 from "../../assests/trag-connect-4.webp";
import TRAG_CONNECT_5 from "../../assests/trag-connect-5.webp";
import TRAG_CONNECT_6 from "../../assests/trag-connect-6.webp";

import TRIBE_1 from "../../assests/tribe-1.webp";
import TRIBE_2 from "../../assests/tribe-2.webp";
import TRIBE_3 from "../../assests/tribe-3.webp";
import TRIBE_4 from "../../assests/tribe-4.webp";
import TRIBE_5 from "../../assests/tribe-5.webp";
import TRIBE_6 from "../../assests/tribe-6.webp";

import AUSA_1 from "../../assests/ausa-1.jpg";
import AUSA_2 from "../../assests/ausa-2.jpg";

import "./styles.css";
import Carousel from "../Carousel";

const Projects = () => {
  const TRAG_CONNECT_IMAGES = [
    { image: TRAG_CONNECT_1 },
    { image: TRAG_CONNECT_2 },
    { image: TRAG_CONNECT_3 },
    { image: TRAG_CONNECT_4 },
    { image: TRAG_CONNECT_5 },
    { image: TRAG_CONNECT_6 },
  ];

  const TRIBE_CARNIVAL_IMAGES = [
    { image: TRIBE_1 },
    { image: TRIBE_2 },
    { image: TRIBE_3 },
    { image: TRIBE_4 },
    { image: TRIBE_5 },
    { image: TRIBE_6 },
  ];

  const AUSA_HEALTH_IMAGES = [{ image: AUSA_1 }, { image: AUSA_2 }];

  const renderProjectsList = () => {
    return (
      <div className="projects-grid">
        {/* Trag Connect */}
        <div className="project-card project-card--dark">
          <div className="project-card-top">
            <div className="project-carousel-wrapper">
              <Carousel data={TRAG_CONNECT_IMAGES} cWidth={"100%"} />
            </div>
            <span className="project-title">Trag-Connect</span>
          </div>
          <div className="project-card-bottom">
            <img
              src={PLAYSTORE_ICON}
              alt="playstore-icon"
              className="project-store-icon hover:cursor-pointer hover:opacity-40"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=io.vlinder.vtrag&hl=en&pli=1",
                  "_blank",
                )
              }
            />
          </div>
        </div>

        {/* Tribe Carnival */}
        <div className="project-card project-card--gold">
          <div className="project-card-top">
            <div className="project-carousel-wrapper">
              <Carousel data={TRIBE_CARNIVAL_IMAGES} cWidth={"100%"} />
            </div>
            <span className="project-title">Tribe-Carnival</span>
          </div>
          <div className="project-card-bottom">
            <img
              src={PLAYSTORE_ICON}
              alt="playstore-icon"
              className="project-store-icon hover:cursor-pointer hover:opacity-40"
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.masqueraderxperience&hl=en_IN&gl=US",
                  "_blank",
                )
              }
            />
          </div>
        </div>

        {/* Ausa Health */}
        <div className="project-card project-card--dark project-card--wide">
          <div className="project-card-top">
            <div className="project-carousel-wrapper project-carousel-wrapper--wide">
              <Carousel data={AUSA_HEALTH_IMAGES} cWidth={"100%"} />
            </div>
            <span className="project-title">Ausa Health</span>
          </div>
          <div className="project-card-bottom">
            <img
              src={LINK_ICON}
              alt="link-icon"
              className="project-store-icon project-store-icon--link hover:cursor-pointer hover:opacity-40"
              onClick={() => window.open("https://prar.io/", "_blank")}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="flex textStyle flex-col items-center justify-center gap-10">
      <div className="flex flex-col textStyle gap-2 text-center">
        <span className="text-md">Browse My Recent</span>
        <span className="projects-heading text-5xl font-semibold text-[rgb(60,91,111)]">
          Projects
        </span>
      </div>
      <div className="w-full items-center justify-center">
        {renderProjectsList()}
      </div>
    </section>
  );
};

export default Projects;
