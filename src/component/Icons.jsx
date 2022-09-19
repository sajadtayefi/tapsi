import React from "react";

export default function Icons({ title, click, logo, ActiveClass }) {
  return (
    <div className="flex flex-col justify-between items-center xl:px-5  h-0 w-10/12     ">
      <button
        className={
          ActiveClass
            ? " h-20 w-20 opacity-100  md:m-2 "
            : " h-20 w-20 opacity-50 md:m-2 hover:opacity-100 "
        }
        onClick={click}
      >
        {logo}
      </button>

      <h2 className="text-xs">{title}</h2>
    </div>
  );
}
