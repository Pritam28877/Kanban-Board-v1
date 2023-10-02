import PropTypes from "prop-types";
import TrashIcon from "../icons/TrashIcon";

const ColumnContainer = (props) => {
  const { column ,deleteColumn } = props;
  console.log( column.id);
  return (
    <div
      className=" 
     bg-columnBackgroundColor
     flex
     flex-col
     w-[350px]
     h-[500px]
     min-w-[350px]
     rounded-mg 
     max-h-[500px]"
    >
      <div
        className="bg-mainBackgroundColor
      h-[60px]
      text-md 
      cursor-grab
      rounded-md
      rounded-b-none
      p-3
      font-bold
      border-4
      border-columnBackgroundColor
      items-center
      justify-between
      flex"
      >
        <div className="flex gap-3">
          <div
            className="
        flex
        justify-center
        items-center
        bg-columnBackgroundColor
        px-2
        py-1
        text-sm 
        rounded-full     
        "
          >
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="
        stroke-gray-500
        hover:stroke-white
        hover:bg-columnBackgroundColor
        rounded
        px-1
        py-2"
        >
          <TrashIcon />
        </button>
      </div>

      <div className="flex flex-grow ">content</div>
      <footer>Footer</footer>
    </div>
  );
};

ColumnContainer.propTypes = {
  column: PropTypes.object.isRequired,
  deleteColumn: PropTypes.func.isRequired,
};

export default ColumnContainer;
