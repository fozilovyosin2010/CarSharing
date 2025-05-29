import React, { useEffect, useState } from "react";

import Mers from "../../assets/Mers.png";
import Chaufer from "../../assets/chauffeur-service-10 1.png";
import InputBox from "../../components/InputBox";

import img1 from "../../assets/472-transfer-to-dalaman 1.png";
import img2 from "../../assets/Car5 1.png";
import img3 from "../../assets/Tips-for-a-Successful-Airport-Transfer-Limousine-Service 1.png";
import img4 from "../../assets/Reasons.png";
import SerCards from "../../components/serCards";

import BenzV2 from "../../assets/Benz-2.png";

import rightArr from "../../assets/rightArr.svg";
import leftArr from "../../assets/leftArr.svg";

import mersB from "../../assets/Benz-V-Class.png";
import mersB2 from "../../assets/fcf3a5b062ce20bf24f27c6e8005d8e3 1.png";
import Bmw from "../../assets/M5 1.png";
import Carusel from "../../components/Carusel";

// logos

import Cartier from "../../assets/1200px-Cartier_logo.png";
import Emirates from "../../assets/Emirates.png";
import IWC from "../../assets/IWC.png";
import Logo_Chopard from "../../assets/Logo_Chopard.png";
import Logo_Genève from "../../assets/Logo_Genève_Aéroport 1.png";

// info img

import CarWash from "../../assets/carWash.png";
import Driver from "../../assets/driverImg.png";
import MaskG from "../../assets/Mask group.png";
import PayM from "../../assets/payM.png";

import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "../../reducers/slideId";
import InfoCard from "../../components/InfoCard";

import homeUber from "../../assets/homeUberDriver.jpg";

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

  let services = [
    {
      img: img1,
      text: "Airport transfers",
      des: "With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze.",
    },
    {
      img: img2,
      text: "Intercity Rides",
      des: "Your stress-free solution for traveling between cities, with chauffeurs across the globe.",
    },
    {
      img: img3,
      text: "Business Meeting",
      des: "Concentrate on your meeting with your partners, forget about the road and the car, which will distract your thoughts.",
    },
    {
      img: img4,
      text: "Wedding Parties",
      des: "Our friendly, and attentive service combined with thorough attention to detail ensure you can truly relax and enjoy your special day.",
    },
  ];

  let caruselData = [
    { id: 0, img: mersB, title: "Mersedes Benz V-Class" },
    { id: 1, img: mersB2, title: "Mersedes Benz S-Class" },
    {
      id: 2,
      style: "max-sm:col-span-1 max-md:col-span-2 ",
      img: Bmw,
      title: "BMW M5 F90 Competition",
    },
  ];

  let logos = [Logo_Chopard, Logo_Genève, Emirates, IWC, Cartier];

  let slideId = useSelector((e) => e.slideId.id);
  let dispatch = useDispatch();

  let infoL = [
    {
      img: MaskG,
      title: "Online Reservation",
      text: "No need to leave the house and go somewhere. Call our drivers online, choosing the right car for yourself.",
    },
    {
      img: Driver,
      title: "Professional Drivers",
      text: "Limogroup chauffeurs are among the best trained and most experienced professionals in the industry.",
    },
    {
      img: CarWash,
      title: "Prestige Vehicles",
      text: "All our cars radiate maximum comfort and safety, as well as the latest innovations that our industry can offer.",
    },
    {
      img: PayM,
      title: "Online Payment",
      text: "For the convenience of our customers, we have made an online payment system, you just have to wait for your car",
    },
  ];
  return (
    <div className="pt-[86px] bg-[url('src/assets/Union1.png')] bg-center bg-repeat-y ">
      <div className="sec1  mx-[30px] text-black mb-[30px] rounded-[40px] max-h-[580px] bg-[#fff]">
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

        <div className="block2 section2 max-lg:hidden px-[20px] text-[#fff]">
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
                className="rounded-b-lg flex  items-center max-w-full justify-between px-2 rounded-tr-lg bg-[#484848]  "
              >
                <div className="flex text-[14px] justify-between gap-2 w-full items-center">
                  {inpTexts.map((e, i) => {
                    return <InputBox key={i} {...e} id={i} />;
                  })}
                </div>
                <button className="p-[15px_32px]  font-medium text-[16px] shadow-[0px_0px_5px_#fff] rounded-lg bg-[#fff] text-black">
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
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="sec2 section2 pt-[60px] px-[20px] gap-3 flex flex-col">
        <div className="block1">
          <div className="nova-square-regular text-[45px]">About Us</div>
          <div className="red-hat-display-200 text-[#ddd] text-[16px]">
            The best offer of world-class transportation solutions for your
            events
          </div>
        </div>
        <div className="block2 bg-[#333333] p-[30px] rounded-[27px] flex justify-between gap-[30px] max-lg:flex-wrap items-center">
          <img src={Chaufer} className="w-[500px] max-lg:w-full" />
          <div className="flex flex-col items-start max-w-[600px] content-between max-lg:text-[12px] max-lg:max-w-full text-[14px] gap-[30px]">
            <div>
              A Chauffeur Car Service company at your disposal for all your
              trips.
            </div>
            <div>
              Recognized for its professionalism towards companies,
              professionals and individuals, Limogroup is a company based in
              Switzerland. Specialized in the tailor-made transport with
              chauffeur, we offer high end services for your private and
              business trips.
            </div>
            <div>
              We have a fleet of prestigious and modern vehicles for a
              comfortable and secure accompaniment in the destinations of your
              choice. Our mission is to provide you with an excellent service as
              well as a personalized welcome for your short and long journeys.
            </div>
            <div>
              Thanks to our experience, we guarantee a high-end accompaniment to
              meet all your needs: rental of a chauffeured car, transfers, group
              transfers, private events, weddings, conferences and exhibitions,
              meet & greet... Our bilingual drivers are available to guide you
              in all your trips in Switzerland and abroad.
            </div>
          </div>
        </div>
      </div>
      <div className="sec3 section2 pt-[60px] px-[20px]">
        <div className="block1">
          <div className="nova-square-regular text-[45px]">Our Services</div>
          <div className="red-hat-display-200 text-[#ddd] text-[16px]">
            Worldwide fast & easy access for all occasions.
          </div>
        </div>
        <div className="block2 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 justify-center gap-2">
          {services.map((e, i) => {
            return <SerCards key={i} {...e} />;
          })}
        </div>
      </div>
      <div className="sec4 overflow-x-hidden pb-[20px] section2 px-[20px] flex flex-col justify-between gap-3">
        <div className="block1">
          <div className="nova-square-regular text-[45px]">Our Fleets</div>
          <div className="red-hat-display-200 text-[#ddd] text-[16px]">
            Choose according to your desire and circumstances
          </div>
        </div>

        <div className="block2 mb-[70px] relative max-md:flex-col flex backdrop-blur-[5px] p-[20px_40px] rounded-[15px]  gap-1 bg-[#6a67673a] justify-between">
          <div className="miniBlock1 py-2 flex flex-col gap-[20px]">
            <div className="red-hat-display-600 text-[35px] ">
              Mersedes Benz V Class
            </div>
            <div>
              <div>
                <span className="red-hat-display-600 text-[18px]">
                  Passengers:
                </span>{" "}
                6
              </div>
              <div>
                <span className="red-hat-display-600 text-[18px] ">
                  Transmission:
                </span>{" "}
                automatic
              </div>
            </div>
            <div>
              <button className="p-[8px_32px] red-hat-display-600 text-[14px] flex items-center gap-3 bg-[#fff] text-black rounded-lg">
                <div>Get Limousine</div>
              </button>
            </div>
          </div>
          <div className="miniBlock2 pb-[80px] relative flex flex-col justify-between">
            <div className="flex relative gap-1">
              <div className="nova-square-regular text-[25px]">190$ /</div>
              <div className="nova-square-regular text-[14px] text-[#ccc] pt-3">
                per hour
              </div>
            </div>
            <div className="absolute z-20 top-[30%] right-[10px]">
              {slideId !== undefined ? (
                <img
                  src={caruselData[slideId].img}
                  className="w-[400px] max-w-full max-md:inline-block hidden"
                />
              ) : null}
            </div>
          </div>
          {slideId !== undefined ? (
            <img
              src={caruselData[slideId].img}
              className="absolute top-[30%] right-[100px] max-lg:right-[10px] translate-x-[0] duration-500  max-lg:w-[500px] max-md:hidden flex justify-center w-[600px] "
            />
          ) : null}
        </div>
        <div className="block3 pt-3 max-md:pt-[40px]">
          <div className="flex gap-3 z-10">
            <button
              onClick={() => dispatch(minus())}
              className="active:scale-110"
            >
              <img src={leftArr} alt="" />
            </button>
            <button
              onClick={() => dispatch(plus())}
              className="active:scale-110"
            >
              <img src={rightArr} alt="" />
            </button>
          </div>
          <div className="imgMiniblock grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 justify-center gap-3 pt-3">
            {caruselData.map((e) => {
              return <Carusel key={e.id} {...e} />;
            })}
          </div>
        </div>
      </div>
      <div className="sec5 section">
        <div className="flex m-[20px] rounded-lg max-md:flex-wrap gap-3 max-md:justify-center justify-between items-center p-[20px_40px] bg-[#fff]">
          {logos.map((e, i) => {
            return <img key={i} className="w-[100px] " src={e} alt="" />;
          })}
        </div>
      </div>
      <div className="sec6 section2 px-[20px]">
        <div className="block1">
          <div className="nova-square-regular text-[45px]">
            Why Choose limogroup?
          </div>
          <div className="red-hat-display-200 text-[16px]">
            Our main advantages are to be chosen by us
          </div>
        </div>
        <div className="block2 grid gap-2 max-md:grid-cols-1 content-center  grid-cols-2">
          {infoL.map((e, i) => {
            return <InfoCard key={i} {...e} />;
          })}
        </div>
      </div>
      <div className="sec7 section2 px-[20px]">
        <div className="block1">
          <div className="nova-square-regular text-[45px]">Contact us</div>
          <div className="red-hat-display-200 text-[16px]">
            Perhaps you have any questions? Please write to us
          </div>
        </div>
        <div className="block2 flex pt-4 max-md:flex-col max-md:items-center justify-between gap-[20px] ">
          <form className="miniBlock1 w-[100%] flex flex-col justify-between  ">
            <div className="flex flex-col gap-2">
              <input className="inpStyle" placeholder="Name ..." type="text" />
              <input
                className="inpStyle"
                type="text"
                placeholder="example@gmail.com"
              />
              <input
                className="inpStyle"
                type="text"
                placeholder="+998 90 901  54 55"
              />
              <textarea
                className="inpStyle min-h-[35px] max-h-[100px]"
                placeholder="Message ..."
              ></textarea>
            </div>
            <div className="flex flex-wrap justify-between gap-1 items-center pt-3">
              <div className="flex text-[12px] gap-3">
                <input type="checkbox" />
                <div>I agree to the Terms of Service and Privacy Policy.</div>
              </div>
              <button className="bg-[#fff] text-black font-medium rounded-md text-[12px] p-[8px_32px]">
                Submit Now
              </button>
            </div>
          </form>
          <img
            src={homeUber}
            className="w-[40%] max-w-full rounded-[15px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
//  https://www.figma.com/design/vH4n5ixjsrgdb2FXrOefpN/%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%BF%D0%B0%D1%81%D1%81%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2?t=SCtUy0534VyBMnQM-0
