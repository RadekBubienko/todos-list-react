import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    padding: 10px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.teal};
    border: none;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        filter: brightness(110%);
        transform: scale(1.07); 
    }

    &:active {
        filter: brightness(120%);
    }
`;