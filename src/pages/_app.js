import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    background-color: #1a1a2e;
    color: #e0e0e0;
  }
  main {
    min-height: calc(100vh - 160px); // Adjust based on header/footer height
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;