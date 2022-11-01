import "./style.css";

const Section = ({ title, body, extraHeaderContent }) => (
    <section className="container">
        <header className="section__header">
            <h2 className="subHeader">{title}</h2>
            {extraHeaderContent}
        </header>
        {body}
    </section>
);

export default Section;