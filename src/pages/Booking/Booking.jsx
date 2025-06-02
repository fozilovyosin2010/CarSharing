import React, { useState } from "react";
import salon from "../../assets/salon1.png";
import Steps from "../../components/Steps";
import { useSelector } from "react-redux";
import { slideId } from "../../reducers/slideId";
import { display } from "@mui/system";

const Booking = () => {
  let stepsData = [
    { id: 1, text: "Enter Ride Details" },
    { id: 2, text: "Choose a vehicle" },
    { id: 3, text: "Enter Contact Details" },
    { id: 4, text: "Booking Summary" },
  ];
  let btnData = [
    [false, "Choose a vehicle"],
    ["Enter Ride Details", "Enter Contact Details"],
    ["Choose a vehicle", "Booking Summary"],
    ["Enter Contact Details", false],
  ];

  let formData = [];

  let stepId = useSelector((e) => e.stepId.id);

  let addData = (event) => {
    event.preventDefault();
    // pickL dropL journeyT pickD pickT
    // console.log(event.target["pickD"].value);

    let data = {
      pickLocation: event.target["pickL"].value,
      dropLocation: event.target["dropL"].value,
      journeyType: event.target["journeyT"].value,
      pickUpDate: event.target["pickD"].value,
      pickUpTime: event.target["pickT"].value,
    };

    formData.push(data);
    console.log(formData);

    (event.target["pickL"].value = ""),
      (event.target["dropL"].value = ""),
      (event.target["pickD"].value = ""),
      (event.target["pickT"].value = "");
  };

  // console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`);

  function minDate(date) {
    return `${date.getFullYear()}-${0 + (date.getMonth() + 1).toString()}-${
      0 + date.getDate().toString()
    }`;
  }
  // console.log(minDate(new Date()));

  function maxDate(date) {
    let arr = [date.getFullYear(), date.getMonth(), date.getDate()];
    return arr.map((e, i) => {
      return i == 1 ? (e += 4) : e;
    });
  }
  // console.log(maxDate(new Date()));

  return (
    <div className="pt-[90px] px-[20px]">
      <div className="px-[20px] pb-[20px] ">
        <img src={salon} alt="" />
      </div>
      <div className="section mx-[20px] mt-[20px] bg-[#282828] ">
        <div className="flex relative justify-between  max-w-[800px] m-[0_auto]  p-[10px_20px]">
          <div className="absolute left-[40px] top-[40%] z-0 border-t-[1px] w-[calc(90%-50px)]  border-dashed border-[#888]"></div>
          {stepsData.map((e) => {
            return <Steps key={e.id} {...e} />;
          })}
        </div>
      </div>
      <div className="main pt-[20px] text-black">
        <form onSubmit={addData} className="px-[20px] max-w-[800px] m-[0_auto]">
          <div className="grid text-[#fff] max-md:grid-cols-1 grid-cols-2 gap-[20px]">
            <input
              name="pickL"
              className="border border-[#5c5757] inpStyle"
              type="text"
              placeholder="Pick up location"
              required
            />

            <input
              id="dropL"
              className="border border-[#5c5757] inpStyle"
              type="text"
              placeholder="Drop off location"
              required
            />
            <select
              id="journeyT"
              className="inpStyle border border-[#5c5757] col-span-2 max-md:col-span-1"
            >
              <option value="hourly">Hourly</option>
              <option value="distance">Distance</option>
            </select>
            <div className="relative flex z-20 border border-[#5c5757] flex-col inpStyle gap-1 ">
              <span className="absolute px-2 z-30 top-[-10px] red-hat-display-600 text-[14px]">
                Pick up date
              </span>
              <input
                id="pickD"
                type="date"
                pattern="[2025]{4}"
                min={minDate(new Date())}
                max={maxDate(new Date())}
                className="bg-transparent pt-1"
              />
            </div>
            <div className="relative flex z-20 border border-[#5c5757] flex-col inpStyle gap-1 ">
              <span className="absolute px-2 z-30 top-[-10px] red-hat-display-600 text-[14px]">
                Pick up time
              </span>
              <input id="pickT" type="time" className="inpStyle" />
            </div>
          </div>
          <div className="flex  justify-between pt-[20px]">
            {!btnData[stepId - 1][0] ? (
              <div></div>
            ) : (
              <button
                type="button"
                className="bg-[#ACACAC] red-hat-display-200 p-[8px_16px] rounded-md text-[14px]"
              >
                {btnData[stepId - 1][0]}
              </button>
            )}
            {!btnData[stepId - 1][1] ? (
              <div></div>
            ) : (
              <button
                type="submit"
                className="bg-[#fff] red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
              >
                {btnData[stepId - 1][1]}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
