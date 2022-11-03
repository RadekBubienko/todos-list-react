import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { useState } from "react";

const tasks = [
  { id: 1, content: "przejść na Reacta", done: true },
  { id: 2, content: "namalować nowy obraz olejny", done: false },
];

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <>
      <Header title="Lista zadań" />
      
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista Zadań"
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons 
          tasks={tasks} 
          hideDone={hideDone} 
          toggleHideDone={toggleHideDone}/>}
      />
      
    </>
  )
};

export default App;
