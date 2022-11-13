import { StyledSection, StyledHeader, StyledSubHeader } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <StyledHeader>
            <StyledSubHeader>{title}</StyledSubHeader>
            {extraHeaderContent}
        </StyledHeader>
        {body}
    </StyledSection>
);

export default Section;