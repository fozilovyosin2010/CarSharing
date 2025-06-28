import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { mirror } from "../reducers/slideId";

const Carusel = ({ id, img, style, title }) => {
  let slideId = useSelector((e) => e.slideId.id);
  // let dispatch = useDispatch();
  return (
    <div
      // onClick={() => dispatch(mirror(id))}
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
