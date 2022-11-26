import { useSelector, useDispatch  } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Content, ButtonDone, ButtonRemove } from "./styled";


const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}>
          <ButtonDone
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </ButtonDone>
          <Content done={task.done}>
            {task.content}
          </Content>
          <ButtonRemove
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </ButtonRemove>
        </Item>
      ))}
    </List>
  );
}

export default TaskList;