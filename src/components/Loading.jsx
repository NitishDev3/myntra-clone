import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-[85vh]">
      <div className="w-32 h-32 border-t-4 border-[#ff3f6c] rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
