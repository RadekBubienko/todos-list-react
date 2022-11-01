import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "namalować nowy obraz olejny", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <>
      <Header title="Lista zadań" />
      
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista Zadań"
        body={
        <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
        <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
      
    </>
  )
};

export default App;
