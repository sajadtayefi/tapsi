import autopeyk from "../Assetes/icon/cc-autopeyk.png";
import classic from "../Assetes/icon/cc-classic.png";
import hamya from "../Assetes/icon/cc-hamyar.png";
import line from "../Assetes/icon/cc-line.png";
import motopeyk from "../Assetes/icon/cc-motopeyk.png";
import plus from "../Assetes/icon/cc-plus.png";
import taxi from "../Assetes/icon/cc-taxi.png";
import tell from "../Assetes/icon/cc-tel.png";

export default function List() {
  return (
    <ul className="flex flex-row items-center text-sm w-full ">
      <li className="mx-10">
        <img src={classic} alt="" />
        <h5 className="my-3">تپسی کلاسیک</h5>
      </li>
      <li className="mx-14">
        <img className=" w-96" src={tell} alt="" />
        <h5 className="my-3">تپسی تلفنی</h5>
      </li>
      <li className="mx-14">
        <img src={line} alt="" />
        <h5 className="my-3 ">تپسی لاین</h5>
      </li>
      <li className="mx-14">
        <img src={motopeyk} alt="" />
        <h5 className="my-3">موتوپیک</h5>
      </li>
      <li className="mx-14">
        <img src={autopeyk} alt="" />
        <h5 className="my-3">اتوپیک</h5>
      </li>
      <li className="mx-14">
        <img src={plus} alt="" />
        <h5 className="my-3">تپسی پلاس</h5>
      </li>
      <li className="mx-14">
        <img src={taxi} alt="" />
        <h5 className="my-3">تاکسی</h5>
      </li>
      <li className="mx-14">
        <img src={hamya} alt="" />
        <h5 className="my-3">همیار</h5>
      </li>
    </ul>
  );
}
