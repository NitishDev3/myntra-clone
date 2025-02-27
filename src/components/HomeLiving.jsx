import React from "react";
import CardContainer from "./CardContainer";
import {
  BRANDS,
  CONTENT_ONE,
  CONTENT_TWO,
  HEAD_CONTENT_TWO,
  TOP_IMG,
} from "../assets/homeLivingConstants";

const HomeLiving = () => {
  return (
    <div className="my-8">
      <div>
        <img src={TOP_IMG} alt="" className="" />
      </div>
      <div className="flex my-6">
        <div className="w-4/5">
          <h3 className="text-gray-600 font-semibold text-3xl">NICE TO SEE YOU, COME ON IN!</h3>
          <div className="my-3">
            <CardContainer cardList={CONTENT_ONE} widthRatio={"1/3 hover:scale-105"} />
          </div>
        </div>
        <div className="w-1/5">
          
        </div>
      </div>
      <div>
        <img src={HEAD_CONTENT_TWO} alt="" />
        <div>
          <CardContainer cardList={CONTENT_TWO} widthRatio={"1/3 m-0 hover:scale-105"} />
        </div>
      </div>
      <div className="my-6">
        <h3 className="text-gray-600 font-semibold text-3xl">FEATURED BRANDS</h3>
        <div>
          <CardContainer cardList={BRANDS} widthRatio={"1/6 hover:scale-105"} />
        </div>
      </div>
    </div>
  );
};

export default HomeLiving;
