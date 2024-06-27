import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Preloader(props) {
  return (
    <div
      id={props?.load ? "preloader" : "preloader-none"}
      className="absolute top-[26%] left-[38%]"
    >
      <Loader type="Plane" color="#3c5b6f" height={500} width={500} />
    </div>
  );
}

export default Preloader;
