import Header from "../../common/Header";
import Section from "../../common/Section";
import { Paragraph } from "./styled";

const Author = () => {
  return (
    <>
      <Header title="O autorze" />
      <Section
        title="Radek Bubienko"
        body={
          <Paragraph>
            <strong>Hej, witam wszystkich, którzy tu zaglądają! 😍</strong><br /><br />
            <i>Znamy się mało... więc może ja bym powiedział parę słów o sobie – najpierw. Urodziłem się... w Warszawie, w 1970 roku, w listopadzie. Znaczy, w połowie listopada... właściwie w drugiej połowie listopada, właściwie...dokładnie 25 listopada.No...to tyle może o sobie – na początek...</i><br />
            To było z filmu "Rejs" Stanisława Barei. Bardzo lubię filmy Barei.<br /><br />
            Moją pasją od lat jest programowanie. Początki to małe poprawki w css naszej strony firmowej to ok. 1999 rok. Później powoli coraz więcej. Do tej pory było to trochę chaotyczne ale dawałem radę. Zrobiłem parę stron internetowych, serwis wystawiania dokumentów dla naszego biura oparty na bazie danych. Ostatnio zaprogramowałem coś co nazwałem "Ewidencja Czasu Pracy". Wylicza moje finanse na podstawie godzin przepracowanych w firmie poligraficznej (PHP, HTML, CSS).<br /><br />Teraz chciałbym programować profesjonalnie, więc uczę się od profesjonalistów ze szkoły "YouCode" 👍. Dziękuję!

          </Paragraph>
        }
      />
    </>
  );
};

export default Author;