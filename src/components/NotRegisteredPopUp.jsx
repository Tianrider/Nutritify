const NotRegisteredPopUp = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 rounded-lg p-5 text-white text-[15px] text-center items-center flex flex-col m-10 md:m-0">
        <p className="text-2xl font-bold">HI! SORRY!</p>
        <img
          src="https://wallpapercave.com/wp/wp7683467.jpg"
          className="w-40 rounded"
        ></img>
        <p>
          Currently, the App is still in development mode, so not everyone has
          access to it. :(
        </p>
        <p>If you'd like to gain access, please DM me your email here: </p>
        <a
          className="underline cursor-pointer text-blue hover:text-blue-700"
          href="https://instagram.com/tianhd_"
          target="blank"
        >
          instagram
        </a>
      </div>
    </div>
  );
};

export default NotRegisteredPopUp;
