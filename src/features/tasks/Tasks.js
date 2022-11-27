import Form from "../../features/tasks/Form";
import TaskList from "../tasks/TaskList";
import Buttons from "../../features/tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

const Tasks = () => {
  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista Zadań"
        body={<TaskList />}
        extraHeaderContent={ <Buttons /> }
      />
    </>
  );
};

export default Tasks;
