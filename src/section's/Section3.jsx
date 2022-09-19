import picture from "../Assetes/picture/i-mac.webp";
import { IoIosArrowBack } from "react-icons/io";

export default function Section3() {
  return (
    <div className="flex flex-col-reverse  lg:flex-row md:p-28 justify-around w-full items-center mt-10   lg:items-start">
      <div className=" w-full  flex flex-col text-right items-center lg:items-start justify-start m-5 px-20 md:p-0">
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
          href="##"
        >
          <span> اطلاعات بیشتر سرویس سازمانی</span>
          <IoIosArrowBack size={17} />
        </a>
        <button className=" bg-primary rounded-lg w-56 text-white h-14 ">
          ورود و ثبت نام پنل سازمانی
        </button>
      </div>
      <img className=" max-w-xs  xl:p-0 md:p-20 pb-10 xl:max-w-2xl 2xl:max-w-3xl  lg:max-w-lg md:max-w-md " src={picture} alt="mac" />
    </div>
  );
}
