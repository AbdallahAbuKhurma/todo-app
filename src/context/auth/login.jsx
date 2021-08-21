import React, { useState, useContext } from 'react';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const AuthSettings = useContext(AuthContext);


  function handleUsername(event){
    setUsername(event.target.value);
  }

  function handlePassword(event){
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    AuthSettings.login(username, password);
  };

  return (
    <If condition={AuthSettings.loggedIn}>
      <Then>
        <button onClick={AuthSettings.logout}>Logout</button>
      </Then>
      <Else>
        <form className = 'login-form' onSubmit={handleSubmit}>
          <input
            className = 'login'
            type="text"
            name="username"
            placeholder="Enter Username"
            onChange={handleUsername}
          />
          <input
            className = 'login'
            type="text"
            name="password"
            placeholder="Enter Password"
            onChange={handlePassword}
          />
          <button className = 'login-button'>Login</button>
        </form>
      </Else>
    </If>
  );
}

export default Login;
