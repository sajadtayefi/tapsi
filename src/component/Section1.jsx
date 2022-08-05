import { IoLogoPwa } from "react-icons/io5";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import phone from "../Assetes/picture/mockup-phone.webp";

export default function Section1() {
  return (
    <div className="  bg-banner bg-no-repeat bg-center bg-cover flex flex-col justify-end mb-64 w-full items-start h-2/3 text-white">
      <div className=" bg-gradient-to-t from-liner1 to-liner2 flex flex-col mr-56 my-10  rounded-2xl justify-center items-start p-5  ">
        <h2 className=" m-2 text-5xl font-semibold">تپسی</h2>
        <h3 className=" my-6 mx-2 text-2xl"> اپلیکیشن درخواست خودرو و پیک</h3>
        <div className="flex flex-row-reverse">
          <button className="flex flex-row-reverse space-x-4 h-14 justify-center items-center m-2  w-56 border-2 bg-white rounded-lg">
            <span className=" text-base text-liner1">وب اپلیکیشن مسافران</span>
            <IoLogoPwa className=" text-liner1" size={26} />
          </button>
          <button className="flex flex-row-reverse space-x-1 h-14 justify-center items-center m-2  w-56 border-2 bg-white rounded-lg">
            <span className="text-base text-liner1">
              دانلود اپلیکیشن مسافران
            </span>
            <AiOutlineArrowDown className=" text-liner1" size={26} />
          </button>
        </div>
        <div className="flex flex-row-reverse">
          <button className="flex flex-row-reverse  h-14 justify-center  items-center m-2  w-56 border-2 border-white rounded-lg">
            <span className="   mx-10"> ثبت‌نام راننده</span>
            <AiOutlineCar className="   text-white" size={26} />
          </button>
          <button className="flex flex-row-reverse space-x-1 h-14 justify-center items-center m-2  w-56 border-2 border-white  rounded-lg ">
            <span className=" text-base ">دانلود اپلیکیشن رانندگان</span>
            <AiOutlineArrowDown className="mr-auto text-white" size={26} />
          </button>
        </div>
      </div>
      <img
        className=" absolute max-w-xl left-48 top-40"
        src={phone}
        alt="phone"
      />
    </div>
  );
}
