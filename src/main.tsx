import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';

const config = {
  initialColorMode: 'light', // default mode
  useSystemColorMode: false,
};
const theme = extendTheme({ config });

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
          <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
