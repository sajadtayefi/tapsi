import driver from "../Assetes/picture/driver.webp";

export default function Section6() {
  return (
    <div className="flex flex-row-reverse justify-around mx-auto items-start text-right  px-36 py-20 ">
      <img className="rounded-xl w-5/12" src={driver} alt="driver" />

      <div className="">
        <h2 className="text-3xl font-semibold mb-10 ">
          مزایای تپسی برای رانندگان تاکسی اینترنتی
        </h2>
        <p className=" mb-11 text-lg">
          رانندگان (سفیران) به‌عنوان همکاران تپسی، جایگاه ویژه‌ای برای شرکت
          دارند. به همین‌دلیل مزایای مختلفی <br />
          برای آنها در نظر گرفته شده است.
        </p>
        <h3 className="text-2xl mb-8">
          کسب درآمد روزانه، پایدار و بدون محدودیت
        </h3>
        <ul className="my-1 text-lg mb-11">
          <li>۱. امکان تسویه‌ی اعتبار در هر ساعت از شبانه‌روز</li>
          <li>
            ۲. طرح‌های تشویقی، ماموریت‌ها‌، پاداش و اعطای وام‌های قرض‌الحسنه
            به‌طور دوره‌ای
          </li>
          <li>۳. نمایش مکان‌های پردرخواست در اپلیکیشن و دریافت سفرهای طلایی</li>
        </ul>
        <h3 className="text-2xl mb-8">تضمین امنیت و پشتیبانی رانندگان</h3>
        <ul className="my-1 text-lg mb-11">
          <li>۱. پشتیبانی ۲۴ ساعته</li>
          <li>
            ۲. امکانات امنیت سفر شامل تماس اضطراری با واحد امنیت و پشتیبانی ۲۴
            ساعته تیم امنیت
          </li>
        </ul>
        <h3 className="text-2xl mb-8">واریز سهمیه بنزین ویژه رانندگان تپسی</h3>
        <ul className="my-1 text-lg mb-11">
          <li>۱. نمایش میزان پیمایش ماهانه درون اپلیکیشن</li>
          <li>۲. محاسبه‌ی مسافت طی شده تا مسافر در پیمایش</li>
        </ul>
        <h3 className="text-2xl mb-7">استفاده از مزایای باشگاه رانندگان تپسی</h3>
        <ul className="my-1 text-lg mb-11">
          <li>
            ۱. تخفیف روی خدمات خودرو مانند بیمه، سرویس‌های دوره‌ای، خرید لاستیک
            و ...
          </li>
          <li>
            ۲. تخفیف روی خدمات رفاهی مانند وام قرض‌الحسنه، خدمات درمانی، خرید
            اقساطی و ...
          </li>
        </ul>
        <button className=" w-48 h-14 rounded-xl ml-5 text-white text-sm  bg-blue">ثبت نام راننده تاکسی آنلاین</button>
        <button className=" w-48 h-14 rounded-xl ml-5 text-white text-sm  bg-blue">دانلود برنامه تپسی راننده</button>
      </div>
    </div>
  );
}
