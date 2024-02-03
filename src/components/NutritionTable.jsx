import Song from "./Song";
import { useEffect, useState } from "react";

const NutritionTable = (props) => {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redirect_uri = "https://nutritify.vercel.app/Home";
  const [tracksData, setTracksData] = useState([]);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const handleRedirect = async () => {
      console.log("Handling redirect");
      let code = getCode();
      if (code) {
        console.log(code);
        await getToken(code);
      }
    };
    handleRedirect();
  }, []);

  useEffect(() => {
    function changesMade() {
      if (token) {
        if (props.mode === "recentlyPlayed") {
          getTracks();
        } else if (props.mode === "topTrack") {
          getTopTracks();
        }
      }
    }
    changesMade();
  }, [token, props.amount, props.mode]);

  function getCode() {
    let code = null;
    const queryString = window.location.search;
    if (queryString.length > 0) {
      const urlParams = new URLSearchParams(queryString);
      code = urlParams.get("code");
    }
    return code;
  }

  const getToken = async (code) => {
    console.log("Getting token");
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientID + ":" + clientSecret),
      },
      body:
        "grant_type=authorization_code" +
        "&code=" +
        code +
        "&redirect_uri=" +
        encodeURIComponent(redirect_uri) +
        "&client_id=" +
        clientID +
        "&client_secret=" +
        clientSecret,
    });

    const data = await result.json();
    setToken(data.access_token);
  };

  const fetchData = async (url) => {
    const result = await fetch(url, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();

    return data;
  };

  const formatDuration = (durationMs) => {
    const durationMinutes = Math.floor(durationMs / 60000);
    const durationSeconds = (
      "0" + ((durationMs % 60000) / 1000).toFixed(0)
    ).slice(-2);
    return `${durationMinutes}:${durationSeconds}`;
  };

  const getTracks = async () => {
    const data = await fetchData(
      "https://api.spotify.com/v1/me/player/recently-played?limit=" +
        props.amount
    );

    const modifiedData = data.items.map((item) => {
      const formattedDuration = formatDuration(item.track.duration_ms);
      return {
        id: item.track.id,
        name: item.track.name,
        artist: item.track.artists[0].name,
        duration: formattedDuration,
      };
    });

    const totalDuration = data.items.reduce((acc, song) => {
      return acc + Math.floor(song.track.duration_ms / 60000);
    }, 0);
    setTotalMinutes(totalDuration);

    setTracksData(modifiedData);
  };

  const getTopTracks = async () => {
    const data = await fetchData(
      "https://api.spotify.com/v1/me/top/tracks?limit=" + props.amount
    );

    const modifiedData = data.items.map((item) => {
      const formattedDuration = formatDuration(item.duration_ms);

      return {
        id: item.id,
        name: item.name,
        artist: item.artists[0].name,
        duration: formattedDuration,
      };
    });
    // total duration
    const totalDuration = data.items.reduce((acc, song) => {
      return acc + Math.floor(song.duration_ms / 60000);
    }, 0);
    setTotalMinutes(totalDuration);

    setTracksData(modifiedData);
  };

  return (
    <div id="nutritionTable" className=" bg-white">
      <section className="nutrition-facts">
        <header>
          <h1>Nutritify Facts</h1>
          <p>8 servings per container</p>
          <p>
            <strong>
              Serving size <span>2/3 cup (55g)</span>
            </strong>
          </p>
        </header>

        <table className="main-nutrients">
          <thead>
            <tr>
              <th colSpan="2">
                Amount per serving <br />
                <strong>Minutes</strong>
                <span id="totalDuration">{totalMinutes}</span>
              </th>
            </tr>
          </thead>

          <tbody id="recentlyPlayedContainer">
            <tr className="daily-value">
              <th colSpan="2">
                <strong>DME*</strong>
              </th>
            </tr>
            {tracksData?.map((song) => {
              return (
                <Song
                  key={song.id}
                  title={song.name}
                  artist={song.artist}
                  duration={song.duration}
                />
              );
            })}
          </tbody>
        </table>
        <table className="additional-nutrients">
          <tbody>
            <tr></tr>
          </tbody>
        </table>

        <p className="footnote">
          The Daily Music Experience (DME) indicates how much each song in your
          recently played list contributes to your daily listening journey. 60
          minutes a day is recommended for general nutrition advice.
        </p>
        <p></p>
      </section>
    </div>
  );
};

export default NutritionTable;
