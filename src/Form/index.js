import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }
        
        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
        
    };

    const inputRef = useRef(null);

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Do zrobienia"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button onClick={ () => inputRef.current.focus()} type="submit">
                Dodaj zadanie
            </Button>
        </StyledForm>
    )
};

export default Form;