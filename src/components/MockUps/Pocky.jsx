import pocky from "../../assets/Pocky.png";
import { useState } from "react";
import LoadingPopup from "../LoadingPopup";

const Pocky = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const imageLoaded = () => {
    setIsLoading(false);
  };
  return (
    <div id="mockUpImagetoDownload">
      {isLoading && <LoadingPopup />}
      <div className="flex justify-center">
        <img src={pocky} className="h-[100vw] md:h-[50vw]" />
        <img
          src={props.imageUrl}
          alt="tableMock"
          className="absolute w-[26.2vw] h-[50.5vw] mt-[19vw] ml-[-19.4vw] md:h-[25vw] md:w-[12.9vw] md:mt-[9.45vw] md:ml-[-10vw]"
          onLoad={imageLoaded}
        />
      </div>
    </div>
  );
};

export default Pocky;
