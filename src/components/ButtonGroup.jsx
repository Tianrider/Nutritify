const ButtonGroup = (props) => {
  return (
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`py-2 text-sm font-medium ${
              props.active1 ? "text-white bg-green-500" : "text-white bg-gray-700"
            } border border-gray-500 rounded-l-lg hover:bg-green-700 focus:outline-none w-[90px]`}
            onClick={props.onClick1}
          >
            {props.text1}
          </button>
          <button
            type="button"
            className={`py-2 text-sm font-medium ${
              props.active2 ? "text-white bg-green-500" : "text-white bg-gray-700"
            } border-t border-b border-gray-500  hover:bg-green-700 focus:outline-none w-[90px]`}
            onClick={props.onClick2}
          >
            {props.text2}
          </button>
          <button
            type="button"
            className={`py-2 text-sm font-medium ${
              props.active3 ? "text-white bg-green-500" : "text-white bg-gray-700"
            } border border-gray-500 rounded-r-lg hover:bg-green-700 focus:outline-none w-[90px]`}
            onClick={props.onClick3}
          >
            {props.text3}
          </button>
        </div>
  );
};

export default ButtonGroup;
