import Link from "next/link";

function Layout({ children }) {
  return (
    <>
      <header className="max-w-4xl pt-3 m-auto flex justify-between items-center px-5 py-0">
        <div className="">
          <Link
            href="/"
            className="text-[#53c60b] font-semibold text-xl hover:border-b-2 border-gray-600 pb-2"
          >
            NextFood
          </Link>
        </div>
        <div>
          <Link
            href="/menu"
            className="ml-4 text-gray-500 font-medium hover:text-[#53c60b] hover:border-b-2 border-gray-600 pb-2"
          >
            Menu
          </Link>
          <Link
            href="/categories"
            className="ml-4 text-gray-500 font-medium hover:text-[#53c60b] hover:border-b-2 border-gray-600 pb-2"
          >
            Categories
          </Link>
        </div>
      </header>
      <div className="min-h-screen">{children}</div>
      <footer className="bg-[#53c60b] text-center text-white py-3 px-2 mt-8">
        Next Js Project &copy;
      </footer>
    </>
  );
}

export default Layout;
