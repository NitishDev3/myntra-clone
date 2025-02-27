import React, { useEffect, useState } from "react";
import SlideShow from "./SlideShow";
import {
  CATEGORIES,
  MAIN_SLIDE_SHOW,
  SECOND_SLIDE_SHOW,
  THIRD_SLIDE_SHOW,
} from "../assets/constants";
import SlideContainer from "./SlideContainer";
import Categories from "./Categories";
import { useSelector } from "react-redux";

const Home = () => {
  const showUnderSectionComp = useSelector(
    (store) => store.config.showUnderSectionComp
  );

  return (
    <div className="">
      {showUnderSectionComp && (
        <div className="absolute w-full h-[100vh] bg-gray-300 opacity-40"></div>
      )}
      <div className="">
        <img
          src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/FEBRUARY/17/edExpVDy_99a956e1c11f4be882429c2b2621df37.jpg"
          alt="new-user-offer-banner"
          className="w-full cursor-pointer"
        />
        <div className="my-4">
          <SlideShow slideImg={MAIN_SLIDE_SHOW} />
        </div>
        <h3 className="font-semibold text-3xl text-gray-600 ml-6">
          MEDAL WORTHY BRANDS TO BAG
        </h3>
        <div className="my-6">
          <SlideContainer slideImgList={SECOND_SLIDE_SHOW} />
        </div>
        <h3 className="font-semibold text-3xl text-gray-600 ml-6">
          GRAND GLOBAL BRANDS
        </h3>
        <div className="my-6">
          <SlideContainer slideImgList={THIRD_SLIDE_SHOW} />
        </div>
        <h3 className="font-semibold text-3xl text-gray-600 ml-6">
          SHOP BY CATEGORY
        </h3>
        <div>
          <Categories categories={CATEGORIES} />
        </div>
      </div>
    </div>
  );
};

export default Home;
