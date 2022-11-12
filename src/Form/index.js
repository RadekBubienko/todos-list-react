import { useState, useRef } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                autoFocus
                value={newTaskContent}
                className="form__input"
                placeholder="Do zrobienia"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button onClick={ () => inputRef.current.focus()} type="submit" className="form__button">Dodaj zadanie</button>
        </form>
        </>
    )
};

export default Form;