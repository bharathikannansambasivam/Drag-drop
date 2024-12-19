import React from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Task from "./Task";
function Column({ Tasks }) {
  return (
    <div className="bg-gray-200 p-3  flex  flex-col  gap-2 rounded-md ">
      <SortableContext items={Tasks} strategy={verticalListSortingStrategy}>
        {Tasks.map((task) => (
          <Task Task={task.task} id={task.id} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
}

export default Column;
