import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reducers from './reducers';
// import { createStore } from 'redux';
import { legacy_createStore as createStore , applyMiddleware , compose} from 'redux'
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers,composeEnhancers(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <Provider store={store}>
  <App />
</Provider>
  );