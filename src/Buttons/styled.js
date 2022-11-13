import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
        justify-content: center;
    }
`;

export const Button = styled.button`
  background: transparent;
    color: #008080;
    border: none;
    margin: 0 0 0 20px;
    transition: color 0.3s;
    
    &:hover {
        color: #008080dd; 
    }

    &:disabled {
        color: #ccc;
    }
`;

