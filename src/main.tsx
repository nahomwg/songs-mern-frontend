import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
      <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
