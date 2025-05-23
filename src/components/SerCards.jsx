import React from "react";
import vector from "../assets/vector-5.png";

const SerCards = ({ img, text, des }) => {
  return (
    <div className="bg-[#333333] p-[10px] rounded-lg flex justify-between gap-2 flex-col">
      <img src={img} className="w-[350px] " />
      <div className="max-w-[350px] max-sm:w-full">
        <div className="font-medium text-[18px]">{text}</div>
        <div className="text-base text-start red-hat-display-200">{des}</div>
      </div>
      <div className="">
        <button className="p-[4px_16px] red-hat-display-600 text-[14px] flex items-center gap-3 bg-[#fff] text-black rounded-lg">
          <div>Booking</div>
          <img src={vector} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SerCards;
