import Footer from "../components/Footer";

const Login = () => {
  const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const redirect_uri = "https://nutritify.vercel.app/Home";

  function getAuthorization() {
    let url = "https://accounts.spotify.com/authorize";
    url += "?client_id=" + clientID;
    url += "&response_type=code";
    url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
    url += "&show_dialog=true";
    url +=
      "&scope=" + encodeURIComponent("user-read-recently-played user-top-read");
    window.location.href = url;
  }

  return (
    <div>
      <div className="h-[93vh] flex justify-center flex-col">
        <div className="flex flex-col justify-between items-center min-h-80">
          <h1 className="text-white font-sans text-8xl">nutritify</h1>
          <h3 className="text-white font-serif text-xl">
            Because Wellness Starts with Harmony
          </h3>
          <button
            onClick={getAuthorization}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full h-12"
          >
            Log In With Spotify
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
