import { ThemeProvider } from "styled-components";

import { Container, GlobalStyles } from "./components/styles"
import Header from "./components/Header";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container><h1>hello world</h1></Container>
      </>
    </ThemeProvider>
  );
}

export default App;
