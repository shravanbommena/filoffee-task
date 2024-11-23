/* eslint-disable react/prop-types */
const TaskCard = (props) => {
  const { task, onClickTaskEdit } = props;
  const { id, title, description, dueDate, status } = task;

  const onClickEdit = (task) => {
    onClickTaskEdit(task);
  };

  return (
    <li className="w-96 bg-white rounded-lg p-3 shadow-lg">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p>{description}</p>
        <p>
          Due Date: <span>{dueDate}</span>
        </p>
        <p>
          Status: <span>{status}</span>
        </p>
      </div>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          className="h-8 w-20 rounded-sm bg-green-400 text-slate-800 font-medium text-base"
          onClick={onClickEdit}
        >
          Edit
        </button>
        <button
          type="button"
          className="h-8 w-20 rounded-sm bg-red-500 text-slate-950 font-medium text-base"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskCard;
