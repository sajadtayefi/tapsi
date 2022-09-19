import etehadiye from "../Assetes/picture/etehadiye.png";
import logo from "../Assetes/picture/logo.png";
import logo1 from "../Assetes/picture/logo1.png";
import Logo from "../component/Logo";
import Mapitems from "../component/Mapitems";
import { ListFour, Listlogo, ListOne, ListThere, ListTwo } from "../constant/footerItem";


export default function Section9() {
  return (
    <div className="bg-black text-white flex justify-center items-center flex-col  xl:p-10  py-36  px-20  h-fit">
      <div className=" flex flex-col justify-center items-center 2xl:flex-row text-xs ">
        <div className="flex flex-col md:flex-row  ">
          <div className="flex flex-col lg:flex-row">
            <ul className="  w-6/12  ">
              <li className="text-4xl mb-10">تپسی</li>
              <li className="my-2">اپلیکیشن درخواست خودرو و پیک</li>
              <li className=" text-zinc-400 my-4">
                تمام حقوق مادی و معنوی این وبسایت متعلق به
                <br /> تپسی است.
              </li>
            </ul>
            <ul className=" w-60 ">
              <Mapitems data={ListOne} />

            </ul>
            <ul className=" w-60 ">
              <Mapitems data={ListTwo} />

            </ul>
          </div>
          <div className="flex flex-col lg:flex-row">
            <ul className=" w-60 ">
              <Mapitems data={ListThere} />

            </ul>
            <ul className=" w-60 ">
              <Mapitems data={ListFour} />

            </ul>
          </div>
        </div>
        <ul className=" justify-self-end  flex flex-row justify-start  items-start h-full">
          <li className=" w-1/3 m-1">
            <Logo
              image={etehadiye}
              alt={etehadiye}
            />
          </li>
          <li className=" w-1/3 m-1">
            <Logo
              image={logo1}
              alt={logo1}
            />

          </li>
          <li className=" w-1/3 m-1">
            <Logo
              image={logo}
              alt={logo}
            />
          </li>
        </ul>
      </div>
      <div className=" mt-3 xl:self-start 2xl:mr-32">
        <h5 className=" text-xs mb-2">تپسی در شبکه‌های اجتماعی</h5>
        <div className=" flex flex-row-reverse justify-end items-center text-zinc-400 ">
          {Listlogo.map((m, index) => {
            return (
              <h2 key={index}>{m.item}</h2>
            )
          })}
        </div>
      </div>
    </div>
  );
}
