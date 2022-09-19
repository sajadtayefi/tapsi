import React, { useEffect, useState } from "react";
import Items from "../constant/Items";
import Icons from "../component/Icons";
import Slider from "../component/Slider";

export default function Section2() {
  const [state, setState] = useState([]);
  useEffect(() => {
    setState(Items);
  }, []);

  //select item
  const showhandler = (id) => {
    const newItem = state?.map((item, index) =>
      item.id === id ? { ...item, isshow: true } : { ...item, isshow: false }
    );
    setState(newItem);
  };

  return (
    <div className="flex flex-col lg:px-24 md:items-center  ">
      <h2 className=" lg:my-14 text-xl m-5 md:text-3xl font-semibold  md:ml-auto   ">
        سرویس‌های تپسی
      </h2>
      <div className="flex flex-row md:overflow-hidden overflow-x-scroll justify-center items-center mx-10  text-center ">
        {state.map((data, index) => {
          return (
            <div className="flex flex-row  md:m-0  2xl:mx-4 mx-2 h-32   justify-center items-center pb-5 md:pb-20 ">
              <Icons
                ActiveClass={data.isshow}
                title={data.title}
                key={index}
                logo={data.logo}
                click={() => showhandler(data.id, index)}
              />
            </div>
          );
        })}
      </div>
      <div className=" m-1 py-10 w-full  border-b">
        {state.map((data, index) => {
          return (
            <div className="  w-full h-5/6 mx-1   ">
              <Slider
                title={data.title}
                key={index}
                picture={data.picture}
                paragraph={data.tagP}
                ActiveClass={data.isshow}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
