import Footer from "../components/Footer";
import logo from "../assets/nutritify_logo.svg";
import DisplayImage from "../assets/Display.png";

const Login = () => {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirect_uri = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;

  function getAuthorization() {
    let url = "https://accounts.spotify.com/authorize";
    url += "?client_id=" + clientID;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&show_dialog=true";
    url +=
      "&scope=" + encodeURIComponent("user-read-recently-played user-top-read");
    url += "&state=34fFs29kd09";
    window.location.href = url;
  }

  return (
    <div>
      <div className="h-[93vh] flex justify-center items-center flex-col">
        <div className="flex flex-col justify-between items-center gap-[80px] mb-10">
          <div className="flex justify-center items-center flex-col">
            <img
              src={logo}
              alt="Nutritify Logo"
              className="w-90 md:scale-150"
            />
            <h3 className="text-white text-l mt-5 md:text-2xl">
              how's your music taste affecting your health
            </h3>
          </div>
          <button
            onClick={getAuthorization}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full h-12 flex items-center justify-center gap-2 shadow-lg shadow-gray-600"
          >
            <link
              type="image/png"
              sizes="16x16"
              rel="icon"
              href=".../icons8-spotify-16.png"
            ></link>
            <p>Login With Spotify</p>
          </button>
        </div>
        <img src={DisplayImage} alt="Display" className="w-[80%] md:w-[35%]" />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
