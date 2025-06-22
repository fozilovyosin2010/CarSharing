import React from "react";
import vector from "../assets/vectorL.svg";
import partfel from "../assets/bag.png";
import threePerson from "../assets/persons.png";
import { useDispatch, useSelector } from "react-redux";
import { selCarId } from "../reducers/stepId";

const AutoCards = ({ id, img, price, title, pasanger, bag }) => {
  let disP = useDispatch();
  let selCar = useSelector((e) => e.stepId.carId);
  return (
    <div
      className={`border-b rounded-tr-md max-md:flex-col rounded-tl-md p-2 border-dashed ${
        selCar == id ? "bg-[#4b4b4d]" : "bg-[#28282828]"
      } flex items-center gap-[30px] duration-300 justify-between text-[#fff]`}
    >
      <div className="rounded-lg max-md:w-full bg-[#333333]">
        <img
          src={img}
          className="w-[400px] m-[0_auto] max-md:h-auto h-[200px] p-3"
          alt=""
        />
      </div>
      <div className="w-[70%] max-md:w-full">
        <div className="flex justify-between gap-[20px] items-center">
          <h1 className="red-hat-display-200 text-[20px] max-md:text-[16px] max-w-[150px]">
            {title}
          </h1>
          <button
            onClick={() => disP(selCarId(id))}
            className={`p-[8px_32px] max-md:p-[6px_24px] ${
              selCar == id
                ? "bg-gradient-to-br from-[#888] text-[#fff] to-[#282828]"
                : "bg-[#fff] text-black "
            } red-hat-display-600 text-[14px] rounded-md`}
          >
            Select
          </button>
        </div>
        <div className="red-hat-display-600   text-[30px]">{price}</div>
        <div className="flex justify-between gap-2">
          <div className="flex justify-between gap-3 items-center">
            <img
              src={vector}
              className="rounded-[50px] bg-[#EFEFEF] w-[25px] h-[25px] p-[8px] flex items-center rotate-[270deg]"
              alt=""
            />
            <div className="line-clamp-1">More info</div>
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
