import ramyun from "../../assets/Ramyun.png";
const Ramyun = (props) => {
  return (
    <div id="mockUpImagetoDownload">
      <div className="flex justify-center">
        <img src={ramyun} className="h-[100vw] md:h-[50vw]" />
        <img
          src={props.imageUrl}
          alt="tableMock"
          className="absolute w-[23vw] h-[47.3vw] mt-[34.4vw] ml-[-33vw] md:h-[24.3vw] md:w-[12vw] md:mt-[17.1vw] md:ml-[-16.4vw]"
        />
      </div>
    </div>
  );
};

export default Ramyun;
