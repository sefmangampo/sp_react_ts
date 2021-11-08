import { ThemeProvider } from "styled-components";

import { Container, GlobalStyles } from "./components/styles"
import { Header, Footer, Card } from "./components";


import content from "./content";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) =>
            <Card key={index} item={item} ></Card>
          )}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
