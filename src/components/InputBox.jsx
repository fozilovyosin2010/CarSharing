import React from "react";

const InputBox = ({ label, placeHolder, type, id }) => {
  return (
    <div
      style={
        id !== 3 ? { borderRightStyle: "solid", borderRightWidth: "1px" } : null
      }
      className="my-2 mr-2 flex flex-col py-1 pr-1 w-full .red-hat-display-600"
    >
      <div className="text-[#ccc] text-[14px]">{label}</div>
      <input
        type={type}
        className="bg-transparent  placeholder:text-[#fff]"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default InputBox;
