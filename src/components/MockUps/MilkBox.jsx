import milkBox from "../../assets/milkBox.png";
import { useState } from "react";
import LoadingPopup from "../LoadingPopup";

const MilkBox = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };
  return (
    <div id="mockUpImagetoDownload">
      {isLoading && <LoadingPopup />}
      <div className="flex justify-center">
        <img src={milkBox} className="h-[100vw] md:h-[50vw]" />
        <img
          src={props.imageUrl}
          alt="tableMock"
          className="absolute w-[18.2vw] h-[46.5vw] mt-[41vw] ml-[-20.4vw] md:h-[23.35vw] md:w-[9.2vw] md:mt-[20.5vw] md:ml-[-10.3vw]"
          onLoad={imageLoaded}
        />
      </div>
    </div>
  );
};

export default MilkBox;
