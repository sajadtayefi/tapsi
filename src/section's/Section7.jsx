import blog1 from "../Assetes/picture/blog2-scaled.jpg";
import blog2 from "../Assetes/picture/A68CB9F1-AA36-4B75-99B7-DE475A5FFBDF.jpg";
import blog3 from "../Assetes/picture/etehadie-no-logo-scaled.jpg";
import Card from "../component/Card";

export default function Section7() {
  return (
    <div className=" flex flex-col  justify-center items-star  m-2   xl:mb-20 mb-24 ">
      <h1 className=" px-20 2xl:px-40 text-3xl font-semibold">  </h1>
      <div className=" flex flex-col lg:flex-row-reverse justify-center items-center w-full p-10">
        <Card
          img={blog1}
          h2={"برای دریافت دز سوم واکسن، با تخفیف به مراکز واکسیناسیون بروید!"}
          p={`تپسی با همراهی شرکت سیناژن (تولیدکننده واکسن اسپایکوژن)\n
         برای رفتن به مراکز واکسیناسیون و تزریق دز سوم، تخفیف ویژه
          برایتان درنظر گرفته است. دیگر چیزی به نوروز باقی نمانده و... `}
        />
        <Card
          img={blog2}
          h2={"تخفیف ویژه دیجی‌کالا جت برای کاربران تپسی"}
          p={`(منقضی شده) سوپرمارکت آنلاین «دیجی‌کالا جت» با ارسال سریع
          محصولات سوپرمارکتی شروع به کار کرده است و سفارش‌های 
          آنلاین سوپرمارکتی را از فروشگاه‌های زنجیره‌ای معتبر و...
          `}
        />
        <Card
          img={blog3}
          h2={"دومین دوره انتخابات اتحادیه کسب و کارهای مجازی"}
          p={`دیدگاه و اهداف میلاد منشی‌پور، کاندیدای دومین دوره انتخابات 
          اتحادیه کسب و کارهای مجازی درباره‌ من من میلاد منشی پور، 
          مدیرعامل و هم بنیان‌گذار تپسی هستم؛ سال 1394 پس از یک...`}
        />
      </div>
    </div>
  );
}
