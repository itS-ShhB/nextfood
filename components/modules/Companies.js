import SpaceX from "../icons/SpaceX";
import Tesla from "../icons/Tesla";
import Binance from "../icons/Binance";
import Apple from "../icons/Apple";

function Companies() {
  return (
    <div className="flex items-center justify-around">
      <Apple />
      <Tesla />
      <Binance />
      <SpaceX />
    </div>
  );
}

export default Companies;
