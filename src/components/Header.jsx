import React, { useState } from "react";
import sectionData from "../assets/sectionWiseItems.json";
import SectionContainer from "./SectionContainer";
import { useDispatch, useSelector } from "react-redux";
import { changeShowUnderSectionComp } from "../store/configSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const showUnderSectionComp = useSelector(
    (store) => store.config.showUnderSectionComp
  );

  const [hoveredSection, setHoveredSection] = useState(null);
  const [textColor, setTextColor] = useState("bg-pink-500");

  const dispatch = useDispatch();

  return (
    <div className="sticky top-0 z-30">
      <div className="flex justify-between h-[85px] shadow-md shadow-gray-200 items-center bg-white z-50">
        <div>
          <Link to={"/"}>
            <img
              src="data:image/png;base64,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"
              alt="myntra-logo"
              className="w-[110px] my-3 mx-6 ml-12 cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex font-semibold text-xs">
          <Link to={"/men"}>
            <div
              className="flex items-center mx-2 h-[85px] cursor-pointer border-b-[4px] border-white hover:border-pink-400"
              onMouseEnter={() => {
                dispatch(changeShowUnderSectionComp(true));
                setTextColor("text-pink-500");
                setHoveredSection("Men");
              }}
              onMouseLeave={() => {
                dispatch(changeShowUnderSectionComp(false));
                if (!showUnderSectionComp) {
                  setHoveredSection(null);
                }
              }}
            >
              MEN
            </div>
          </Link>
          <Link to={"/women"}>
            <div
              className="flex items-center mx-3 h-[85px] cursor-pointer border-b-[4px] border-white hover:border-pink-400"
              onMouseEnter={() => {
                dispatch(changeShowUnderSectionComp(true));
                setTextColor("text-pink-500");
                setHoveredSection("Women");
              }}
              onMouseLeave={() => {
                dispatch(changeShowUnderSectionComp(false));
                if (!showUnderSectionComp) {
                  setHoveredSection(null);
                }
              }}
            >
              WOMEN
            </div>
          </Link>
          <Link to={"/kids"}>
            <div
              className="flex items-center mx-3 h-[85px] cursor-pointer border-b-[4px] border-white hover:border-orange-500"
              onMouseEnter={() => {
                dispatch(changeShowUnderSectionComp(true));
                setTextColor("text-orange-500");
                setHoveredSection("Kids");
              }}
              onMouseLeave={() => {
                dispatch(changeShowUnderSectionComp(false));
                if (!showUnderSectionComp) {
                  setHoveredSection(null);
                }
              }}
            >
              KIDS
            </div>
          </Link>
          <Link to={"/homeliving"}>
            <div
              className="flex items-center mx-3 h-[85px] cursor-pointer border-b-[4px] border-white hover:border-yellow-500"
              onMouseEnter={() => {
                dispatch(changeShowUnderSectionComp(true));
                setTextColor("text-yellow-500");
                setHoveredSection("HomeLiving");
              }}
              onMouseLeave={() => {
                dispatch(changeShowUnderSectionComp(false));
                if (!showUnderSectionComp) {
                  setHoveredSection(null);
                }
              }}
            >
              HOME & LIVING
            </div>
          </Link>
          <Link to={"/beauty"}>
            <div
              className="flex items-center mx-3 h-[85px] cursor-pointer border-b-[4px] border-white hover:border-green-500"
              onMouseEnter={() => {
                dispatch(changeShowUnderSectionComp(true));
                setTextColor("text-green-500");
                setHoveredSection("Beauty");
              }}
              onMouseLeave={() => {
                dispatch(changeShowUnderSectionComp(false));
                if (!showUnderSectionComp) {
                  setHoveredSection(null);
                }
              }}
            >
              BEAUTY
            </div>
          </Link>
          <div
            className="flex items-center mx-3 h-[85px] cursor-pointer border-b-[4px] border-white hover:border-pink-400"
            onMouseEnter={() => {
              dispatch(changeShowUnderSectionComp(true));
              setTextColor("text-pink-500");
              setHoveredSection("Studio");
            }}
            onMouseLeave={() => {
              dispatch(changeShowUnderSectionComp(false));
              if (!showUnderSectionComp) {
                setHoveredSection(null);
              }
            }}
          >
            STUDIO
          </div>
        </div>
        <div className="flex h-[35px] items-center border border-gray-300">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&s"
            alt="search-icon"
            className="h-[17px] mx-4"
          />
          <input
            className="p-[1.5px] w-[500px] focus:outline-none"
            type="text"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="flex mr-10">
          <ul className="flex font-bold text-xs">
            <li className="mx-3 cursor-pointer">
              <Link to={"/login"}>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/006/017/592/small/ui-profile-icon-vector.jpg"
                  alt="profile-logo"
                  className="w-5 mx-auto"
                />
                Profile
              </Link>
            </li>
            <li className="mx-3 cursor-pointer">
              <img
                src="https://icons.veryicon.com/png/o/commerce-shopping/fine-edition-mall-icon/wishlist-1.png"
                alt="wishlist-logo"
                className="w-5 mx-auto"
              />
              WISHLIST
            </li>
            <li className="mx-3 cursor-pointer">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQIcKeAw6-qVKNWBMyUV6mmbQjOvCv9L22aTFzQ7yTiPCn5EEIVz_hxJegDboHLtbQF2s&usqp=CAU"
                alt="bag-logo"
                className="w-5 mx-auto"
              />
              BAG
            </li>
          </ul>
        </div>
      </div>

      {showUnderSectionComp && (
        <div
          className="flex justify-center w-full relative -z-10"
          onMouseEnter={() => dispatch(changeShowUnderSectionComp(true))}
          onMouseLeave={() => dispatch(changeShowUnderSectionComp(false))}
        >
          {hoveredSection !== "Studio" ? (
            <div className="bg-white w-[75%] absolute">
              <SectionContainer
                sectionData={sectionData}
                hoveredSection={hoveredSection}
                textColor={textColor}
              />
            </div>
          ) : (
            <div className="bg-white w-[40%] absolute text-center">
              <img
                src="https://constant.myntassets.com/web/assets/img/studio-logo-new.svg"
                alt=""
                className="mt-4 mb-2 mx-auto"
              />
              <p>Your daily inspiration for everything fashion</p>
              <img
                src="https://constant.myntassets.com/web/assets/img/sudio-nav-banner.png"
                alt=""
                className="my-2 mx-auto p-4"
              />
              <button className="border border-gray-400 p-2 mt-2 mb-6">
                EXPLORE STUDIO &gt;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
