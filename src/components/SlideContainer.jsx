import React from "react";

const SlideContainer = ({ slideImgList }) => {
  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      {slideImgList.map((slideImg, index) => (
        <img 
        src={slideImg} 
        alt="" key={index} 
        className="mx-2" />
      ))}
    </div>
  );
};

export default SlideContainer;
