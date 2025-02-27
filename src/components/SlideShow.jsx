import React, { useEffect, useState } from "react";

const SlideShow = ({ slideImg }) => {
  const [activeImg, setActiveImg] = useState(0);
  const [stop, setStop] = useState(false);

  useEffect(() => {
    const changeSlide = setInterval(() => {
      if (stop) {
        return;
      }
      setActiveImg((prev) => {
        if (prev === slideImg.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2500);

    return () => {
      clearInterval(changeSlide);
    };
  }, [activeImg, stop, slideImg.length]);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${activeImg * 100}%)` }}
      >
        {slideImg.map((img, index) => (
          <div key={index} className="min-w-full">
            <img
              src={img}
              alt=""
              className="w-full cursor-pointer"
              onMouseEnter={() => setStop(true)}
              onMouseLeave={() => setStop(false)}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center my-2">
        {slideImg.map((img, index) => (
          <input
            className="mx-1 cursor-pointer"
            type="radio"
            key={index}
            checked={index === activeImg}
            onChange={() => setActiveImg(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideShow;