const LoadingPopup = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <span className="animate-spin rounded-full border-t-4 border-green-500 border-solid h-8 w-8"></span>
    </div>
  );
};

export default LoadingPopup;
