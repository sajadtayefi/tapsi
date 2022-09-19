 
export default function Card(props) {
  return (
    <div className=" hover:shadow-xl cursor-pointer lg:w-4/12 flex flex-col justify-start h-full  p-10  items-start">
      <img className="  mx-1 rounded-xl" src={props.img} alt="" />
      <h2 className=" md:text-xs my-5  lg:text-xl text-gray-400" >{props.h2}</h2>
      <p className=" md:text-xs   lg:text-xl ">{props.p}</p>
    </div>
  );
}
