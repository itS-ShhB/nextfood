import Link from "next/link";

function Banner() {
  return (
    <div className="flex">
      <div className="flex flex-col mt-3">
        <h2 className="border-b-2 border-[#53c60b] w-fit my-5 mx-0 text-2xl">
          NextFood
        </h2>
        <p className="font-medium my-4 mx-0">Food Delivery and Takeout!</p>
        <span className="text-justify text-gray-500">
          NextFood is an online food ordering and delivery platform launched by
          Uber in 2014. Meals are delivered by couriers using cars, scooters,
          bikes or in foot.
        </span>
        <Link
          className="bg-[#53c60b] text-white py-3 px-8 w-fit mt-8 rounded-md hover:bg-white hover:text-[#53c60b] transition ease-in-out delay-75 hover:border-[#53c60b] hover:border-2 border-2"
          href="/menu"
        >
          See All
        </Link>
      </div>
      <div>
        <img src="/images/banner.png" alt="Some Food Pic" className="w-450px" />
      </div>
    </div>
  );
}

export default Banner;
