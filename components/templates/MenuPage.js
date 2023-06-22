import Card from "../modules/Card";

function MenuPage({ data }) {
  return (
    <div className="max-w-4xl m-auto mt-100px">
      <h2 className="w-fit justify-center border-b-4 ml-5 border-[#53c60b] mb-12 text-3xl mt-8">Menu</h2>
      <div className="flex flex-wrap justify-between ml-5">
        {data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
