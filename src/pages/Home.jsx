import NutritionTable from "../components/NutritionTable";
import Box from "@mui/material/Box";
import html2canvas from "html2canvas";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";
import Footer from "../components/Footer";

const Home = () => {
  const [amount, setAmount] = useState(10);
  const [mode, setMode] = useState("topTrack");

  const handleDownload = () => {
    const tableElement = document.getElementById("nutritionTable");
    if (tableElement) {
      html2canvas(tableElement).then((canvas) => {
        const imageURL = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = imageURL;
        a.download = "Nutritify_Fact.png";
        a.click();
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center align-center">
        <h1 className="text-white absolute text-center text-5xl">Nutritify</h1>
      </div>
      <div className="min-h-[93vh] flex justify-center align-center items-center gap-3">
        <div className="bg-white inline-flex h-fit">
          <NutritionTable amount={amount} mode={mode} />
        </div>

        <div className="flex gap-3">
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Amount</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
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
        </div>
        {/* <button onClick={handleDownload}>Download as Image</button> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
