import matcha from "../../assets/matcha.png";
import { useState } from "react";
import LoadingPopup from "../LoadingPopup";

const Matcha = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };
  return (
    <div id="mockUpImagetoDownload">
      {isLoading && <LoadingPopup />}
      <div className="flex justify-center">
        <img src={matcha} className="h-[100vw] md:h-[50vw]" />
        <img
          src={props.imageUrl}
          alt="tableMock"
          className="absolute w-[26.7vw] h-[45.8vw] mt-[30.5vw] ml-[-25.3vw] md:h-[23.4vw] md:w-[13.3vw] md:mt-[15.3vw] md:ml-[-12.4vw]"
          onLoad={imageLoaded}
        />
      </div>
    </div>
  );
};

export default Matcha;
