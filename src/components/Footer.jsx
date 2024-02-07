const Footer = () => {
  return (
    <div className="min-h-[7vh] flex flex-col md:flex-row justify-between items-center gap-1 md:mb-0 mb-3">
      <h1 className="text-white md:w-[25vw] text-center w-full">
        A project by{" "}
        <span
          data-popover-target="popover-animation"
          className="cursor-pointer font-bold text-xl"
        >
          Christian Hadiwijaya
        </span>
      </h1>
      <div className="flex flex-row text-white gap-3 md:gap-4 w-[25vw] justify-center">
        <a
          className="hover:underline cursor-pointer"
          href="https://instagram.com/tianhd_"
          target="blank"
        >
          instagram
        </a>
        <a
          className="hover:underline cursor-pointer"
          href="https://github.com/Tianrider"
          target="blank"
        >
          github
        </a>
        <a
          className="hover:underline cursor-pointer"
          href="https://www.linkedin.com/in/christianhadiwijaya"
          target="blank"
        >
          linkedin
        </a>
      </div>
      <h1 className="text-white w-full md:w-[25vw] text-center">
        Privacy Policy{" "}
        <a className="underline cursor-pointer" href="/Privacy">
          Here
        </a>
      </h1>
      <div
        data-popover
        id="popover-animation"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-64 text-sm text-white transition-opacity duration-300 bg-gray-700 border border-gray-900 rounded-lg shadow-sm opacity-0"
      >
        <div className="px-3 py-2">
          <p className="font-bold">Special Thanks To:</p>
          <p>Daffa Abhipraya</p>
          <p>Putri Kiara</p>
          <p>Wiellona Darlene</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
