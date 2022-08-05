import React from "react";
import Item from "./Item";
import List from "./List";

export default function Section2() {
  return (
    <div className="flex flex-col  mx-36 items-start border-b ">
      <h2 className=" my-14 text-3xl font-semibold  mr-12  ">سرویس‌های تپسی</h2>
        <div className="flex flex-row-reverse justify-center mx-10 items-center mb-10 w-full  text-center">
          <List />
        </div>
        <div className="flex flex-row-reverse w-full">
          <Item />
      </div>
    </div>
  );
}
