import React, { use, useEffect, useRef, useState } from "react";
import { href, Outlet, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import flogo from "../assets/fLogo.png";

import phoneImg from "../assets/phoneImg.png";
import Clock from "../assets/Clock.png";
import location from "../assets/location.png";
import mail from "../assets/mail.png";

const Layout = () => {
  let links = [
    { name: "Home", link: "/#home" },
    { name: "About Us", link: "/#about" },
    { name: "Our service", link: "/#service" },
    { name: "Fleets", link: "/#fleets" },
  ];
  let [valLink, setValLink] = useState(false);

  let tFoot = ["Legal ", "Privacy Policy ", "Terms of Use"];

  let detail_List = [
    { img: phoneImg, des: "+41 79 896 96 96" },
    { img: location, des: "ch. des Saules 19, 1800 Vevey, Switzerland" },
    { img: mail, des: "info@limogroup.ch" },
    { img: Clock, des: "Every Day Around the clock" },
  ];

  let [change, setChange] = useState(false);
  let btnChange = useRef();
  let changeMod = useRef();

  let root = window.document.documentElement;

  useEffect(() => {
    btnChange.current.classList.toggle("change");

    root.style.overflow = change ? "hidden" : "visible";

    setTimeout(() => {
      setValLink(!valLink);
    }, 500);

    if (changeMod.current) {
      setTimeout(() => {
        changeMod.current.classList.toggle("flow");
      }, 100);
    } else {
    }
  }, [change]);

  let [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setShowBtn(window.scrollY > 140);
    };
  }, []);

  return (
    <div className="bg-[#252222] text-[#fff]">
      {showBtn ? (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className="fixed shadow-[0_0_10px_#000] bottom-[30px] p-3 bg-black w-[40px] z-10 flex items-center justify-center h-[40px] rounded-[20px] right-[30px]"
        >
          <i className="bx bx-up-arrow-alt text-[#fff] text-[20px] "></i>
        </button>
      ) : null}

      <div className="grow-[1] min-h-screen flex flex-col pb-2">
        <div className="header bg-[#00000098] backdrop-blur-[5px] fixed z-40 w-full top-0 left-0 border-b">
          <div className="section flex items-center justify-between py-5 px-3">
            <a href="/" className="logo">
              <img className="w-[150px] " src={logo} alt="" />
            </a>

            <button
              ref={btnChange}
              onClick={() => {
                if (change) {
                  changeMod.current.classList.toggle("flow");

                  setTimeout(() => {
                    setChange(!change);
                  }, 200);
                } else {
                  setChange(!change);
                }
              }}
              className="hidden max-md:flex gap-[7px] flex-col"
            >
              <div className="bar1 duration-[0.3s] w-[25px] h-[2px] bg-[#fff]"></div>
              <div className="bar2 duration-[0.3s] w-[25px] h-[2px] bg-[#fff]"></div>
              <div className="bar3 duration-[0.3s] w-[25px] h-[2px] bg-[#fff]"></div>
            </button>

            <div className="nav flex max-md:hidden justify-between gap-3">
              {links.map((e, i) => {
                return (
                  <a
                    key={i}
                    href={e.link}
                    className="underline text-[14px] font-[400]"
                  >
                    {e.name}
                  </a>
                );
              })}
            </div>
            <div className="contacts flex justify-between gap-[20px] items-center">
              <div className="numbers max-md:hidden max-w-[150px] font-medium text-[14px]">
                +41 79 896 96 96
              </div>
              <a href="#contact">
                <button className="p-[6px_16px] shadow-[0px_0px_5px_#fff] bg-[#fff] text-black rounded-md font-[400]">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
      {change ? (
        <div
          onClick={(e) => {
            if (e.target !== changeMod.current) {
              changeMod.current.classList.toggle("flow");

              setTimeout(() => {
                setChange(!change);
              }, 200);
            }
          }}
          className="w-full z-20 fixed top-[77px] left-0 min-h-full"
        >
          <div
            ref={changeMod}
            className="duration-[0.4s] backdrop-blur-[5px] bg-[#5a565651] flow flex flex-col border-b "
          >
            {links.map((e, i) => {
              return (
                <a
                  key={i}
                  href={e.link}
                  onClick={(e) => setChange(false)}
                  className="p-[10px_12px] active:bg-[#726d6d51] w-full text-center text-[#fff]"
                >
                  {e.name}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}

      <div className="footer mt-2 pt-3 relative bottom-0 text-black bg-[#fff]">
        <div className="max-w-[1200px] px-[25px] flex flex-col  gap-[20px] m-[0_auto]">
          <div className="sec1 gap-3 max-md:flex-wrap max-md:justify-center flex justify-between ">
            <div className="block1 flex  flex-col">
              <div className="font-bold max-md:text-[25px] text-[35px]">
                Subcribe our newsletters
              </div>
              <div className="text-[#6c6565] text-[15px] font-medium">
                Want to know about our offers first?
              </div>
            </div>
            <div className="block2 flex items-center">
              <img className="w-[180px] max-w-full" src={flogo} alt="" />
            </div>
          </div>
          <div className="sec2 max-md:flex-wrap flex max-md:justify-center gap-2 justify-between items-center">
            <div className="inpSub border relative w-[320px] max-md:w-full max-w-full bg-[#f5eeee] gap-[20px] flex justify-between rounded-[10px]">
              <input
                type="text"
                placeholder="example@gmail.com"
                className="p-[10px_12px] w-[calc(100%-100px)] outline-none bg-transparent  rounded-[10px] placeholder:text-start"
              />
              <button className="shadow-[2px_0_3px_black] bg-black absolute right-1 bottom-1 top-1 active:scale-110 duration-[0.3s] rounded-[10px] p-[5px_16px] text-[#fff]">
                Subscribe
              </button>
            </div>
            <div className="privT flex flex-col justify-between gap-1 max-md:flex-row">
              {tFoot.map((e, i) => {
                return (
                  <div key={i} className="font-[400]">
                    {e}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="detail  grid grid-cols-4 gap-[20px] max-md:grid-cols-2 justify-center items-center py-3">
            {detail_List.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col gap-2 max-w-full items-center"
                >
                  <img src={e.img} alt="" className="w-[25px]" />
                  <div className="red-hat-display-600  max-w-[190px] text-center">
                    {e.des}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="copyRight section border-t text-center  py-3 flex items-center justify-center">
          <div>Copyright © 2022 The Limousine. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
