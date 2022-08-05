import Citys from "./Citys";
export default function Section8() {
  return (
    <div className=" bg-sliver pb-10 bg-iran bg-no-repeat bg-left-top flex flex-col items-start justify-start">
      <h2 className="text-4xl font-semibold my-10 mr-56">تپسی در ایران</h2>
        <div className="flex flex-row flex-wrap w-10/12  justify-start items-start mr-48">
      {Citys.map((item, index) => {
        return (
          <div className="">
            <ul className="w-32 my-2 mx-7 text-base">
              <li className="">{item.facity}</li>
              <li className="">{item.engcity}</li>
            </ul>
          </div>
        );
      })}
      </div>
    </div>
  );
}
