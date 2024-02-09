import ChipsBag from "./MockUps/ChipsBag";
import MilkBox from "./MockUps/MilkBox";
import NutriSari from "./MockUps/NutriSari";
import Matcha from "./MockUps/Matcha";
import Ramyun from "./MockUps/Ramyun";
import Pocky from "./MockUps/Pocky";

const ComponentMapping = {
  chipsBag: ChipsBag,
  milkBox: MilkBox,
  nutriSari: NutriSari,
  matcha: Matcha,
  ramyun: Ramyun,
  pocky: Pocky,
};

const DynamicComponent = ({ imageUrl, mockUpBackground }) => {
  const Component = ComponentMapping[mockUpBackground];

  if (!Component) {
    return null;
  }

  return <Component imageUrl={imageUrl} />;
};

export default DynamicComponent;
