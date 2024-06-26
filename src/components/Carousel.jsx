import React from "react";
import { Carousel as CarouselComp } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousel = ({ data, cWidth }) => {
  return (
    <CarouselComp
      autoPlay={true}
      interval={2000}
      width={cWidth}
      infiniteLoop={true}
      showThumbs={false}
    >
      {data &&
        data?.map((item, index) => (
          <div key={index}>
            <img src={item?.image} alt="item-image" className="rounded-lg" />
          </div>
        ))}
    </CarouselComp>
  );
};

export default Carousel;
