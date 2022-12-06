import Form from "../Form";
import TaskList from "../TaskList";
import Buttons from "../Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import FetchExampleTasksButton from "./FetchExampleTasksButton";

const TasksPage = () => {

  return (
    <>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchExampleTasksButton />}
      />
      <Section
        title="Filtruj zadania"
        body={<Search />}
      />
      <Section
        title="Lista Zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </>
  );
};

export default TasksPage;
