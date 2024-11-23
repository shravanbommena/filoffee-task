import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskCard from "./components/TaskCard";

function App() {
  const stringifiedTaskList = localStorage.getItem("task-list");
  const parsedTaskList = JSON.parse(stringifiedTaskList);

  const [taskList, setTaskList] = useState(parsedTaskList || []);
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  const saveToLocal = (task) => {
    const stringifiedTaskList = JSON.stringify([...taskList, task]);
    localStorage.setItem("task-list", stringifiedTaskList);
  };

  const onTaskSubmit = (task) => {
    setTaskList((prev) => [...prev, task]);
    saveToLocal(task);
  };

  const onClickTaskEdit = (task) => {
    setShowTaskModal(true);
    setModalIndex(task.id);
  };

  return (
    <div className="bg-slate-50 min-h-screen relative">
      <nav className="w-full bg-slate-300 py-4">
        <h1 className="text-center text-2xl md:text-3xl font-semibold">
          Task Tracker
        </h1>
      </nav>
      <div className="mt-3">
        <div>
          <TaskForm onTaskSubmit={onTaskSubmit} editMode={showTaskModal} />
        </div>
      </div>
      <div>
        <h2>Tasks List</h2>
        <ul>
          {taskList.length > 0 &&
            taskList.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onClickTaskEdit={onClickTaskEdit}
              />
            ))}
        </ul>
        {showTaskModal && (
          <div className="min-h-screen min-w-full flex justify-center items-center bg-slate-700/20 absolute top-0 left-0">
            <TaskForm editMode={showTaskModal} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
