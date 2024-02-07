import Genres from "./Genres";
import Song from "./Song";
import { useEffect, useState } from "react";
import LoadingPopup from "./LoadingPopup";
import paperOne from "../assets/paperOne.png";
import paperTwo from "../assets/paperTwo.png";
import NotRegisteredPopUp from "./NotRegisteredPopUp";

const NutritionTable = (props) => {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const redirect_uri = "http://localhost:5173/Home";
  const [tracksData, setTracksData] = useState([]);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [token, setToken] = useState(null);
  const [percentageData, setPercentageData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNotRegistered, setIsNotRegistered] = useState(false);

  useEffect(() => {
    const handleRedirect = async () => {
      let code = getCode();
      if (code) {
        await getToken(code);
      }
    };
    handleRedirect();
  }, []);

  useEffect(() => {
    function changesMade() {
      setIsLoading(true);
      if (token) {
        if (props.mode === "recentlyPlayed") {
          getTracks();
        } else if (props.mode === "topTrack") {
          getTopTracks();
        } else if (props.mode === "topArtist") {
          getTopArtists();
        }
      }
    }
    changesMade();
  }, [token, props.amount, props.mode, props.duration]);

  useEffect(() => {
    genrePercentages(tracksData);
    setIsLoading(false);
  }, [tracksData]);

  function getCode() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get("code");

    if (code === null) {
      window.location.href = "/";
    }

    return code;
  }

  const getToken = async (code) => {
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
    if (result.status === 403) {
      console.log("Error: 403 Forbidden");
      setIsNotRegistered(true);
    }
    const data = await result.json();
    return data;
  };

  const fetchGenre = async (artistID) => {
    const artistInfo = await fetchData(
      `https://api.spotify.com/v1/artists/${artistID}`
    );
    return artistInfo.genres[0];
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
        props.amount +
        "&time_range=" +
        props.duration +
        "_term"
    );

    const modifiedData = await Promise.all(
      data.items.map(async (item) => {
        const formattedDuration = formatDuration(item.track.duration_ms);

        const genre = await fetchGenre(item.track.artists[0].id);

        return {
          id: item.track.id,
          name: item.track.name,
          artist: item.track.artists[0].name,
          duration: formattedDuration,
          genre: genre,
        };
      })
    );

    const totalDuration = data.items.reduce((acc, song) => {
      return acc + Math.floor(song.track.duration_ms / 60000);
    }, 0);
    setTotalMinutes(totalDuration);

    setTracksData(modifiedData);
  };

  const getTopTracks = async () => {
    const data = await fetchData(
      "https://api.spotify.com/v1/me/top/tracks?limit=" +
        props.amount +
        "&time_range=" +
        props.duration +
        "_term"
    );

    const modifiedData = await Promise.all(
      data.items.map(async (item) => {
        const formattedDuration = formatDuration(item.duration_ms);

        const genre = await fetchGenre(item.artists[0].id);

        return {
          id: item.id,
          name: item.name,
          artist: item.artists[0].name,
          duration: formattedDuration,
          genre: genre,
        };
      })
    );

    const totalDuration = data.items.reduce((acc, song) => {
      return acc + Math.floor(song.duration_ms / 60000);
    }, 0);
    setTotalMinutes(totalDuration);

    setTracksData(modifiedData);
  };

  const getTopArtists = async () => {
    const data = await fetchData(
      "https://api.spotify.com/v1/me/top/artists?limit=" +
        props.amount +
        "&time_range=" +
        props.duration +
        "_term"
    );

    const modifiedData = data.items.map((item) => {
      return {
        id: item.id,
        name: item.name,
        artist: "",
        duration: item.popularity,
        genre: item.genres[0],
      };
    });

    setTracksData(modifiedData);
  };

  function formatMode(mode) {
    switch (mode) {
      case "recentlyPlayed":
        return "Recently Played";
      case "topTrack":
        return "Top Tracks";
      case "topArtist":
        return "Top Artists";
      default:
        return mode;
    }
  }

  const genrePercentages = (tracksData) => {
    const genreCounts = tracksData.reduce((acc, song) => {
      let genre;

      // Check if the artist is Taylor Swift
      if (song.artist === "Taylor Swift") {
        genre = "Swifties";
      } else if (song.artist === "NewJeans") {
        genre = "Bunnies";
      } else if (song.artist === "One Direction") {
        genre = "Directioners";
      } else {
        genre = song.genre || "other";
      }

      acc[genre] = (acc[genre] || 0) + 1;
      return acc;
    }, {});

    const totalTracks = tracksData.length;

    const percentageData = Object.entries(genreCounts).map(([genre, count]) => {
      const percentage = (count / totalTracks) * 100;
      return { genre, percentage };
    });

    percentageData.sort((a, b) => b.percentage - a.percentage);

    setPercentageData(percentageData);
  };

  let backgroundStyle;
  switch (props.background) {
    case 1:
      backgroundStyle = { backgroundImage: `url(${paperOne})` };
      break;
    case 2:
      backgroundStyle = { backgroundImage: `url(${paperTwo})` };
      break;
    default:
      backgroundStyle = { backgroundColor: "white" };
  }

  return (
    <div
      className="bg-cover bg-center p-[1px] shadow-3xl"
      style={backgroundStyle}
      id="nutritionTable"
    >
      <section className="nutrition-facts">
        <div>{isNotRegistered ? <NotRegisteredPopUp /> : null}</div>
        <div>{isLoading && !isNotRegistered ? <LoadingPopup /> : null}</div>
        <header>
          <h1 className="font-bold pt-1">Nutritify Facts</h1>
          <p>{props.amount} servings per container</p>
          <p>
            <strong>
              Serving size <span>2/3 cup</span>
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
            <tr className="h-5">
              <th colSpan="1">
                <span className="text-xs font-bold">
                  {formatMode(props.mode)}
                </span>
              </th>
              <td>*DME</td>
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
        {props.toggleGenre ? (
          <table className="additional-nutrients">
            <Genres percentageData={percentageData} />
          </table>
        ) : null}
        <p className="footnote">
          The Daily Music Experience (DME) indicates how much each song in your
          recently played list contributes to your daily listening journey. 60
          minutes a day is recommended for general nutrition advice.
        </p>
        <p> </p>
      </section>
    </div>
  );
};

export default NutritionTable;
