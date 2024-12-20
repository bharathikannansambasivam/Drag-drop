import React, { useState } from "react";
import Column from "./Components/Column";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCorners,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import Input from "./Components/Input";
function App() {
  const loadTaskFromLocalStorage = () => {
    const task = localStorage.getItem("tasks");
    return task
      ? JSON.parse(task)
      : [
          { id: 1, task: "Learn React" },
          { id: 2, task: "Complete Frontend Mentor Challenge" },
          { id: 3, task: "Prepare for Interview" },
        ];
  };

  const [tasks, setTasks] = useState(loadTaskFromLocalStorage);

  const addTask = (task) => {
    const trimedTask = task.trim();

    if (trimedTask === "") {
      alert("Task cannot be empty!");
      return;
    }

    setTasks((tasks) => {
      const newTasks = [...tasks, { id: tasks.length + 1, task }];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
  };

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
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <div className=" h-screen flex flex-col  items-center">
      <h1>My Tasks</h1>
      <Input onSubmit={addTask} />
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        collisionDetection={closestCorners}
      >
        <Column Tasks={tasks} setTasks={setTasks} />
      </DndContext>
    </div>
  );
}

export default App;
