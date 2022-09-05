import React from "react";

function Slider({ picture, paragraph, ActiveClass, title }) {
  return (
    <div className=" flex flex-col w-full  ">
      {ActiveClass ? (
        <div className="flex flex-row-reverse justify-around   items-start w-full">
          <div className=" hidden md:flex max-w-2xl">{picture}</div>
          <div className="flex flex-col ">
            <h2 className=" pb-6 text-2xl">{title}</h2>
            <p className=" max-w-2xl text-lg  ">{paragraph}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Slider;
