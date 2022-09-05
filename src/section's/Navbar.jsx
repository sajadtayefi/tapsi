import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import NavbarItem from "../constant/NavbarItem";
export default function Navbar() {
  const [show, setShow] = useState(false);
  const showhandler = () => {
    setShow(!show);
  };

  return (
    <div >
      <div className=" bg-white w-full fixed top-0 z-10 shadow-md  text-sm hidden md:inline-block ">
        <ul className=" flex flex-row h-16  justify-end items-center px-4 xl:px-36 ">
          <li className="px-4  w-40 ml-auto font-semibold text-2xl   ">
            تپســی
          </li>
          {NavbarItem.map((nav, index) => {
            return (
              <>
                <li className="px-4" key={index}>
                  {nav.item}
                </li>
              </>
            );
          })}
          <button className="hidden lg:flex justify-center items-center font-normal text-white h-11 rounded-lg w-40 bg-primary">
            <span>دانلود تپسی</span>
          </button>
        </ul>
      </div>

      <div className="  bg-white w-full fixed top-0 z-20  text-sm inline-block  md:hidden">
        <ul
          className={` ${
            show ? "h-screen" : "h-0"
          } flex flex-col duration-100  transition-all
           ease-in origin-top justify-start items-start `}
        >
          <div className="flex flex-row justify-between w-full   bg-white shadow-md ">
            <li className="p-2 mx-10   w-full ml-auto font-semibold text-xl  ">
              تپســی
            </li>
            <button className={`${!show && "rotate-180"} duration-500  px-14`}>
              {show ? (
                <AiOutlineClose size={26} onClick={showhandler} />
              ) : (
                <AiOutlineMenu size={26} onClick={showhandler} />
              )}
            </button>
          </div>
          <div className="flex flex-col-reverse origin-top">
            {NavbarItem.map((nav, index) => {
              return (
                <>
                  <li className="p-4 " key={index}>
                    <h2
                      className={`${
                        !show && "hidden"
                      }  duration-1000 origin-top `}
                    >
                      {nav.item}
                    </h2>
                  </li>
                </>
              );
            })}
          </div>
          <button className="hidden lg:flex justify-center items-center font-normal text-white h-11 rounded-lg w-40 bg-primary">
            <span>دانلود تپسی</span>
          </button>
        </ul>
      </div>
    </div>
  );
}

{
  /* <li className="px-4  w-40 ml-auto font-semibold text-2xl   ">تپســی</li>
<li className="px-4 ">پشتیبانی</li>
<li className="px-4 ">معرفی راننده</li>
<li className="px-4 ">خدمات کسب و کارها</li>
<li className="px-4 ">فرصت های شغلی</li>
<li className="px-4 ">وبلاگ</li>
<li className="mx-4">
  <button className="hidden lg:flex justify-center items-center font-normal text-white h-11 rounded-lg w-40 bg-primary">
    دانلود تپسی
  </button>
</li> */
}
