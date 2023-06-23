import MenuPage from "../../components/templates/MenuPage";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export async function getStaticProps() {
  const res = await fetch("https://nextfood-api.vercel.app/data");
  const data = await res.json();

  return {
    props: {
      data,
    },
    revalidate: 30,
  };
}
