import React from "react";
import vector from "../assets/vectorL.svg";
import partfel from "../assets/bag.png";
import threePerson from "../assets/persons.png";

const AutoCards = ({ img, price, title, pasanger, bag }) => {
  return (
    <div className="border-b max-md:flex-wrap pt-0 p-2 border-dashed flex items-center gap-[30px] justify-between text-[#fff]">
      <div className="rounded-lg max-md:w-full bg-[#333333]">
        <img
          src={img}
          className="w-[400px] max-md:w-full max-md:h-auto h-[200px] p-3"
          alt=""
        />
      </div>
      <div className="w-[70%] max-md:w-full">
        <div className="flex justify-between gap-[20px] items-center">
          <h1 className="red-hat-display-200 text-[20px] max-w-[150px]">
            {title}
          </h1>
          <button className="p-[8px_32px] red-hat-display-600 text-[14px] bg-[#fff] text-black rounded-md">
            Select
          </button>
        </div>
        <div className="red-hat-display-600 text-[43px]">{price}</div>
        <div className="flex justify-between gap-3">
          <div className="flex justify-between gap-3 items-center">
            <img
              src={vector}
              className="rounded-[50px] bg-[#EFEFEF] w-[25px] h-[25px] p-[8px] flex items-center rotate-[270deg]"
              alt=""
            />
            <div>More info</div>
          </div>
          <div className="flex max-md:flex-row flex-col gap-2">
            <button className="p-[5px_15px] items-center flex gap-3 border">
              <div>{pasanger}</div>
              <img className="w-[30px] h-[20px]" src={threePerson} alt="" />
            </button>
            <button className="p-[5px_15px] items-center flex gap-3 border">
              <div>{bag}</div>
              <img className="w-[30px] h-[20px]" src={partfel} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoCards;
