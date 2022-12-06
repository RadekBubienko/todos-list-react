import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

*, ::after, ::before {
  box-sizing: inherit;
}

.body {
  background-color: ${({ theme }) => theme.color.gallery};
  margin: auto;
  color: ${({ theme }) => theme.color.darkGrey};
  max-width: 700px;
}

@media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
  .body {
      max-width: 94%;
  }
}

`;