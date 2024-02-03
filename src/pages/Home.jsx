import NutritionTable from "../components/NutritionTable";
import Box from "@mui/material/Box";
import html2canvas from "html2canvas";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useState } from "react";

const Home = () => {
  const [amount, setAmount] = useState(10);

  const handleDownload = () => {
    const tableElement = document.getElementById("nutritionTable");
    if (tableElement) {
      html2canvas(tableElement).then((canvas) => {
        const imageURL = canvas.toDataURL("image/png");

        // Optionally, you can trigger a download
        const a = document.createElement("a");
        a.href = imageURL;
        a.download = "Nutritify_Fact.png";
        a.click();
      });
    }
  };

  return (
    <div>
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
          <NutritionTable amount={amount} />
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
        </Box>
        <button onClick={handleDownload}>Download as Image</button>
      </Box>
    </div>
  );
};

export default Home;
