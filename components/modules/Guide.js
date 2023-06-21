import Link from "next/link";

function Guide() {
  return (
    <div className="flex justify-between mb-20 mt-4">
      <Link
        className="shadow-lg rounded-lg py-4 px-12 cursor-pointer"
        href="/menu"
      >
        Menu
      </Link>
      <Link
        className="shadow-lg rounded-lg py-4 px-12 cursor-pointer"
        href="/categories"
      >
        Categories
      </Link>
      <Link
        className="shadow-lg rounded-lg py-4 px-12 cursor-pointer"
        href="/"
      >
        Discount
      </Link>
    </div>
  );
}

export default Guide;
