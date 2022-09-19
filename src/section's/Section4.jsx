import macbook from "../Assetes/picture/macbook.webp";
export default function Section4() {
  return (
    <div className="flex flex-col-reverse items-center lg:flex-row-reverse px-28 pb-36 justify-around w-full   lg:items-start">
      <div className=" flex flex-col  justify-start items-start   ">
        <h2 className=" mb-10 text-3xl font-semibold">خرید کد اعتبار تپسی</h2>
        <p className="text-lg  ">
          کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد نظرشان،
          کد اعتبار یا کد تخفیف
        </p>
        <p className="text-lg ">
          تپسی تهیه کرده، برای خود، پرسنل و یا مشتریانشان استفاده کنند و از
          تخفیف‌های ویژه تپسی نیز
        </p>
        <p className="text-lg ">بهره‌مند شوند.</p>
        <p className="text-lg ">
          این کدها امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را
          دارند.
        </p>
        <button className=" my-5 bg-primary rounded-lg w-56 text-white h-14">
          خرید کد اعتبار و تخفیف
        </button>
      </div>
      <img className="max-w-xs  xl:p-0 md:p-20 pb-10 xl:max-w-2xl 2xl:max-w-3xl  lg:max-w-lg md:max-w-md " src={macbook} alt="" />
    </div>
  );
}
