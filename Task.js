/*
Режим просмотра:
<p>Name</p>
<button>Edit</button>
<button>Delete</button>

Режим редактирования:
<textarea>New Name</textarea>
<button>Save</button>
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const Task = () => {
  const [isEdit, setIsEdit] = React.useState(false); // [state, setter]
  const [taskName, setTaskName] = React.useState("Task Name");
  const taskNameRef = React.useRef(); // { current: document.getElementById() }
  //   setIsEdit(true) - Верный вариант изменения значения локального состояния
  // isEdit = true; - Ошибочный вариант - React не следит за изменениями и не перерисует JSX
  const handleClickSave = () => {
    setTaskName(taskNameRef.current.value);
    setIsEdit(false);
  };

  return (
    <div className="card m-5 shadow">
      <div className="d-flex flex-column card-body align-items-center justify-content-center">
        {isEdit ? (
        <>
          <textarea className="form-control mb-2" ref={taskNameRef} defaultValue={taskName}></textarea>
          <button className="btn btn-sm btn-success" onClick={handleClickSave}>Save</button>
        </>
        ) : (
        <>
          <p>{taskName}</p>
          <div className="d-flex">
            <button className="btn btn-sm btn-warning me-2" onClick={() => setIsEdit(true)}>Edit</button>
            <button className="btn btn-danger btn-sm ms-2" >Delete</button>
          </div>
        </>
        )}
      </div>
    </div>
  );
};

root.render(
  <>
    <Task />
    <Task />
    <Task />
  </>
);