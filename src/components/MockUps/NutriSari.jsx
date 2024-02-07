import nutriSari from "../../assets/nutrisari.png";

const NutriSari = (props) => {
  return (
    <div id="mockUpImagetoDownload">
      <div className="flex justify-center">
        <img src={nutriSari} className="h-[100vw] md:h-[50vw]" />
        <img
          src={props.imageUrl}
          alt="tableMock"
          className="absolute w-[31.3vw] h-[40.3vw] mt-[6.4vw] ml-[-40vw] md:h-[20.3vw] md:w-[15.5vw] md:mt-[3.1vw] md:ml-[-20vw]"
        />
      </div>
    </div>
  );
};

export default NutriSari;
