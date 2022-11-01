import "./style.css";

const Form = () => (
    <form className="form">
          <input className="form__input" placeholder="Do zrobienia" />
          <button type="submit" className="form__button">Dodaj zadanie</button>
    </form>
);

export default Form;