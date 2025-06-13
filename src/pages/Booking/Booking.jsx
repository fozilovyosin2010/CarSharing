import React, { useEffect, useRef, useState } from "react";
import salon from "../../assets/salon1.png";
import Steps from "../../components/Steps";
import { useDispatch, useSelector } from "react-redux";
import { next, prev } from "../../reducers/stepId";

import mersB from "../../assets/Benz-V-Class.png";
import mersB2 from "../../assets/fcf3a5b062ce20bf24f27c6e8005d8e3 1.png";
import Bmw from "../../assets/M5 1.png";
import AutoCards from "../../components/AutoCards";
import InpStep2 from "../../components/InpStep2";

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

  let formData = {
    step1: [],
    step2: [],
    step3: [],
    step4: [],
  };

  let stepId = useSelector((e) => e.stepId.id);
  let disP = useDispatch();

  let [inp2Data, setInp2Data] = useState([]);

  function objToArr(obj) {
    return Object.entries(obj).map((e) => {
      return {
        label: e[0]
          .split("_")
          .map((e) => {
            return e.toUpperCase();
          })
          .join(" "),
        text: e[1],
      };
    });
  }

  let addData = (event) => {
    event.preventDefault();

    let data = {
      service_type: event.target["journeyT"].value,
      pick_up_location: event.target["pickL"].value,
      drop_off_location: event.target["dropL"].value,
      pick_up_date: event.target["pickD"].value,
      pick_up_time: event.target["pickT"].value,
      total_time: totalTime,
      total_distance: totalDis,
    };
    formData.step1 = data;
    setInp2Data(objToArr(formData.step1));
    console.log(formData.step1);
  };

  function minDate(date) {
    return `${date.getFullYear()}-${0 + (date.getMonth() + 1).toString()}-${
      0 + date.getDate().toString()
    }`;
  }

  function maxDate(date) {
    let arr = [date.getFullYear(), date.getMonth(), date.getDate()];
    let arr2 = arr.map((e, i) => {
      return i == 0 ? e : i == 1 ? 0 + `${(e += 4)}` : 0 + `${e}`;
    });

    return arr2.join("-");
  }

  let carData = [
    {
      img: mersB,
      price: "$445.00",
      pasanger: 7,
      title: "Mercedes Benz V-Class",
      bag: 7,
    },
    {
      img: mersB2,
      price: "$480.00",
      title: "Mercedes Benz S-Class",
      pasanger: 2,
      bag: 2,
    },
    {
      img: Bmw,
      price: "$390.00",
      pasanger: 2,
      bag: 2,
      title: "BMW M5 f90 Competition",
    },
  ];

  let step1Form = useRef();
  let step2Form = useRef();

  let [PickT, setPickT] = useState("06:00");
  let [DropT, setDropT] = useState("06:00");

  let [totalTime, setTotalTime] = useState("");
  let [totalDis, setTotalDis] = useState(0);

  let [switchF, setSwitchF] = useState("hourly");
  useEffect(() => {
    console.log(switchF);
  }, [switchF]);

  let minDropTime = (prev) => {
    let prevArr = prev.split(":");
    let plusH = Number(prevArr[0]) + 1 < 24 ? Number(prevArr[0]) + 1 : "00";

    return plusH.toString().length == 1
      ? `${0 + plusH.toString()}:${prevArr[1]}`
      : `${plusH}:${prevArr[1]}`;
  };

  useEffect(() => {
    setDropT(minDropTime(PickT));
  }, [PickT]);

  return (
    <div className="pt-[90px] px-[20px] overflow-x-hidden">
      <div className="px-[20px] pb-[20px] ">
        <img src={salon} alt="" />
      </div>
      <div className="section mx-[20px] mt-[20px] bg-[#282828] ">
        <div className="flex relative justify-between gap-2 max-w-[800px] m-[0_auto]  p-[10px_20px]">
          <div className="absolute left-[40px] top-[40%] max-sm:top-[35%] z-0 border-t-[1px] w-[calc(90%-50px)]  border-dashed border-[#888]"></div>
          {stepsData.map((e) => {
            return <Steps key={e.id} {...e} />;
          })}
        </div>
      </div>

      <div className="main max-w-[1200px] m-[0_auto] pt-[20px] text-black">
        {/* step1 */}
        <form
          ref={step1Form}
          onSubmit={addData}
          className={`px-[20px] duration-700 ${
            stepId !== 1 ? "hidden" : null
          }  max-w-[1340px] m-[0_auto]`}
        >
          <div className="grid text-[#fff]  max-md:grid-cols-1 grid-cols-2 gap-[20px]">
            <input
              name="pickL"
              className="border p-[10px_20px] border-[#5c5757] inpStyle"
              type="text"
              value={"dw"}
              placeholder="Pick up location"
              required
            />

            <input
              id="dropL"
              className="border p-[10px_20px] border-[#5c5757] inpStyle"
              type="text"
              value={"dw"}
              placeholder="Drop off location"
              required
            />

            <div className="relative p-[10px_20px] flex z-20 border border-[#5c5757] flex-col inpStyle gap-1 ">
              <span className="absolute px-2 z-30 top-[-10px] red-hat-display-600 text-[14px]">
                Pick up date
              </span>
              <input
                id="pickD"
                type="date"
                value={"2025-06-09"}
                min={minDate(new Date())}
                max={maxDate(new Date())}
                className="bg-transparent pt-1"
              />
            </div>
            <div className="relative p-[10px_20px] flex z-20 border border-[#5c5757] flex-col inpStyle gap-1 ">
              <span className="absolute px-2 z-30 top-[-10px] red-hat-display-600 text-[14px]">
                Pick up time
              </span>
              <input
                onChange={(e) => {
                  setPickT(e.target.value);
                }}
                value={"06:00"}
                id="pickT"
                max={"23:00"}
                min={"06:00"}
                type="time"
                className="inpStyle"
                required
              />
            </div>
            <select
              id="journeyT"
              onChange={(e) => {
                setTotalDis(0);
                setTotalTime("0");
                setSwitchF(e.target.value);
              }}
              className="inpStyle p-[10px_20px] border border-[#5c5757]  max-md:col-span-1"
            >
              <option value="hourly">Hourly</option>
              <option value="distance">Distance</option>
            </select>
            {switchF == "hourly" ? (
              <div className="relative p-[10px_20px] flex z-20 border border-[#5c5757] flex-col inpStyle gap-1 ">
                <span className="absolute px-2 z-30 top-[-10px] red-hat-display-600 text-[14px]">
                  Drop off time
                </span>
                <input
                  id="totalT"
                  type="time"
                  value={totalTime}
                  onChange={(e) => setTotalTime(e.target.value)}
                  min={DropT}
                  max={"23:00"}
                  className="bg-transparent pt-1"
                  required
                />
              </div>
            ) : (
              <input
                type="number"
                className="inpStyle"
                max={25}
                value={totalDis}
                onChange={(e) => setTotalDis(e.target.value)}
                min={1}
                name="totalD"
                placeholder="Total Distance"
                required
              />
            )}
          </div>
          <div className="flex  justify-between pt-[20px]">
            <div></div>
            <button
              onClick={() => {
                // disP(next());
              }}
              type="submit"
              className="bg-[#fff] red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              {btnData[stepId - 1][1]}
            </button>
          </div>
        </form>
        {/* step2 */}
        <div
          ref={step2Form}
          className={`duration-[.3s] ${
            stepId !== 2 ? "hidden" : null
          } max-w-[1340px] m-[0_auto]`}
        >
          <div className="block1 flex items-start justify-center gap-[20px]">
            <div className="miniBlock1 w-[25%] flex flex-col gap-4 bg-[#333333] rounded-lg p-[20px]">
              {inp2Data.map((e, i) => {
                return <InpStep2 key={i} {...e} />;
              })}
            </div>
            <div className="miniBlock w-full flex flex-col gap-3">
              {carData.map((e, i) => {
                return <AutoCards key={i} {...e} />;
              })}
            </div>
          </div>
          <div className="block2 flex justify-between pt-[20px]">
            <button
              onClick={() => {
                disP(prev());
              }}
              type="submit"
              className="bg-[#ACACAC] red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              Enter Ride Details
            </button>
            <button
              onClick={() => disP(next())}
              type="submit"
              className="bg-[#fff] red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              {btnData[stepId - 1][1]}
            </button>
          </div>
        </div>
        {/* <button
          onClick={() => disP(prev())}
          type="submit"
          className="bg-[#ACACAC] red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
        >
          Enter Ride Details
        </button> */}

        {/* <div className="flex  justify-between pt-[20px]">
          {!btnData[stepId - 1][0] ? (
            <div></div>
          ) : (
            <button
              type="button"
              onClick={() => disP(prev())}
              className="bg-[#ACACAC] red-hat-display-200 p-[8px_16px] rounded-md text-[14px]"
            >
              {btnData[stepId - 1][0]}
            </button>
          )}
          {!btnData[stepId - 1][1] ? (
            <div></div>
          ) : (
            <button
              onClick={() => disP(next())}
              type="submit"
              className="bg-[#fff] red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              {btnData[stepId - 1][1]}
            </button>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Booking;
