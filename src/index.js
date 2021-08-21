import React from 'react';
import ReactDOM from 'react-dom';
import AuthContext from './context/auth/context';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AuthContext>
      <App />
    </AuthContext>
  </React.StrictMode>,
  document.getElementById('root')
);

