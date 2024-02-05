import NutritionTable from "../components/NutritionTable";
import downloadIcon from "../assets/downloadIcon.png";
import { useState } from "react";
import Footer from "../components/Footer";
import logo from "../assets/nutritify_logo.svg";
import domtoimage from "dom-to-image";

const Home = () => {
  const [amount, setAmount] = useState(10);
  const [mode, setMode] = useState("topTrack");
  const [toggleGenre, setToggleGenre] = useState(true);
  const [background, setBackground] = useState(0);
  const table = document.getElementById("nutritionTable");
  var scale = 2;
  const handleDownload = () => {
    domtoimage
      .toPng(table, {
        width: table.clientWidth * scale,
        height: table.clientHeight * scale,
        style: {
          transform: `scale(` + scale + `)`,
          transformOrigin: "top left",
        },
      })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "nutritionTable.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error("Error downloading image:", error);
      });
  };

  return (
    <div>
      <div className="flex justify-center align-center m-10 mt-3 ">
        <img src={logo} alt="Nutritify Logo" />
      </div>
      <div className="min-h-[75vh] flex justify-center items-center gap-3 flex-col md:flex-row md:items-start">
        <NutritionTable
          amount={amount}
          mode={mode}
          toggleGenre={toggleGenre}
          background={background}
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

          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                amount === 10
                  ? "text-white bg-green-500"
                  : "text-white bg-gray-700"
              } border border-gray-500 rounded-l-lg hover:bg-green-700 focus:outline-none w-20`}
              onClick={() => setAmount(10)}
            >
              Top 10
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                amount === 15
                  ? "text-white bg-green-500"
                  : "text-white bg-gray-700"
              } border-t border-b border-gray-500  hover:bg-green-700 focus:outline-none w-20`}
              onClick={() => setAmount(15)}
            >
              Top 15
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                amount === 20
                  ? "text-white bg-green-500"
                  : "text-white bg-gray-700"
              } border border-gray-500 rounded-r-lg hover:bg-green-700 focus:outline-none w-20`}
              onClick={() => setAmount(20)}
            >
              Top 20
            </button>
          </div>

          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                background === 0
                  ? "text-white bg-green-500"
                  : "text-white bg-gray-700"
              } border border-gray-500 rounded-l-lg hover:bg-green-700 focus:outline-none w-20`}
              onClick={() => setBackground(0)}
            >
              White
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                background === 1
                  ? "text-white bg-green-500"
                  : "text-white bg-gray-700"
              } border-t border-b border-gray-500  hover:bg-green-700 focus:outline-none w-20`}
              onClick={() => setBackground(1)}
            >
              Paper 1
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                background === 2
                  ? "text-white bg-green-500"
                  : "text-white bg-gray-700"
              } border border-gray-500 rounded-r-lg hover:bg-green-700 focus:outline-none w-25`}
              onClick={() => setBackground(2)}
            >
              Paper 2
            </button>
          </div>

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
            className="px-3 py-3.5 text-sm font-medium text-white inline-flex items-center bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-lg text-center dark:bg-green-500 dark:hover:green-600 dark:focus:ring-green-800"
            onClick={handleDownload}
          >
            <img src={downloadIcon} className="w-6 mr-3"></img>
            Download as PNG
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
