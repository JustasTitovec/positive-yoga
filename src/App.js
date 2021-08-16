import Checkout from './pages/Checkout';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
`;

const theme = {
  fontColour: '#FF9B4E',
  fontSizeSmall: '12px',
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <Checkout />
      </ThemeProvider>
    </>
  );
}

export default App;
