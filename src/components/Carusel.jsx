import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Carusel = ({ id, img, style, title }) => {
  let slideId = useSelector((e) => e.slideId.id);
  return (
    <div
      style={
        slideId == id ? { background: "#A4A4A4" } : { background: "#494949" }
      }
      className={`p-[10px_15px] duration-300 flex items-center justify-between flex-col rounded-lg ${style}`}
    >
      <img src={img} alt="" className="w-[300px]" />
      <div className="text-center red-hat-display-200">{title}</div>
    </div>
  );
};

export default Carusel;
