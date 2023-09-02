import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppPhoneBook from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-06-phonebook">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppPhoneBook />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
