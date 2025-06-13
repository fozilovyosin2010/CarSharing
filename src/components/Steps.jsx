import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import tick from "../assets/tick.svg";

const Steps = ({ id, text }) => {
  let stepId = useSelector((e) => e.stepId.id);

  useEffect(() => {
    console.log(stepId);
  }, [stepId]);

  return (
    <div className="flex z-10 flex-col items-center">
      <div className="z-10 bg-[#282828] p-[2px]">
        <span
          style={
            stepId == id
              ? { background: "#fff", color: "black" }
              : { color: "#fff", background: "#464646" }
          }
          className="max-md:w-[25px]  max-md:h-[25px] w-[30px]  h-[30px]  text-1 m-2 rounded-[50px] red-hat-display-200 flex items-center justify-center"
        >
          {stepId > id ? (
            <img src={tick} className="w-[20px] p-1 h-[20px]" />
          ) : (
            <div>{id}</div>
          )}
        </span>
      </div>
      <div className="red-hat-display-200 text-center text-[10px] text-[#fff]">
        {text}
      </div>
    </div>
  );
};

export default Steps;
