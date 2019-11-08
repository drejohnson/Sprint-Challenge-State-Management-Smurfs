import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles/GlobalStyles';
import App from './components/App';
import { Provider } from './contexts/AppContext';

ReactDOM.render(
  <>
    <GlobalStyles />
    <Provider>
      <App />
    </Provider>
  </>,
  document.getElementById('root'),
);
