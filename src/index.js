import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppPhoneBook from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-07-phonebook">
      <Provider store={store}>
          <AppPhoneBook />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
