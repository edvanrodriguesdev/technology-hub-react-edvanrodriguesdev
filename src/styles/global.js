import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
}

body {
  background-color: #000000;
}

p {
  color: var(--color-primary-focus);
  font-size: 12px;
  text-align: left;
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --grey-0: #F8F9FA;
    --grey-1: #868E96;
    --grey-2: #343B41;
    --grey-3: #212529;
    --grey-4: #121214;
}
`