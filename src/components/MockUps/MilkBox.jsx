import milkBox from "../../assets/milkBox.png";
const MilkBox = (props) => {
  return (
    <div id="mockUpImagetoDownload">
      <div className="flex justify-center">
        <img src={milkBox} className="h-[100vw] md:h-[50vw]" />
        <img
          src={props.imageUrl}
          alt="tableMock"
          className="absolute w-[18.2vw] h-[46.5vw] mt-[41vw] ml-[-20.4vw] md:h-[23.35vw] md:w-[9.2vw] md:mt-[20.5vw] md:ml-[-10.3vw]"
        />
      </div>
    </div>
  );
};

export default MilkBox;
