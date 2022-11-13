import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled";

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
        <>
        <StyledForm onSubmit={onFormSubmit}>
            <StyledInput
                ref={inputRef}
                value={newTaskContent}
                placeholder="Do zrobienia"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <StyledButton onClick={ () => inputRef.current.focus()} type="submit">
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
        </>
    )
};

export default Form;