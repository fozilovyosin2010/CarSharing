import React from "react";
import { useSelector } from "react-redux";

const Btn = (props) => {
  let selCar = useSelector((e) => e.stepId.carId);
  let swipeId = useSelector((e) => e.slideId.swipeId);
  console.log(swipeId);
  return (
    <button
      className={`red-hat-display-600 flex justify-center  active:bg-[#000] active:text-[#fff] w-[70px] rounded-md text-black bg-[#fff] p-[8px_16px] text-[14px] `}
    >
      {props.text}
    </button>
  );
};

export default Btn;
