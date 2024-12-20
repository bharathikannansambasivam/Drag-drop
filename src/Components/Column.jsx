import React, { useEffect, useState } from "react";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Task from "./Task";
function Column({ Tasks, setTasks }) {
  const deleteTask = (id) => {
    setTasks((tasks) => {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <div className="bg-gray-200 p-3  flex  flex-col  gap-2 rounded-md ">
      <SortableContext items={Tasks} strategy={verticalListSortingStrategy}>
        {Tasks.map((task) => (
          <Task
            Task={task.task}
            deleteTask={deleteTask}
            id={task.id}
            key={task.id}
          />
        ))}
      </SortableContext>
    </div>
  );
}

export default Column;
