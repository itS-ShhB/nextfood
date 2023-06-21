import Banner from "../modules/Banner";
import Attributes from "../modules/Attributes";
import Definition from "../modules/Definition";
import Companies from "../modules/Companies";
import Instruction from "../modules/Instruction";
import Guide from "../modules/Guide";
import Restrictions from "../modules/Restrictions";

function HomePage() {
  return (
    <div className="max-w-4xl m-auto mt-24 sm:p-3 md:p-5">
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;
