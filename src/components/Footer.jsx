const Footer = () => {
  return (
    <div className="min-h-[7vh] flex flex-col md:flex-row justify-between items-center gap-1 md:mb-0 mb-3">
      <h1 className="text-white md:w-[25vw] text-center w-full">
        A project by{" "}
        <span className="font-bold text-xl">Christian Hadiwijaya</span>
      </h1>
      <div className="flex flex-row text-white gap-3 md:gap-4 w-[25vw] justify-center">
        <a className="underline cursor-pointer">instagram</a>
        <a className="underline cursor-pointer">github</a>
        <a className="underline cursor-pointer">linkedin</a>
      </div>
      <h1 className="text-white w-full md:w-[25vw] text-center">
        Privacy Policy <a className="underline cursor-pointer">Here</a>
      </h1>
    </div>
  );
};

export default Footer;