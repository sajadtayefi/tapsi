import classic from "../Assetes/picture/illus-classic.webp"

export default function Item() {
  return (
    <div className="flex flex-row justify-around w-full   pb-20  ">
      <div className="flex flex-col text-right min-w-max  ">
        <h2 className=" text-2xl mb-5">تپسی کلاسیک</h2>
        <p className="text-base my-1 ">
        با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک،
        </p>
        <p className="text-base my-1">
        راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان
        </p>
        <p className="text-base my-1">
        تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.
        </p>
      </div>
      <img className=" max-w-3xl mr- " src={classic} alt="" />
    </div>
  );
}
