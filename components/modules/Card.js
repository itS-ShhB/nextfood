import Location from "../icons/Location";
import Dollar from "../icons/Dollar";
import Link from "next/link";

function Card(props) {
  const { id, name, price, details, discount } = props || {};
  return (
    <div className="flex flex-col w-72 shadow-lg mb-10 p-3 rounded-xl relative">
      <img src={`/images/${id}.jpeg`} alt={name} className=" w-full rounded" />
      <div className="flex items-baseline justify-between text-gray-600 text-sm my-6 mx-0">
        <h4 className="text-[#53c60b] font-medium text-base">{name}</h4>
        <div className="flex flex-row justify-center items-center">
          <Location />
          {details[0].Cuisine}
        </div>
      </div>
      <div className="flex justify-start items-center">
        <Dollar />
        {discount ? (
          <span className="text-[#ed4133]">
            {(price * (100 - discount)) / 100}$
          </span>
        ) : (
          <span>{price}$</span>
        )}
        {discount ? (
          <div className="bg-[#ed4133] text-white p-1 rounded border-4 border-white absolute top-4 left-4">
            {discount}%
          </div>
        ) : null}
      </div>
      <Link
        href={`/menu/${id}`}
        className="bg-[#53c60b] text-white block w-full transition ease-in-out delay-75 text-center mt-5 py-1 px-0 rounded-xl border-2 hover:border-2 hover:border-[#53c60b] hover:bg-white hover:text-[#53c60b]"
      >
        See Details
      </Link>
    </div>
  );
}

export default Card;
