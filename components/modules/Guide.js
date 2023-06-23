import Link from "next/link";

function Guide() {
  return (
    <div className="flex justify-between mb-20 mt-4">
      <Link
        className="shadow-lg rounded-lg py-4 px-12 cursor-pointer  border-2 hover:border-2 hover:border-[#53c60b] hover:text-[#53c60b] hover:shadow-lg transition ease-in-out delay-75"
        href="/menu"
      >
        Menu
      </Link>
      <Link
        className="shadow-lg rounded-lg py-4 px-12 cursor-pointer  border-2 hover:border-2 hover:border-[#53c60b] hover:text-[#53c60b] hover:shadow-lg transition ease-in-out delay-75"
        href="/categories"
      >
        Categories
      </Link>
      <Link
        className="shadow-lg rounded-lg py-4 px-12 cursor-pointer  border-2 hover:border-2 hover:border-[#53c60b] hover:text-[#53c60b] hover:shadow-lg transition ease-in-out delay-75"
        href="/"
      >
        Discount
      </Link>
    </div>
  );
}

export default Guide;
