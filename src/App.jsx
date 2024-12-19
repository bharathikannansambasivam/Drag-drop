import React, { useState } from "react";
import Column from "./Components/Column";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
function App() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "Learn React" },
    { id: 2, task: "Complete Frontend Mentor Challenge" },
    { id: 3, task: "Prepare for Interview" },
    { id: 4, task: "Review Pull Requests" },
    { id: 5, task: "Work on Portfolio" },
  ]);

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);
  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (active.id === over.id) return;
    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);

      return arrayMove(tasks, originalPos, newPos);
    });
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>My Tasks</h1>

      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Column Tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;
