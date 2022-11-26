import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { StyledForm, Input, Button } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();

        if (!trimmedNewTaskContent) {
            return;
        }

        dispatch(addTask( {
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));
        
        setNewTaskContent("");
        inputRef.current.focus();
        
    };

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