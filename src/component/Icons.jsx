import React from "react";

export default function Icons({
  title,
  click,
  logo,
  ActiveClass,
}) {
  return (
    <div className="flex flex-col justify-between items-center md:w-full xl:px-5 w-20 h-4    ">
      <button
        className={ActiveClass ? " h-10 w-20 opacity-100  md:m-2 " : " h-10 w-20 opacity-50 md:m-2 hover:opacity-100 "}
        onClick={click}
      >
        {logo}
      </button>
      
      <h2 className="text-xs">{title}</h2>
    </div>
  );
}
