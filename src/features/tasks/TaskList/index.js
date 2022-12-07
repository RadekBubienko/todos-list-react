import { useSelector, useDispatch } from "react-redux";
import { toTask } from "../../../routes";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../tasksSlice";
import { List, Item, TaskLink, Content, ButtonDone, ButtonRemove } from "./styled";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

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
            <TaskLink to={toTask({ id: task.id })}>{task.content}</TaskLink>
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