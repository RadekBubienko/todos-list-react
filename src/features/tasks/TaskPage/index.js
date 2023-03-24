import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { Paragraph } from "./styled";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😢"}
        body={
          !!task && (
            <>
              <Paragraph>
                <strong>Ukończono:</strong> {task.done ? "Tak" : "Nie"}
              </Paragraph>
            </>
          )
        }
      />
    </>
  );
};

export default TaskPage;
