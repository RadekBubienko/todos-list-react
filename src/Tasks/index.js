import "./style.css";

const Tasks = ({ tasks, hideDone }) => (

  <ul className="list">
    {tasks.map(task => (
      <li className={`list__item${task.done && hideDone ? " list__item--hidden" : ""}`} key={task.id}>
        <button className="list__button--done">{task.done ? "✔" : ""}</button>
        <p className={`${task.done ? " list__item--lineThrough" : ""}`}>
          {task.content}
        </p>
        <button className="list__button--remove">🗑</button>
      </li>
    ))}
  </ul>

);

export default Tasks;