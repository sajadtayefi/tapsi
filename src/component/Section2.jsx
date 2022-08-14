import React, { useState } from "react";
import Items from "../constant/Items";
import Icons from "./event/Icons";
export default function Section2() {
  const [state, setState] = useState(Items);
  const showhandler = (newtitle) => {
    setState([...state ,{}])
  }

  return (
    <div className="flex flex-col  mx-36 items-start border-b ">
      <h2 className=" my-14 text-3xl font-semibold  mr-12  ">سرویس‌های تپسی</h2>
      <div className="flex flex-row justify-center mx-10 items-center mb-10 w-full  text-center">
        {state.map((data, index) => {
          return (
           <Icons class={data.title} title={data.title} key={index} logo={data.logo} click={()=>showhandler("newtitle")} />
          );
        })}
      </div>
    </div>
  );
}
