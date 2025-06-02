import React from "react";
import { useSelector } from "react-redux";

const Steps = ({ id, text, bool }) => {
  let stepId = useSelector((e) => e.stepId.id);

  return (
    <div className="flex z-10 flex-col items-center">
      <div className="z-10 bg-[#282828] p-[2px]">
        <span
          style={
            stepId == id
              ? { background: "#fff", color: "black" }
              : { color: "#fff", background: "#464646" }
          }
          className=" w-[30px]  h-[30px]  m-2 rounded-[50px] red-hat-display-200 flex items-center justify-center"
        >
          {id}
        </span>
      </div>
      <div className="red-hat-display-200 text-[12px] text-[#fff]">{text}</div>
    </div>
  );
};

export default Steps;
