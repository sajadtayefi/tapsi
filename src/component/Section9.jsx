import etehadiye from "../Assetes/picture/etehadiye.png";
import logo from "../Assetes/picture/logo.png";
import logo1 from "../Assetes/picture/logo1.png";
import { FaTelegramPlane } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";


export default function Section9() {
  return (
    <div className="bg-black text-white py-28 px-52 h-fit">
      <div className=" flex flex-row text-xs ">
        <ul className=" w-72 ml-10  ">
          <li className="text-4xl mb-10">تپسی</li>
          <li className="my-2">اپلیکیشن درخواست خودرو و پیک</li>
          <li className=" text-zinc-400 my-4">
            تمام حقوق مادی و معنوی این وبسایت متعلق به
            <br /> تپسی است.
          </li>
        </ul>
        <ul className=" w-60 ">
          <li className="text-xl mb-7 font-semibold ">تپسی</li>
          <li className=" cursor-pointer hover:text-primary my-4">وبلاگ تپسی</li>
          <li className=" cursor-pointer hover:text-primary my-4">فرصت شغلی</li>
          <li className=" cursor-pointer hover:text-primary my-4">تماس با ما</li>
          <li className=" cursor-pointer hover:text-primary my-4">لوگو و هویت سازمانی</li>
          <li className=" cursor-pointer hover:text-primary my-4">معرفی راننده به تپسی</li>
        </ul>
        <ul className=" w-60 ">
          <li className="text-xl mb-7 font-semibold">مسافران</li>
          <li className=" cursor-pointer hover:text-primary my-4">دانلود اپ مسافر</li>
          <li className=" cursor-pointer hover:text-primary my-4">نسخه وب تپسی</li>
          <li className=" cursor-pointer hover:text-primary my-4">پرسش‌های متداول مسافران</li>
          <li className=" cursor-pointer hover:text-primary my-4">شرایط و قوانین مسافران</li>
          <li className=" cursor-pointer hover:text-primary my-4">باشگاه مشتریان</li>
        </ul>
        <ul className=" w-60 ">
          <li className="text-xl mb-7 font-semibold">رانندگان</li>
          <li className=" cursor-pointer hover:text-primary my-4">دانلود اپ سفیر</li>
          <li className=" cursor-pointer hover:text-primary my-4">ثبت نام راننده تاکسی اینترنتی</li>
          <li className=" cursor-pointer hover:text-primary my-4">پرسش‌های متداول سفیران</li>
          <li className=" cursor-pointer hover:text-primary my-4">شرایط و قوانین سفیران</li>
          <li className=" cursor-pointer hover:text-primary my-4">باشگاه سفیران</li>
        </ul>
        <ul className=" w-60 ">
          <li className=" text-xl mb-7 font-semibold">کسب و کارها</li>
          <li className=" cursor-pointer hover:text-primary my-4">پنل سازمانی تپسی</li>
          <li className=" cursor-pointer hover:text-primary my-4">خرید کد اعتبار و تخفیف</li>
          <li className=" cursor-pointer hover:text-primary my-4">دریافت API</li>
        </ul>
        <ul className="  flex flex-row justify-end items-end h-full  ">
          <li>
            <img
              className=" w-28 h-48 mx-4 rounded-xl py-10 bg-white"
              src={etehadiye}
              alt="etehadiye"
            />
          </li>
          <li>
            <img
              className=" w-28 h-48 mx-4 rounded-xl py-10 bg-white"
              src={logo1}
              alt="logo1"
            />
          </li>
          <li>
            <img
              className=" w-28 h-48 mx-4 rounded-xl py-10 bg-white"
              src={logo}
              alt="logo"
            />
          </li>
        </ul>
      </div>
      <div>
        <h5 className=" text-xs mb-2">تپسی در شبکه‌های اجتماعی</h5>
        <div className=" flex flex-row-reverse justify-end items-center text-zinc-400 ">
          <FaTelegramPlane className=" mx-1 hover:text-primary cursor-pointer" size={26} />
          <RiLinkedinFill className=" mx-1 hover:text-primary cursor-pointer" size={26}/>
          <FaTwitter className=" mx-1 hover:text-primary cursor-pointer" size={23} />
          <FiInstagram className=" mx-1 hover:text-primary cursor-pointer" size={25} />
          <FaFacebookF className=" ml-1 hover:text-primary cursor-pointer" size={23}  />
        </div>
      </div>
    </div>
  );
}
