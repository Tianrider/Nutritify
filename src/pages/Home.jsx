import NutritionTable from "../components/NutritionTable";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Footer from "../components/Footer";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import logo from "../assets/nutritify_logo.svg";
import domtoimage from "dom-to-image";

const Home = () => {
  const [amount, setAmount] = useState(10);
  const [mode, setMode] = useState("topTrack");

  const handleDownload = () => {
    domtoimage
      .toPng(document.getElementById("nutritionTable"))
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
      <div className="min-h-[75vh] flex justify-center align-center items-center gap-3 flex-col md:flex-row">
        <NutritionTable amount={amount} mode={mode} id="nutritionTable" />
        <div className="flex gap-3 flex-row flex-wrap justify-center mt-3 mb-10 md:mb-0">
          <FormControl
            variant="filled"
            sx={{ m: 0, width: 200 }}
            className="bg-white rounded"
          >
            <InputLabel id="demo-simple-select-filled-label">Metric</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              onChange={(e) => setMode(e.target.value)}
              value={mode}
            >
              <MenuItem value="recentlyPlayed">Recently Played</MenuItem>
              <MenuItem value="topTrack">Top Tracks</MenuItem>
            </Select>
          </FormControl>

          <ToggleButtonGroup
            exclusive
            aria-label="Amount"
            value={amount}
            onChange={(e, value) => setAmount(value)}
            className="bg-white m-3 ml-5 mr-5 md:ml-0"
            size="large"
            sx={{ display: "flex", width: "70%" }} // Apply flexbox here
          >
            <ToggleButton value={10} sx={{ flex: 1 }}>
              <span className="font-bold text-xl">10</span>
            </ToggleButton>
            <ToggleButton value={20} sx={{ flex: 1 }}>
              <span className="font-bold text-xl">20</span>
            </ToggleButton>
            <ToggleButton value={30} sx={{ flex: 1 }}>
              <span className="font-bold text-xl">30</span>
            </ToggleButton>
          </ToggleButtonGroup>
          <div className="flex align-center justify-center content-center">
            <button
              onClick={handleDownload}
              className="bg-white rounded p-3 font-bold hover:bg-gray-200"
            >
              Download as Image
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
