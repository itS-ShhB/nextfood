import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../modules/Card";

function CategoriesPage({ data }) {
  const router = useRouter();
  const [query, setQuery] = useState({ difficulty: "", time: "" });
  const changeHandler = (e) => {
    setQuery({ ...query, [e.target.name]: e.target.value });
  };
  const searchHandler = () => {
    console.log(query);
    router.push({
      pathname: "/categories",
      query,
    });
  };
  useEffect(() => {
    const { difficulty, time } = router.query;
    if (query.difficulty == !difficulty || query.time == !time) {
      setQuery({ difficulty, time });
    }
  }, []);

  return (
    <div className="max-w-4xl m-auto mt-24">
      <h2 className="border-b-4 ml-5 border-[#53c60b w-fit mb-12 text-3xl]">
        Categories
      </h2>
      <div className="ml-5">
        <div>
          <select
            onChange={changeHandler}
            value={query.difficulty}
            name="difficulty"
            className="border-none focus:border-none cursor-pointer hover:text-white hover:bg-[#48ac0a] ease-in-out transition delay-75 w-36 h-10 rounded-xl mr-2 p-2 text-[#48ac0a] shadow-sm shadow-[#48ac0a]"
          >
            <option value="">Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <select
            onChange={changeHandler}
            value={query.time}
            name="time"
            className="border-none focus:border-none cursor-pointer hover:text-white hover:bg-[#48ac0a] ease-in-out transition delay-75 w-52 h-10 rounded-xl mr-2 p-2 text-[#48ac0a] shadow-sm shadow-[#48ac0a]"
          >
            <option value="">Cooking Time</option>
            <option value="More">More Than 30 Minutes</option>
            <option value="Less">Less Than 30 Minutes</option>
          </select>
          <button
            onClick={searchHandler}
            className="bg-[#53c60b] text-white h-9 py-0 px-5 rounded-lg cursor-pointer"
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-between mt-20">
          {!data.length ? (
            <img src="/images/search.png" alt="Category" className="m-auto" />
          ) : null}
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
