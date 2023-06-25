import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";
import { foods } from "../api/foods";

function MenuDetails({ data }) {
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading Page...</h2>;
  }
  return <DetailsPage {...data} />;
}

export default MenuDetails;

export async function getStaticPaths() {
  // const res = await fetch("https://nextfood-api-shhub.vercel.app/data");
  // const json = await res.json();
  const data = foods.slice(0, 10);
  const paths = data.map((food) => ({ params: { id: food.id.toString() } }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  // const res = await fetch(`https://nextfood-api-shhub.vercel.app/data/${id}`);
  const data = foods.find((f) => f.id.toString() === id);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
    revalidate: 60 * 60,
  };
}
