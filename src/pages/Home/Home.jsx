import React, { useState } from "react";

import Mers from "../../assets/Mers.png";
import InputBox from "../../components/InputBox";
const Home = () => {
  // <div className="bg-[url('src/assets/Union1.png')] bg-repeat-y bg-center h-screen"></div>

  let [header, setHeader] = useState(true);
  let inpTexts = [
    {
      label: "Pick up adress",
      placeHolder: "From: address, airport, hotel, ...",
      type: "text",
    },
    {
      type: "text",
      label: "Drop Off Address",
      placeHolder: "to: address, airport, hotel, ...",
    },
    {
      type: "date",
      label: "Pick up Date",
      placeHolder: "WEB 19, 2018",
    },
    {
      type: "time",
      label: "Pick Up Time",
      placeHolder: "12:25 am",
    },
  ];

  let [rangeL, setRangeL] = useState(0);
  let [rangeH, setRangeH] = useState(0);

  return (
    <div className="pt-[86px] bg-[url('src/assets/Union1.png')] bg-center bg-repeat-y h-screen">
      <div className="sec1 mx-[30px] text-black mb-[30px] rounded-[40px] max-h-[580px] bg-[#fff]">
        <div className="block1 ">
          <div className="miniBlock1 rounded-[40px] flex items-center max-w-[1440px] m-[0_auto] z-10 w-full bg-[url('src/assets/Mers.png')] bg-right h-[500px] bg-no-repeat ">
            <div className="flex flex-col max-xl:bg-[#ffffff5b] max-md:w-full max-xl:backdrop-blur-[5px] p-[20px] items-start justify-between gap-[20px]">
              <div className="nova-square-regular max-w-[450px] text-[75px]">
                One global solution
              </div>
              <div className="red-hat-display-600  max-w-[350px] text-[18px]">
                Offering the Best Limo Service in Switzerland, Experience it
                Now!
              </div>
              <button className="red-hat-display-600 p-[8px_32px] bg-black text-[#fff] rounded-lg">
                Booking
              </button>
            </div>
          </div>
        </div>

        <div className="block2 max-w-[1200px] max-lg:hidden  px-[20px] text-[#fff] m-[0_auto]">
          <div className="miniBlock1 flex">
            <div
              onClick={() => setHeader(false)}
              className="cursor-pointer bg-[#373737] p-[10px_32px] rounded-tl-lg"
            >
              Distance
            </div>
            <div
              onClick={() => setHeader(true)}
              className="cursor-pointer bg-[#484848] p-[10px_32px] rounded-tr-lg"
            >
              Hourly
            </div>
          </div>
          <div className="miniBlock2 ">
            {header ? (
              <form
                action=""
                className="rounded-b-lg flex items-center max-w-full justify-between gap-[20px] px-2 rounded-tr-lg bg-[#484848]  "
              >
                <div className="flex w-full items-center">
                  {inpTexts.map((e, i) => {
                    return <InputBox key={i} {...e} id={i} />;
                  })}
                </div>
                <button className="p-[15px_32px] font-medium text-[16px] shadow-[0px_0px_5px_#fff] rounded-lg bg-[#fff] text-black">
                  Search
                </button>
              </form>
            ) : (
              <div className="rounded-b-lg flex justify-between gap-3 text-black py-[10px] rounded-tr-lg  bg-[#373737]   ">
                <div className="flex w-full p-[10px_32px] justify-between">
                  <input
                    type="range"
                    value={rangeL}
                    min={0}
                    max={100}
                    className="w-[80%]"
                    onChange={(e) => setRangeL(e.target.value)}
                  />
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      onChange={(e) => setRangeL(e.target.value)}
                      className="w-[50px] rounded-lg text-center"
                      max={100}
                      value={rangeL}
                    />
                    <div className="text-[#fff]">km</div>
                  </div>
                </div>
                <div className="flex w-full p-[10px_32px] justify-between">
                  <input
                    type="range"
                    value={rangeH}
                    min={0}
                    max={10}
                    className="w-[80%]"
                    onChange={(e) => setRangeH(e.target.value)}
                  />
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      onChange={(e) => setRangeH(e.target.value)}
                      className="w-[50px] rounded-lg text-center"
                      max={10}
                      value={rangeH}
                    />
                    <div className="text-[#fff]">hour</div>
                  </div>
                </div>
              </div>
            )}

            {/* {header?hello:} */}
          </div>
        </div>
      </div>
      <div className="sec2"></div>
    </div>
  );
};

export default Home;
//  https://www.figma.com/design/vH4n5ixjsrgdb2FXrOefpN/%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%BF%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2?t=SCtUy0534VyBMnQM-0
