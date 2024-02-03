import { Box, Button } from "@mui/material";

const Home = () => {
  const clientID = "b1a2a9d825c54f6698004b762712075b";
  const redirect_uri = "http://localhost:5173/Home";

  function getAuthorization() {
    let url = "https://accounts.spotify.com/authorize";
    url += "?client_id=" + clientID;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&show_dialog=true";
    url += "&scope=" + encodeURIComponent("user-read-recently-played");
    window.location.href = url;
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <h1>Home</h1>
        <Button variant="outlined" onClick={getAuthorization}>
          Log in with Spotify
        </Button>
      </Box>
    </div>
  );
};

export default Home;
