import React from "react";

const InpStep2 = ({ label, text }) => {
  return (
    <div className="flex  flex-col border-b border-dashed">
      <div className="text-[#BDBDBD80] text-[14px] red-hat-display-200">
        {label}
      </div>
      <div className="text-[#fff] red-hat-display-200 text-[13px] pb-2">
        {text}
      </div>
    </div>
  );
};

export default InpStep2;
