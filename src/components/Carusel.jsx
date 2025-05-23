import React, { useEffect } from "react";

const Carusel = ({ img, style, title }) => {
  return (
    <div className={style}>
      <img src={img} alt="" />
      <div className="text-center red-hat-display-200">{title}</div>
    </div>
  );
};

export default Carusel;
