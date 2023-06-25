import MenuPage from "../../components/templates/MenuPage";
import { foods } from "../api/foods";

function Menu({ data }) {
  return <MenuPage data={data} />;
}

export default Menu;

export async function getStaticProps() {
  // const res = await fetch("/api/data/");
  // const data = await res.json();

  return {
    props: {
      data: foods,
    },
    revalidate: 30,
  };
}
