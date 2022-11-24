import { StyledSection, Header, SubHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <Header>
            <SubHeader>{title}</SubHeader>
            {extraHeaderContent}
        </Header>
        {body}
    </StyledSection>
);

export default Section;