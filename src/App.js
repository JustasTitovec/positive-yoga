import Checkout from './pages/Checkout';
import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
}
`;

function App() {
  return (
    <>
      <Global />
      <Checkout />
    </>
  );
}

export default App;
