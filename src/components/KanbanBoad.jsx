const KanbanBoad = () => {
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
      <div className="m-auto">
        <button
          className="
        h-[60px]
        w-[350px]
        min-w-[350px]
        cursor-pointer
        rounded-lg
        bg-mainBackgroundColor
        border-2
        border-red-600     
        "
        >
          Add coloumn
        </button>
      </div>
    </div>
  );
};

export default KanbanBoad;
