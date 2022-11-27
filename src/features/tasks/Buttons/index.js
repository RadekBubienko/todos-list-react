import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectAreTasksEmpty, selectIsEveryTaskDone, selectHideDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    !areTasksEmpty > 0 && (
      <StyledButtons>
        <Button
          onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={isEveryTaskDone}
        >
          Ukończ wszystkie
        </Button>
      </StyledButtons>
    )
  )
};

export default Buttons;