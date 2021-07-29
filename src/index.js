import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './containers/App';
import NavBar from './components/NavBar';
import rootReducer from './reducers/rootReducer';
import storage from './assets/logic/localStorage';
import './assets/styles/reset.css';
import './assets/styles/css-lib/borders.css';

const filters = storage.load();
const state = {
  meals: [],
  meal: {},
  filters,
};

const store = createStore(rootReducer, state);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBar />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
