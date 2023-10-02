import PropTypes from "prop-types";

const ColumnContainer = (props) => {
  const { column } = props;
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
      border-columnBackgroundColor"
      >
        {column.title}
      </div>

      <div>content</div>
    </div>
  );
};

ColumnContainer.propTypes = {
  column: PropTypes.object.isRequired,
};

export default ColumnContainer;
