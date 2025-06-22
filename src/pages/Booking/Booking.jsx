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

import stripe from "../../assets/stripe.png";
import paypal from "../../assets/paypal.png";
import BtnEdit from "../../components/BtnEdit";

import vectorL from "../../assets/vectorL.svg";
import vectorR from "../../assets/vectorR.svg";

const Booking = () => {
  let stepsData = [
    { id: 1, text: "Enter Ride Details" },
    { id: 2, text: "Choose a vehicle" },
    { id: 3, text: "Enter Contact Details" },
    { id: 4, text: "Booking Summary" },
  ];

  let [formData, setFormData] = useState([]);

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
      total_time: totalTime
        .split(":")
        .map((e, i) => {
          return i == 0 ? Number(e) + "h" : Number(e) + "m";
        })
        .join(", "),
      total_distance: totalDis + "km",
    };
    setInp2Data(objToArr(data));
    disP(next());
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
      id: 1,
      img: mersB,
      price: "$445.00",
      pasanger: 7,
      title: "Mercedes Benz V-Class",
      bag: 7,
    },
    {
      id: 2,
      img: mersB2,
      price: "$480.00",
      title: "Mercedes Benz S-Class",
      pasanger: 2,
      bag: 2,
    },
    {
      id: 3,
      img: Bmw,
      price: "$390.00",
      title: "BMW M5 f90 Competition",
      pasanger: 2,
      bag: 2,
    },
  ];

  let [totalTime, setTotalTime] = useState("01:12");
  let [totalDis, setTotalDis] = useState(0);

  let [switchF, setSwitchF] = useState("hourly");

  let selCar = useSelector((e) => e.stepId.carId);

  //alert for step2
  let [step2Alert, setStep2Alert] = useState(false);

  let [card, setCard] = useState("");
  //alert for step3
  let [step3Alert, setStep3Alert] = useState(false);

  // steps form obj
  let [inp3Data, setInp3Data] = useState([]);

  function addDataStep3(event) {
    event.preventDefault();
    if (card !== "") {
      let data = {
        First_Name: event.target["inpFName"].value,
        Last_Name: event.target["inpLName"].value,
        EMail: event.target["inpEmail"].value,
        Phone: event.target["inpPhone"].value,
        Comments: event.target["inpComments"].value,
      };

      setInp3Data(objToArr(data));
      disP(next());
    }
  }

  useEffect(() => {
    console.log(inp3Data);
  }, [inp3Data]);

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

      {/* steps */}
      <div className="main max-w-[1200px] m-[0_auto] pt-[20px] text-black">
        {/* step1 */}
        <form
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
                  Total time
                </span>
                <input
                  type="time"
                  value={totalTime}
                  onChange={(e) => setTotalTime(e.target.value)}
                  min={"1:00"}
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
          <div className="btn flex justify-between pt-[20px]">
            <div></div>
            <button
              type="submit"
              className="bg-[#fff] flex justify-between items-center gap-3 red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              <span>Choose a vehicle</span>
              <img src={vectorR} className="w-[15px] h-[15px]" alt="" />
            </button>
          </div>
        </form>
        {/* step2 */}
        <div
          className={`duration-[.3s] ${
            stepId !== 2 ? "hidden" : null
          } max-w-[1340px] m-[0_auto]`}
        >
          <div className="block1 flex max-md:flex-wrap items-start justify-center gap-[20px]">
            <div className="miniBlock1 max-md:w-full p-2 w-[250px] ">
              <div className="flex flex-col gap-4 bg-[#333333] rounded-lg p-[20px]">
                {inp2Data.map((e, i) => {
                  return <InpStep2 key={i} {...e} />;
                })}
              </div>

              <div className="border-t border-dashed mt-3 pt-3 flex text-[#fff] justify-between text-[14px] red-hat-display-200">
                <div>Total</div>
                <div>450$</div>
              </div>
            </div>
            <div className="miniBlock2 w-full flex flex-col gap-3">
              {carData.map((e, i) => {
                return <AutoCards key={e.id} {...e} />;
              })}
            </div>
          </div>
          <div className="block2 flex justify-between gap-4 pt-[20px]">
            <button
              onClick={() => {
                disP(prev());
              }}
              type="button"
              className="bg-[#ACACAC] flex justify-between items-center gap-3  red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              <img src={vectorL} className="w-[15px] h-[15px]" alt="" />
              <span className="line-clamp-1">Enter Ride Details</span>
            </button>
            <button
              onClick={() => {
                if (selCar !== 0) {
                  disP(next());
                  setInp2Data([...inp2Data]);
                } else {
                  setStep2Alert(true);
                  setTimeout(() => {
                    setStep2Alert(false);
                  }, 1500);
                }
              }}
              type="submit"
              className="relative flex justify-between items-center gap-3  bg-[#fff] red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              <p
                className={`absolute duration-300 ${
                  step2Alert ? "block" : "hidden"
                } red-hat-display-600 top-[-25px] px-1 bg-[#ddd] border border-black`}
              >
                <span>Choose a vehicle!</span>
              </p>
              <span className="line-clamp-1">Enter Contact Details</span>
              <img src={vectorR} className="w-[15px] h-[15px]" alt="" />
            </button>
          </div>
        </div>
        {/*here  */}
        {/* step3 */}
        <form
          onSubmit={addDataStep3}
          className={`${stepId !== 3 ? "hidden" : null} flex flex-col gap-3`}
        >
          <div className="block1 flex max-md:flex-wrap max-md:justify-center gap-[20px] justify-between">
            <div className="miniBlock1 max-md:w-full  w-[30%]">
              <div className="flex flex-col gap-4 bg-[#333333] rounded-lg p-[20px]">
                {inp2Data.map((e, i) => {
                  return <InpStep2 key={i} {...e} />;
                })}
                {selCar > 0 ? (
                  <div className="flex  flex-col border-b border-dashed">
                    <div className="text-[#BDBDBD80] text-[14px] red-hat-display-200">
                      VEHICLE
                    </div>
                    <div className="text-[#fff] red-hat-display-200 text-[13px] pb-2">
                      {carData[selCar - 1].title}
                    </div>
                  </div>
                ) : null}
              </div>
              {selCar > 0 ? (
                <div className="mt-3 pt-3 flex text-[#fff] justify-between text-[14px] red-hat-display-200">
                  <div>Selected vehicle</div>
                  <div>{`${carData[selCar - 1].price}`}</div>
                </div>
              ) : null}
              <div className="border-t border-dashed mt-3 pt-3 flex text-[#fff] justify-between text-[14px] red-hat-display-200">
                <div>Total</div>
                <div>450$</div>
              </div>
            </div>
            <div className="miniBlock2 w-[70%] max-md:w-full flex flex-col justify-between gap-3">
              <div>
                <div className="mb-3 text-[#fff] red-hat-display-600 text-[14px]">
                  CONTACT DETAILS
                </div>
                {/* inputs */}
                <div className="grid gap-3 grid-cols-2">
                  <input
                    required
                    name="inpFName"
                    value={"Yosin"}
                    className="inpStyle p-[10px_20px]"
                    placeholder="First Name"
                    type="text"
                  />
                  <input
                    required
                    name="inpLName"
                    value={"Fozilov"}
                    className="inpStyle p-[10px_20px]"
                    placeholder="Last Name"
                    type="text"
                  />
                  <input
                    name="inpEmail"
                    required
                    value={"yosinf@gmail.com"}
                    className="inpStyle p-[10px_20px]"
                    placeholder="E-mail address"
                    type="email"
                  />
                  <input
                    name="inpPhone"
                    required
                    value={"123456789"}
                    className="inpStyle p-[10px_20px]"
                    placeholder="Phone number"
                    type="number"
                    maxLength={9}
                  />
                  <textarea
                    name="inpComments"
                    value={"defwekgiwrog"}
                    required
                    className="inpStyle p-[10px_20px] col-span-2 min-h-[100px] max-h-[150px]"
                    placeholder="Comments ..."
                  ></textarea>
                </div>
              </div>
              <div className="flex text-[#fff] flex-col gap-2">
                <div className="red-hat-display-200">Choose payment method</div>
                <div className="flex gap-4">
                  {/* stripe */}
                  <button
                    type="button"
                    onClick={() => setCard(card == "stripe" ? "" : "stripe")}
                    className={`p-[5px_20px] duration-300 ${
                      card == "stripe" ? "bg-[#d4dff5]" : "bg-[#fff]"
                    }`}
                  >
                    <img src={stripe} className="w-[150px] h-[50px]" alt="" />
                  </button>

                  {/* paypal */}
                  <button
                    type="button"
                    onClick={() => setCard(card == "paypal" ? "" : "paypal")}
                    className={`p-[5px_20px] duration-300 ${
                      card == "paypal" ? "bg-[#d4dff5]" : "bg-[#fff]"
                    }`}
                  >
                    <img src={paypal} className="w-[150px] h-[50px]" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block2 flex justify-between">
            <button
              onClick={() => {
                disP(prev());
              }}
              type="button"
              className="bg-[#ACACAC] flex justify-between items-center gap-3 red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              <img src={vectorL} className="w-[15px] h-[15px]" alt="" />
              <span>Choose a vihicle</span>
            </button>
            <button
              type="submit"
              onClick={() => {
                if (card == "") {
                  setStep3Alert(true);
                  setTimeout(() => {
                    setStep3Alert(false);
                  }, 1500);
                } else {
                  setStep3Alert(false);
                }
              }}
              className="bg-[#fff] flex justify-between items-center gap-3 relative red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              <p
                className={`absolute top-[-25px] duration-300 ${
                  step3Alert ? "block" : "hidden"
                } text-[12px] line-clamp-1 red-hat-display-600  px-1 bg-[#ddd] border border-black`}
              >
                Choose a payment
              </p>
              <div>Booking Summary</div>
              <img src={vectorR} className="w-[15px] h-[15px]" alt="" />
            </button>
          </div>
        </form>
        {/* step4 */}
        <div className={` ${stepId == 4 ? "block" : "hidden"}`}>
          {/* blocks */}
          <div className="flex gap-3 items-start max-sm:flex-col justify-between">
            <div className="block1 max-md:w-full flex w-[30%] flex-col gap-3">
              <div className="miniBlock1 rounded-lg bg-[#333333] flex p-[20px] gap-4 flex-col">
                <p className="red-hat-display-600 text-[16px] text-[#fff]">
                  Contact & Billing Info
                </p>
                <div className="flex flex-col gap-4  rounded-lg ">
                  {inp3Data.map((e) => {
                    return <InpStep2 {...e} />;
                  })}
                </div>
                <BtnEdit />
              </div>
              <div className="miniBlock2 flex flex-col gap-4  rounded-lg bg-[#333333] pt-0 p-[20px]">
                <div className="#B3B3B3 red-hat-display-600 text-[#fff] py-[20px]">
                  Payment Method
                </div>
                <div className="flex  flex-col border-b border-dashed">
                  <div className="text-[#BDBDBD80] text-[14px] red-hat-display-200">
                    YOUR CHOISE
                  </div>
                  <div className="text-[#fff] red-hat-display-200 text-[13px] pb-2">
                    {card}
                  </div>
                </div>
                <BtnEdit />
              </div>
            </div>

            <div className="flex justify-between max-md:w-full gap-3  max-md:flex-col">
              <div className="block2 rounded-lg w-[50%] max-md:w-full bg-[#333333] p-[20px]">
                <div className="flex flex-col  gap-4 rounded-lg p-[20px]">
                  {inp2Data.map((e, i) => {
                    return <InpStep2 key={i} {...e} />;
                  })}
                </div>
                <BtnEdit />
              </div>
              {/* block3 */}
              {selCar > 0 ? (
                <div className="block3 flex flex-col gap-3 max-md:w-full w-[50%] relative">
                  <div className="miniBlock1 rounded-lg bg-[#333333] p-[20px]">
                    <div className="absolute top-3 left-3">
                      <BtnEdit />
                    </div>
                    <img src={carData[selCar - 1].img} className="w-full" />
                  </div>
                  <div className="miniBlock2">
                    <div className="mt-3 pt-3  flex text-[#fff] justify-between text-[14px] red-hat-display-200">
                      <div className="red-hat-display-600">
                        Selected Vehicle
                      </div>
                      <div className="red-hat-display-600">{`${
                        carData[selCar - 1].price
                      }`}</div>
                    </div>
                    <div className="border-t border-dashed mt-3 pt-3 red-hat-display-600 flex text-[#fff] justify-between text-[14px] red-hat-display-200">
                      <div className="red-hat-display-600">Total</div>
                      <div className="red-hat-display-600">450$</div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="btns flex justify-between pt-[20px]">
            <button
              onClick={() => {
                disP(prev());
              }}
              className="bg-[#ACACAC] flex justify-between items-center gap-3 red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              <img src={vectorL} className="w-[15px] h-[15px]" alt="" />
              Enter Contact Details
            </button>
            <button
              type="submit"
              className="bg-[#fff] red-hat-display-200  p-[8px_16px] rounded-md text-[14px]"
            >
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
