import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: #ffffff;
    border: 1px solid #ddd;
    margin: 10px 0;
    padding: 0;
    box-shadow: 0 0 5px #ddd;
`;

export const StyledHeader = styled.header`
    border-bottom: 1px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledSubHeader = styled.h2`
    font-size: 20px;
    color: #3c3c3c;
    margin: 0;
`;