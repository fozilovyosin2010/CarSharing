import React from "react";

const InputBox = ({ label, placeHolder, type, id }) => {
  return (
    <div className="flex flex-col py-1 items-center w-full .red-hat-display-600">
      <div
        style={
          id !== 3
            ? { borderRightStyle: "solid", borderRightWidth: "1px" }
            : null
        }
        className="my-2 p-[1px_32px]"
      >
        <div className="text-[#ccc]">{label}</div>
        <input
          type={type}
          className="bg-transparent placeholder:text-[#fff]"
          placeholder={placeHolder}
        />
      </div>
    </div>
  );
};

export default InputBox;
