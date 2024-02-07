import NutritionTable from "../components/NutritionTable";
import downloadIcon from "../assets/downloadIcon.png";
import { useState } from "react";
import Footer from "../components/Footer";
import logo from "../assets/nutritify_logo.svg";
import domtoimage from "dom-to-image";
import DynamicMockup from "../components/DynamicMockup";
import html2canvas from "html2canvas";
import ButtonGroup from "../components/ButtonGroup";

const Home = () => {
  const [amount, setAmount] = useState(10);
  const [mode, setMode] = useState("topTrack");
  const [toggleGenre, setToggleGenre] = useState(true);
  const [background, setBackground] = useState(0);
  const [duration, setDuration] = useState("short");
  const [imageUrl, setImageUrl] = useState(null);
  const [mockUpBackground, setMockUpBackground] = useState("chipsBag");
  let table = null;

  const handleDownload = () => {
    table = document.getElementById("nutritionTable");
    const scale = 2;
    domtoimage
      .toPng(table, {
        width: table.clientWidth * scale,
        height: table.clientHeight * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        },
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `nutritifyTable.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  const handleMockup = () => {
    table = document.getElementById("nutritionTable");
    const scale = 2;
    domtoimage
      .toPng(table, {
        width: table.clientWidth * scale,
        height: table.clientHeight * scale,
        style: {
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        },
      })
      .then((dataUrl) => {
        setImageUrl(dataUrl);
      });
  };

  const handleMockupDownload = () => {
    const element = document.getElementById("mockUpImagetoDownload");
    html2canvas(element, {
      backgroundColor: null,
    }).then((canvas) => {
      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "nutritifyMockup.png";
      link.href = image;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <div>
      <div className="flex justify-center align-center m-10 mt-3 ">
        <img src={logo} alt="Nutritify Logo" />
      </div>
      <div className="flex justify-center items-center gap-3 flex-col md:flex-row md:items-start">
        <NutritionTable
          amount={amount}
          mode={mode}
          toggleGenre={toggleGenre}
          background={background}
          duration={duration}
          id="nutritionTable"
        />
        <div className="flex gap-3 flex-col justify-center items-center mt-10 mb-10 md:mb-0 md:p-10">
          <div className="w-full">
            <label
              htmlFor="metric"
              className="block mb-1 text-sm font-medium text-center text-gray-900 dark:text-white"
            >
              Select Metric
            </label>
            <select
              id="metric"
              className="bg-gray-50 border text-center font-bold border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="topTrack">Top Tracks</option>
              <option value="recentlyPlayed">Recently Played</option>
              <option value="topArtist">Top Artist</option>
            </select>
          </div>

          <ButtonGroup
            text1="Top 10"
            active1={amount === 10}
            onClick1={() => setAmount(10)}
            text2="Top 15"
            active2={amount === 15}
            onClick2={() => setAmount(15)}
            text3="Top 20"
            active3={amount === 20}
            onClick3={() => setAmount(20)}
          />

          {mode === "recentlyPlayed" ? null : (
            <ButtonGroup
              text1="1 Month"
              active1={duration === "short"}
              onClick1={() => setDuration("short")}
              text2="6 Months"
              active2={duration === "medium"}
              onClick2={() => setDuration("medium")}
              text3="All Time"
              active3={duration === "long"}
              onClick3={() => setDuration("long")}
            />
          )}

          <ButtonGroup
            text1="White"
            active1={background === 0}
            onClick1={() => setBackground(0)}
            text2="Paper 1"
            active2={background === 1}
            onClick2={() => setBackground(1)}
            text3="Paper 2"
            active3={background === 2}
            onClick3={() => setBackground(2)}
          />

          <div className="">
            <label className="relative inline-flex items-center mb-5 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={true}
                className="sr-only peer"
                onClick={() => setToggleGenre(!toggleGenre)}
              ></input>
              <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Display Genre
              </span>
            </label>
          </div>

          <button
            type="button"
            className="shadow-lg shadow-gray-600 px-3 py-3.5 text-sm font-medium text-white inline-flex items-center bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-500 dark:hover:green-600 dark:focus:ring-green-800"
            onClick={handleDownload}
          >
            <img src={downloadIcon} className="w-6 mr-3"></img>
            Download as PNG
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 mb-7 flex-col">
        <button
          type="button"
          className="shadow-lg shadow-gray-700 px-3 py-3.5 mb-10 text-sm font-medium text-white w-[200px] h-[50px] items-center bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center"
          onClick={handleMockup}
        >
          Generate Mockup (BETA)
        </button>
        {imageUrl && (
          <DynamicMockup
            imageUrl={imageUrl}
            mockUpBackground={mockUpBackground}
          />
        )}

        {imageUrl == null ? null : (
          <div className="flex flex-col gap-5 mt-10 items-center">
            <div className="inline-flex rounded-md shadow-sm" role="group">
              <button
                type="button"
                className={`py-2 text-sm font-medium ${
                  mockUpBackground === "chipsBag"
                    ? "text-white bg-green-500"
                    : "text-white bg-gray-700"
                } border border-gray-500 rounded-l-lg hover:bg-green-700 focus:outline-none w-[60px] md:w-[90px]`}
                onClick={() => setMockUpBackground("chipsBag")}
              >
                Duoritos
              </button>
              <button
                type="button"
                className={`py-2 text-sm font-medium ${
                  mockUpBackground === "milkBox"
                    ? "text-white bg-green-500"
                    : "text-white bg-gray-700"
                } border-t border-b border-gray-500  hover:bg-green-700 focus:outline-none w-[60px] md:w-[90px]`}
                onClick={() => setMockUpBackground("milkBox")}
              >
                Milk
              </button>
              <button
                type="button"
                className={`py-2 text-sm font-medium ${
                  mockUpBackground === "matcha"
                    ? "text-white bg-green-500"
                    : "text-white bg-gray-700"
                } border border-gray-500  hover:bg-green-700 focus:outline-none w-[60px] md:w-[90px]`}
                onClick={() => setMockUpBackground("matcha")}
              >
                Green Tea
              </button>
              <button
                type="button"
                className={`py-2 text-sm font-medium ${
                  mockUpBackground === "ramyun"
                    ? "text-white bg-green-500"
                    : "text-white bg-gray-700"
                } border-t border-b border-gray-500  hover:bg-green-700 focus:outline-none w-[60px] md:w-[90px]`}
                onClick={() => setMockUpBackground("ramyun")}
              >
                Ramyun
              </button>
              <button
                type="button"
                className={`py-2 text-sm font-medium ${
                  mockUpBackground === "nutriSari"
                    ? "text-white bg-green-500"
                    : "text-white bg-gray-700"
                } border border-gray-500 rounded-r-lg hover:bg-green-700 focus:outline-none w-[60px] md:w-[90px]`}
                onClick={() => setMockUpBackground("nutriSari")}
              >
                Nutria Sari
              </button>
            </div>
            <button
              type="button"
              className="shadow-lg shadow-gray-700 px-3 py-3.5 w-[%] text-sm font-medium text-white inline-flex items-center bg-green-800 hover:bg-green-900 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center"
              onClick={handleMockupDownload}
            >
              <img src={downloadIcon} className="w-6 mr-3"></img>
              Download as PNG
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
