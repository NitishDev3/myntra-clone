import React from "react";

const CardContainer = ({ cardList, widthRatio }) => {

  return (
    <div className={`flex justify-evenly flex-wrap`}>
      {cardList.map((card, index) => (
        <img key={index} src={card} alt="" className={`w-${widthRatio} cursor-pointer m-1`} />
      ))}
    </div>
  );
};

export default CardContainer;
