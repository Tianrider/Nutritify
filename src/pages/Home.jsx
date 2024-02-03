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
      <div className="min-h-[93vh]">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            flexDirection: "column",
          }}
        >
          <h1>Nutritify</h1>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
            }}
          >
            <NutritionTable amount={amount} mode={mode} />
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-filled-label">
                Amount
              </InputLabel>
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
              <InputLabel id="demo-simple-select-filled-label">
                Metric
              </InputLabel>
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
          </Box>
          <button onClick={handleDownload}>Download as Image</button>
        </Box>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
