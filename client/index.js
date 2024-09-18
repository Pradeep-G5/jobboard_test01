import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store'; 

import { disableReactDevTools } from '@fvilers/disable-react-devtools'; 

if (process.env.NODE_ENV === 'production') disableReactDevTools()

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);
