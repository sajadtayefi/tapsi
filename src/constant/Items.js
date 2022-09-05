import autopeyk from "../Assetes/icon/cc-autopeyk.png";
import classic from "../Assetes/icon/cc-classic.png";
import hamya from "../Assetes/icon/cc-hamyar.png";
import line from "../Assetes/icon/cc-line.png";
import motopeyk from "../Assetes/icon/cc-motopeyk.png";
import plus from "../Assetes/icon/cc-plus.png";
import taxi from "../Assetes/icon/cc-taxi.png";
import tell from "../Assetes/icon/cc-tel.png";
import Pautopeyk from "../Assetes/picture/illus-autopeyk.webp";
import Pclassic from "../Assetes/picture/illus-classic.webp";
import Phamya from "../Assetes/picture/illus-hamyar.webp";
import Pline from "../Assetes/picture/illus-line.webp";
import Pmotopeyk from "../Assetes/picture/illus-motopeyk.webp";
import Pplus from "../Assetes/picture/illus-plus.webp";
import Ptaxi from "../Assetes/picture/illus-taxi.webp";
import Ptell from "../Assetes/picture/illus-tel.webp";

 const Items = [
    {
        logo: <img src={classic} alt="classic" />,
        title: "تپسی کلاسیک",
        picture: <img className="" src={Pclassic} alt="hamya" />,
        tagP: `با سرویس کلاسیک تپسی، یک خودروی اختصاصی برای رسیدن به مقصدتان دارید. تپسی کلاسیک،
        راهی سریع و آسان برای سفرهای درون‌شهری در هر ساعتی از روز است. در این سرویس، شما امکان
        تعیین دو یا چند مقصد و همچنین توقف در مسیر را دارید.`,
        id:1,
        isshow:true
    },
    {
        logo: <img className="  " src={tell} alt="tell " />,
        title: "تپسی تلفنی",
        picture: <img className="" src={Ptell} alt="tell" />,
        tagP: `سرویس تپسی تلفنی یا ۱۶۳۰، این امکان را به شما می‌دهد که بدون نیاز به اینترنت و اپلیکیشن،
        درخواست خودرو بدهید. این سرویس تاکسی تلفنی مناسب زمانی است که به هر دلیلی دسترسی
        به اینترنت یا اپلیکیشن ندارید. همچنین سرویس تلفنی تپسی، راه حلی مناسب برای افرادی
        است که کار کردن با اپلیکیشن‌های موبایلی برایشان راحت نیست.`,
        id:2,
        isshow:false


    },
    {
        logo: <img src={line} alt="line" />,
        title: "تپسی لاین",
        picture: <img className="" src={Pline} alt="line" />,
        tagP: `تپسی لاین سرویسی است که امکان سفر اشتراکی را برایتان فراهم می‌کند. در این سرویس شما با
        مسافر دیگری که هم‌مسیرتان است، هم‌سفر خواهید بود و هزینه سفرتان تقسیم می‌شود. این
        سرویس در حال حاضر به دلیل شرایط همه‌گیری بیماری کرونا از دسترس خارج شده اما با بهبود
        شرایط می‌توانید از سرویس لاین استفاده کنید.`,
        id:3,
        isshow:false

    },
    {
        logo: <img src={motopeyk} alt="motopeyk" />,
        title: "موتوپیک ",
        picture: <img className="" src={Pmotopeyk} alt="motopeyk" />,
        tagP: `با استفاده از سرویس موتوپیک، بسته‌ها و مرسولاتتان با پیک موتور به مقصد ارسال می‌شوند. این
         سرویس مناسب زمانی است که می‌خواهید مرسوله سریع‌تر به مقصد برسد. در این سرویس، شما
          می‌توانید مسیر رسیدن مرسوله‌تان به مقصد را به صورت لحظه‌ای روی نقشه دنبال کنید.`,
          id:4,
          isshow:false

    },
    {
        logo: <img src={autopeyk} alt="autopeyk" />,
        title: "اتوپیک ",
        picture: <img className="" src={Pautopeyk} alt="autopeyk" />,
        tagP: `اتوپیک سرویسی برای ارسال بسته‌های شما با خودرو است. این سرویس، برای زمانی مناسب است
         که بسته‌های شما، با موتور قابل ارسال نیستند و یا در حین جابجایی، نیاز به مراقبت بیشتری دارند.
          در این سرویس نیز امکان رصد لحظه ‌به لحظه موقعیت مکانی مرسوله تا زمان رسیدن به مقصد
           فراهم است.`,
           id:5,
           isshow:false

    },
    {
        logo: <img src={plus} alt="plus" />,
        title: "تپسی پلاس",
        picture: <img className="" src={Pplus} alt="plus" />,
        tagP: `در سرویس پلاس تاکسی اینترنتی تپسی، خودرویی با مدل بالاتر و عمر کمتر، به دنبال شما خواهد
         آمد. همچنین، رانندگان این سرویس بالاترین امتیاز را از مسافران دریافت کرده‌اند. در این سرویس
         که در حال حاضر در تهران فعال است، امکان تعیین چند مقصد یا توقف در حین سفر، وجود دارد.`,
         id:6,
         isshow:false

    },
    {
        logo: <img src={taxi} alt="taxi" />,
        title: "تاکسی ",
        picture: <img className="" src={Ptaxi} alt="taxi" />,
        tagP: `در سرویس تاکسی تپسی، تاکسی‌های زرد یا سبز شما را به مقصدتان می‌رسانند. این سرویس در
         حال حاضر در تهران فعال است و چنانچه به دلایلی مانند ورود به محدوده طرح ترافیک یا طرح
          آلودگی هوا، ترجیح بدهید از تاکسی برای رفت‌وآمدتان استفاده کنید، گزینه مناسبی خواهد بود.`,
          id:7,
          isshow:false

    },
    {
        logo: <img src={hamya} alt="hamya" />,
        title: "همیار ",
        picture: <img className="" src={Phamya} alt="hamya" />,
        tagP: `سرویس همیار تپسی، به جای شما خرید می‌کند. کافیست فروشگاه مورد نظر خود را به عنوان مبدا
         مشخص کرده و لیست خریدتان را داخل اپ وارد کنید. این خرید‌ها می‌تواند از سوپرمارکت یا
          داروخانه مورد نظر شما باشند.`,
          id:8,
          isshow:false

    },
]
export default Items
