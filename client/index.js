import React from 'react';
// import reactDom from 'react-dom';
// import LogContainer from './containers/LogContainer.jsx';
import App from './components/App.jsx';
// reactDom.render(<App />, document.getElementById('root'));
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
//import { store } from './store';


const root = createRoot(document.getElementById('root'))

root.render(
  <Provider>
    <App />
  </Provider>
  //document.getElementById('root')
);
