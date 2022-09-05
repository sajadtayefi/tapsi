import { IoLogoPwa } from "react-icons/io5";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import phone from "../Assetes/picture/mockup-phone.webp";
import Button from "../component/Button";

export default function Section1() {
  return (
    <div className=" relative  bg-banner bg-no-repeat bg-center bg-cover  flex flex-col justify-end  items-center md:h-4/5 md:items-start mb-16 md:mb-40 text-white">
      <div className=" bg-gradient-to-t from-liner1 to-liner2 m-20    flex flex-col  mb-20  rounded-2xl justify-center  items-start md:mr-40 p-5  ">
        <h2 className=" m-2 md:text-4xl text-2xl font-semibold">تپسی</h2>
        <h3 className=" md:my-6 md:mx-2 mb-5  md:text-2xl text-base"> اپلیکیشن درخواست خودرو و پیک</h3>
        <div className="flex  md:flex-row-reverse  flex-col">
         <Button
         classbtn={"flex flex-row-reverse space-x-2 h-14 justify-center items-center m-2  w-56 border-2 bg-white rounded-xl"}
         classSpn="text-sm text-black"
         span="وب اپلیکیشن مسافران"
         icon={<IoLogoPwa color="black" size={26} />}
         /> 
        <Button
        classbtn={"flex flex-row-reverse space-x-2 h-14 justify-center items-center m-2  w-56 border-2 bg-white rounded-xl"}
        classSpn={"text-sm text-black"}
        span={"دانلود اپلیکیشن مسافران"}
        icon={<AiOutlineArrowDown color="black" size={26}/>}
        />
        </div>
        <div className="flex md:flex-row-reverse flex-col">
         <Button 
         classbtn={"flex flex-row-reverse space-x-2 h-14 justify-end items-center m-2  w-56 border-2 rounded-xl"}
         classSpn={"text-sm  "}
         span={"ثبت نام راننده"}
         icon={<AiOutlineCar className=" w-16"  size={26} />}
         />
         <Button
          classbtn={"flex flex-row-reverse space-x-2 h-14 justify-center items-center m-2  w-56 border-2  rounded-xl"}
          classSpn="text-sm  "
          span={"دانلود اپلیکیشن رانندگان"}
          icon={<AiOutlineArrowDown size={26} />}
         />
        </div>
      </div>
      <img
        className=" hidden lg:flex  absolute w-3/12 left-44 top-60"
        src={phone}
        alt="phone"
      />
    </div>
  );
}
