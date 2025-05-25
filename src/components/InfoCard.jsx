import React from "react";

const infoCard = ({ img, title, text }) => {
  return (
    <div className="bg-[#333333] flex rounded-lg justify-between gap-2 p-[10px] items-center">
      <div className="bg-[#fff] rounded-lg p-3">
        <img src={img} className="w-[100px]" />
      </div>
      <div className="px-3">
        <div className="red-hat-display-600">{title}</div>
        <div className="red-hat-display-200 max-w-[300px] max-md:max-w-full text-[14px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default infoCard;
