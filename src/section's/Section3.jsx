import picture from "../Assetes/picture/i-mac.webp";
import { IoIosArrowBack } from "react-icons/io";

export default function Section3() {
  return (
    <div className="flex flex-col-reverse md:flex-row md:p-28 justify-around w-full   items-start">
      <div className=" w-full  flex flex-col text-right items-start justify-start m-5">
        <h3 className=" text-xl md:text-4xl mb-5 font-semibold">
          خدمات تپسی ویژه کسب‌وکارها
        </h3>
        <p className="  text-xs block  md:text-lg">
          پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست
          هم‌زمان تعداد <br />
          نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها فراهم می‌کند. و با
          استفاده از آن<br />
          می‌توانید ماموریت های درون‌شهری و ارسال کالاهای خود را به سادگی مدیریت
          کنید.
          </p>
        <a
          className=" my-5 text-primary font-medium flex flex-row-reverse justify-center items-center"
          href="#"
        >
          <span> اطلاعات بیشتر سرویس سازمانی</span>
          <IoIosArrowBack size={17} />
        </a>
        <button className=" bg-primary rounded-lg w-56 text-white h-14 ">
          ورود و ثبت نام پنل سازمانی
        </button>
      </div>
      <img className=" p-20 pb-10 md:max-w-2xl " src={picture} alt="mac" />
    </div>
  );
}
