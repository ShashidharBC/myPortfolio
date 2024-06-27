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
    {
      image: TRAG_CONNECT_1,
    },
    {
      image: TRAG_CONNECT_2,
    },
    {
      image: TRAG_CONNECT_3,
    },
    {
      image: TRAG_CONNECT_4,
    },
    {
      image: TRAG_CONNECT_5,
    },
    {
      image: TRAG_CONNECT_6,
    },
  ];
  const TRIBE_CARNIVAL_IMAGES = [
    {
      image: TRIBE_1,
    },
    {
      image: TRIBE_2,
    },
    {
      image: TRIBE_3,
    },
    {
      image: TRIBE_4,
    },
    {
      image: TRIBE_5,
    },
    {
      image: TRIBE_6,
    },
  ];
  const AUSA_HEALTH_IMAGES = [
    {
      image: AUSA_1,
    },
    {
      image: AUSA_2,
    },
  ];
  const renderProjectsList = () => {
    return (
      <div className="flex items-center justify-center gap-10">
        <div className="flex flex-col w-[20%] border border-black bg-gradient-to-b from-[#15385F] from-85% to-[#fff] to-15% rounded-xl shadow-lg items-center justify-center p-4 gap-6">
          <div className="pl-[12%]">
            <Carousel data={TRAG_CONNECT_IMAGES} cWidth={"100%"} />
          </div>
          <span className="text-xl font-semibold text-white mb-6">
            Trag-Connect
          </span>
          <img
            src={PLAYSTORE_ICON}
            alt="playstore-icon"
            className="hover:cursor-pointer hover:opacity-40"
            width={40}
            height={40}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=io.vlinder.vtrag&hl=en&pli=1",
                "_blank"
              )
            }
          />
        </div>
        <div className="flex flex-col w-[20%] border border-black bg-gradient-to-b from-[#C2A252] from-85% to-[#fff] to-15% rounded-xl shadow-lg items-center justify-center p-4 gap-6">
          <div className="pl-[12%]">
            <Carousel data={TRIBE_CARNIVAL_IMAGES} cWidth={"100%"} />
          </div>
          <span className="text-xl font-semibold text-white mb-6">
            Tribe-Carnival
          </span>
          <img
            src={PLAYSTORE_ICON}
            alt="playstore-icon"
            className="hover:cursor-pointer hover:opacity-40"
            width={40}
            height={40}
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.masqueraderxperience&hl=en_IN&gl=US",
                "_blank"
              )
            }
          />
        </div>
        <div className="flex flex-col w-[30%] border border-black bg-gradient-to-b from-[#15385F] from-80% to-[#fff] to-20% rounded-xl shadow-lg items-center justify-center p-4 gap-4">
          <div>
            <Carousel data={AUSA_HEALTH_IMAGES} cWidth={"100%"} />
          </div>
          <span className="text-xl font-semibold text-white mb-4">
            Ausa Health
          </span>
          <img
            src={LINK_ICON}
            alt="playstore-icon"
            className="hover:cursor-pointer hover:opacity-40"
            width={50}
            height={50}
            onClick={() => window.open("https://prar.io/", "_blank")}
          />
        </div>
      </div>
    );
  };
  return (
    <section className="flex textStyle flex-col items-center justify-center gap-10">
      <div className="flex flex-col textStyle gap-2">
        <span className="text-md">Browse My Recent</span>
        <span className="text-5xl font-semibold text-[rgb(60,91,111)]">
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
