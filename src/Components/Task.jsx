import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import deleteIcon from "../assets/trash.svg";

function Task({ id, Task, deleteTask }) {
  const [completed, setCompleted] = useState(false);
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleDelete = () => {
    deleteTask(id);
  };

  const handleCompleteTask = () => {
    setCompleted(!completed);
  };

  return (
    <div className="flex bg-white">
      <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
        onClick={handleCompleteTask}
        className="border p-3 w-full flex gap-3  cursor-move rounded-md touch-none "
      >
        {completed ? <p className="line-through">{Task}</p> : <p>{Task}</p>}
      </div>

      <div className=" flex justify-center  p-3 items-center rounded-md">
        <img
          onClick={handleDelete}
          className="h-5 w-8 cursor-pointer"
          src={deleteIcon}
          alt=""
        />
      </div>
    </div>
  );
}

export default Task;
