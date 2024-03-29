import nutriSari from "../../assets/nutrisariImage.png";
import { useState } from "react";
import LoadingPopup from "../LoadingPopup";

const NutriSari = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };
  return (
    <div id="mockUpImagetoDownload">
      {isLoading && <LoadingPopup />}
      <div className="flex justify-center">
        <img src={nutriSari} className="h-[100vw] md:h-[50vw]" />
        <img
          src={props.imageUrl}
          alt="tableMock"
          className="absolute w-[31.3vw] h-[40.3vw] mt-[6.4vw] ml-[-40vw] md:h-[20.3vw] md:w-[15.5vw] md:mt-[3.1vw] md:ml-[-20vw]"
          onLoad={imageLoaded}
        />
      </div>
    </div>
  );
};

export default NutriSari;
