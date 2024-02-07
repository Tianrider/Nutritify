import chipBag from "../assets/ChipBag.png";
const chipsBag = (props) => {
  return (
    <div id="mockUpImagetoDownload">
      <div className="flex justify-center">
        <img src={chipBag} className="h-[100vw] md:h-[50vw]" />
        <img
          src={props.imageUrl}
          alt="tableMock"
          className="absolute w-[21.5vw] h-[50vw] mt-[34vw] ml-[-33.4vw] md:h-[24vw] md:w-[11vw] md:mt-[17.5vw] md:ml-[-16.5vw]"
        />
      </div>
    </div>
  );
};

export default chipsBag;
