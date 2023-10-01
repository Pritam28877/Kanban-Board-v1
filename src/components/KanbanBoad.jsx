import PlusIcon from "../icons/PlusIcon";
import { useState } from "react";
import ColumnContainer from "./ColumnContainer";

const KanbanBoad = () => {
  const [columns, setColumns] = useState([]); // [ {id: 1, title: "To Do", cards: []}, {id: 2, title: "In Progress", cards: []}, {id: 3, title: "Done", cards: []}

  console.log("columns", columns);
  const createNewColumn = () => {
    const newColumn = {
      id: columns.length + 1,
      title: `Column ${columns.length + 1}`,
      cards: [],
    };
    setColumns([...columns, newColumn]);
    console.log("createNewColumn");
  };
  return (
    <div
      className="
      m-auto
      flex
      min-h-screen
      w-full
      items-center
      overflow-x-auto
      overflow-y-hidden
      px-[40px]
    "
    >
      <div className="m-auto flex gap-4">
        <div className="flex gap-4 ">
          {columns.map((column) => (
            <ColumnContainer key={column.id} column={column} />
          ))}
        </div>
        <button
          onClick={() => createNewColumn()}
          className="
        h-[60px]
        w-[350px]
        min-w-[350px]
        cursor-pointer
        rounded-lg
        bg-mainBackgroundColor
        border-2
        p-4
        flex
        gap-2
        border-red-600     
        "
        >
          <PlusIcon />
          Add coloumn
        </button>
      </div>
    </div>
  );
};

export default KanbanBoad;
