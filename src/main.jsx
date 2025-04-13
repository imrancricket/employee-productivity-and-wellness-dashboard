import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContextProvider } from './theme/ThemeContextProvider.jsx';
import Store from './features/Store.jsx';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </Provider>
)
