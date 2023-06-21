import Clock from "../icons/Clock";
import Choice from "../icons/Choice";
import Fast from "../icons/Fast";
import Food from "../icons/Food";

function Attributes() {
  return (
    <div className="mt-100px">
      <h3 className="text-2xl text-[#53c60b] my-6 mx-0">Why Us?</h3>
      <div className="flex justify-between">
        <div className=" w-40 rounded-xl shadow-md text-center items-center justify-center flex flex-col mt-5 pt-6 px-5 pb-5">
          <Fast />
          <p className="font-semibold mt-5">Fast</p>
        </div>
        <div className=" w-40 rounded-xl shadow-md text-center items-center justify-center flex flex-col mt-5 pt-6 px-5 pb-5">
          <Food />
          <p className="font-semibold mt-5">Best Restaurants</p>
        </div>
        <div className=" w-40 rounded-xl shadow-md text-center items-center justify-center flex flex-col mt-5 pt-6 px-5 pb-5">
          <Choice />
          <p className="font-semibold mt-5">Your Choice!</p>
        </div>
        <div className=" w-40 rounded-xl shadow-md text-center items-center justify-center flex flex-col mt-5 pt-6 px-5 pb-5">
          <Clock />
          <p className="font-semibold mt-5">24-7</p>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
