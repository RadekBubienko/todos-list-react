import Form from "../../features/tasks/Form";
import TaskList from "../tasks/TaskList";
import Buttons from "../../features/tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { useState } from "react";
import { useTasks } from "../../useTasks";

function Tasks () {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  } = useTasks();

  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista Zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </>
  );
};

export default Tasks;
