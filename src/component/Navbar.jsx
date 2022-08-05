export default function Navbar() {
  return (
    <div className=" bg-white w-full sticky top-0 z-10   text-sm ">
      <ul className=" flex flex-row h-16  justify-end items-center mx-56 ">
        <li className="mx-4 ml-auto font-semibold text-2xl ">تپســی</li>
        <li className="mx-4">پشتیبانی</li>
        <li className="mx-4">معرفی راننده</li>
        <li className="mx-4">خدمات کسب و کارها</li>
        <li className="mx-4">فرصت های شغلی</li>
        <li className="mx-4">وبلاگ</li>
        <li className="mx-4">
          <button className=" font-normal text-white h-11 rounded-lg w-40 bg-primary">
            دانلود تپسی
          </button>
        </li>
      </ul>
    </div>
  );
}
