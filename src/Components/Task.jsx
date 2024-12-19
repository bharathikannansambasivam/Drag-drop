import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
function Task({ id, Task }) {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="border bg-white p-3 flex gap-3  cursor-move rounded-md "
    >
      <input type="checkbox" />
      {Task}{" "}
    </div>
  );
}

export default Task;
