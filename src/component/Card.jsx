 
export default function Card(props) {
  return (
    <div className=" hover:shadow-xl cursor-pointer flex flex-col justify-start h-full  p-10 max-w-lg items-start">
      <img className="  mx-1 rounded-xl" src={props.img} alt="" />
      <h2 className=" my-5  text-xl text-gray-400" >{props.h2}</h2>
      <p className=" ">{props.p}</p>
    </div>
  );
}
