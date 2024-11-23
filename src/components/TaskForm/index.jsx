/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = (props) => {
  const { onTaskSubmit, editMode, task } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("pending");

  const todayDate = new Date();
  const [year, month, date] = [
    todayDate.getFullYear(),
    todayDate.getMonth() + 1,
    todayDate.getDate(),
  ];
  const localDate = year + "-" + month + "-" + date;

  const onSubmitForm = (event) => {
    event.preventDefault();
    onTaskSubmit({
      id: uuidv4(),
      title,
      description,
      dueDate,
      status,
    });
  };

  return (
    <form
      className="w-96 flex flex-col gap-3 px-6 py-5 mx-auto bg-white rounded-lg shadow-md"
      onSubmit={onSubmitForm}
    >
      <h2 className="text-2xl font-semibold text-center">
        {editMode ? "Edit" : "Create"} Task
      </h2>
      <div className="flex flex-col gap-1">
        <label className="text-lg">Title:</label>
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          type="text"
          className="h-9 border border-black outline-none px-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg">Description:</label>
        <input
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          type="description"
          className="h-9 border border-black outline-none px-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg">Due Date:</label>
        <input
          value={dueDate}
          min={localDate}
          onChange={(event) => {
            setDueDate(event.target.value);
          }}
          type="date"
          className="h-9 border border-black outline-none px-2 text-sm"
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-lg">Status</label>
        <select
          value={status}
          name="status"
          onChange={(event) => {
            setStatus(event.target.value);
          }}
          className="h-9 border border-black outline-none px-2"
        >
          <option value="pending">Pending</option>
          <option value="inProgress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      {editMode ? (
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold h-10 w-36 rounded-sm"
          >
            Save
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold h-10 w-36 rounded-sm"
          >
            Close
          </button>
        </div>
      ) : (
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-bold h-10 w-36 rounded-sm"
          >
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default TaskForm;
