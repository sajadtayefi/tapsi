import { useState } from "react";
import MouseHover from "../component/MouseHover";

export default function Section5() {
  return (
    <div className=" bg-parallax bg-fixed text-lg font-semibold  lg:h-44    bg-cover p-10 flex flex-row-reverse text-white justify-center items-center ">
      <div className=" flex lg:flex-row-reverse flex-col-reverse  justify-center items-center w-10/12">
        <MouseHover
          span={" امکانات هوشمند"}
          ptag={`سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب
        و پیشنهادهای ویژه شما`}
          classN={
            "flex flex-col  w-full py-10 lg:p-3   lg:w-1/4  h-12 justify-center text-center items-center  lg:border-r-2"
          }
        />
        <MouseHover
          span={" دسترس‌پذیری برای توان‌یابان"}
          ptag={` امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر
     کمیسیون از سفر مسافران ویلچردار`}
          classN={
            " flex flex-col  w-full  py-10 lg:p-3   lg:w-1/4  h-12 justify-center text-center items-center  lg:border-r-2"
          }
        />
        <MouseHover
          span={"درخواست تلفنی"}
          ptag={` امکان درخواست خودرو بدون نیاز به اینترنت و اپلیکیشن، از طریق تماس با شماره ۱۶۳۰`}
          classN={
            " flex flex-col  w-full  py-10 lg:p-3  lg:w-1/4  h-12 justify-center text-center items-center  lg:border-r-2"
          }
        />
        <MouseHover
          span={"بسته امنیت سفر"}
          ptag={` امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی ۲۴ ساعته تیم متخصصین امنیت تپسی`}
          classN={
            " flex flex-col  w-full py-10 lg:p-3  lg:w-1/4  h-12 justify-center text-center items-center  "
          }
        />
      </div>
    </div>
  );
}
