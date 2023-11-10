import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <section className=" min-h-screen bg-gradient-to-b from-herobgA  to-herobgB flex items-center flex-col md:flex-row w-full md:justify-between font-poppins ">
      <div className="md:w-8/12 md:max-w-md md:mx-auto md:pl-11 md:gap-1.5 md:block hidden">
        <h1 className="text-4xl font-light">NEW ARRIVALS ONLY</h1>
        <div className="flex items-center gap-2">
          <h2 className=" text-7xl font-bold">NEW</h2>
          <img className="max-h-14" src={hand_icon} alt="hand-icon" />
        </div>
        <div className=" max-w-md flex flex-col gap-5">
          <div className="text-6xl font-bold">
            <h2>Collection</h2>
            <h2>for everyone</h2>
          </div>
          <div className="flex w-52 rounded-3xl text-md h-9 gap-3.5 justify-center  items-center bg-red-500 text-white cursor-pointer ml-1 mt-2 hover:bg-red-500/80  active:shadow-xl relative select-none">
            <p>Latest Collectios</p>
            <img className="" src={arrow_icon} alt="arrow-icon" />
          </div>
        </div>
      </div>
      <div className="flex md:w-4/12 flex-col-reverse md:flex-col justify-center items-start w-9/12">
        <div className="text-center md:w-11/12 w-full md:mb-0 flex flex-col gap-3.5 md:hidden">
          <h2 className="text-6xl font-bold md:text-sm">NEW ARRIVALS ONLY</h2>
          <h3 className="text-2xl font-bold md:text-sm rounded-full bg-red-500 text-white cursor-pointer hover:bg-red-500/80  active:shadow-xl relative select-none">
            Click here for latest Collection
          </h3>
        </div>
        <div className="md:w-full w-5/6 mx-auto md:pb-24 md:min-h-screen flex justify-center items-center mb-0 pb-0">
          <img
            className=" w-full min-h-full md:mr-24"
            src={hero_img}
            alt="hero-img"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
