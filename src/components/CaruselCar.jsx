import React, { useEffect } from "react";

import { Pagination, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import mersB from "../assets/Benz-V-Class.png";
import mersB2 from "../assets/fcf3a5b062ce20bf24f27c6e8005d8e3 1.png";
import Bmw from "../assets/M5 1.png";
import { useDispatch, useSelector } from "react-redux";
import { mirror } from "../reducers/slideId";

const CaruselCar = () => {
  let disP = useDispatch();

  let swipeId = useSelector((e) => e.slideId.swipeId);
  let selCar = useSelector((e) => e.stepId.carId);
  // useEffect(() => {
  //   console.log(swipeId);
  // }, [swipeId]);
  return (
    <div className="w-full">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        onSlideChange={(swiper) => {
          disP(mirror(swiper.activeIndex + 1));
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper rounded-lg"
      >
        <SwiperSlide
          style={
            selCar == 1 ? { background: "#353535" } : { background: "#444" }
          }
        >
          <img src={mersB} alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={
            selCar == 2 ? { background: "#353535" } : { background: "#444" }
          }
        >
          <img src={mersB2} alt="" />
        </SwiperSlide>
        <SwiperSlide
          style={
            selCar == 3 ? { background: "#353535" } : { background: "#444" }
          }
        >
          <img src={Bmw} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CaruselCar;
