import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.alto};
    margin: 10px 0;
    padding: 0;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMx}px) {
        grid-template-columns: 1fr;
    }
`;

export const SubHeader = styled.h2`
    font-size: 20px;
    color: ${({ theme }) => theme.color.darkGrey};
    margin: 0;
`;