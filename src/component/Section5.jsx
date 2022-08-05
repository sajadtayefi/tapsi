import { useState } from "react";

export default function Section5() {
  const [showpra1, setShowPra1] = useState(false);
  const [showpra2, setShowPra2] = useState(false);
  const [showpra3, setShowPra3] = useState(false);
  const [showpra4, setShowPra4] = useState(false);

  const showhandler1 = () => {
    setShowPra1(true);
  };
  const showhandler2 = () => {
    setShowPra2(true);
  };
  const showhandler3 = () => {
    setShowPra3(true);
  };
  const showhandler4 = () => {
    setShowPra4(true);
  };
  const hidehandler1 = () => {
    setShowPra1(false);
  };
  const hidehandler2 = () => {
    setShowPra2(false);
  };
  const hidehandler3 = () => {
    setShowPra3(false);
  };
  const hidehandler4 = () => {
    setShowPra4(false);
  };

  return (
    <div className=" bg-parallax bg-fixed h-44 text-lg font-semibold  bg-cover p-10 flex flex-row-reverse text-white justify-center items-center ">
      <div className=" flex flex-row-reverse justify-center items-center w-10/12">
        <div
          onMouseOver={showhandler1}
          onMouseOut={hidehandler1}
          className=" flex flex-col p-3 w-1/4  h-12 justify-center text-center items-center  border-r-2"
        >
          <span> امکانات هوشمند</span>
          {showpra1 ? (
            <p className=" font-normal mt-4 text-sm">
              سهولت استفاده از اپلیکیشن با پیشنهاد مبدا و مقصد سفر، مقاصد منتخب
              و پیشنهادهای ویژه شما
            </p>
          ) : null}
        </div>

        <div
          onMouseOver={showhandler2}
          onMouseOut={hidehandler2}
          className=" flex flex-col p-3 w-1/4  h-12 justify-center text-center items-center  border-r-2"
        >
          <span> دسترس‌پذیری برای توان‌یابان</span>
          {showpra2 ? (
            <p className=" font-normal mt-4 text-sm">
              امکان استفاده کاربران نابینا و ناشنوا از اپلیکیشن تپسی و عدم کسر
              کمیسیون از سفر مسافران ویلچردار
            </p>
          ) : null}
        </div>
        <div
          onMouseOver={showhandler3}
          onMouseOut={hidehandler3}
          className=" flex flex-col p-3 w-1/4  h-12 justify-center text-center items-center  border-r-2"
        >
          <span> درخواست تلفنی</span>
          {showpra3 ? (
            <p className=" font-normal mt-4 text-sm">
              امکان درخواست خودرو بدون نیاز به اینترنت و <br />
              اپلیکیشن، از طریق تماس با شماره ۱۶۳۰
            </p>
          ) : null}
        </div>
        <div
          onMouseOver={showhandler4}
          onMouseOut={hidehandler4}
          className=" flex flex-col p-3 w-1/4  h-12 justify-center text-center items-center  "
        >
          <span> بسته امنیت سفر</span>
          {showpra4 ? (
            <p className=" font-normal mt-4 text-sm">
              امکانات ویژه امنیت سفر، شامل اشتراک سفر و پشتیبانی <br />
               ۲۴ ساعته تیم متخصصین امنیت تپسی
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
