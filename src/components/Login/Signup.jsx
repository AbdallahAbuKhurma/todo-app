import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/auth/context';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [email, setEmail] = useState('');
  const authSettings = useContext(AuthContext);
  const history = useHistory();

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleRole = (event) => {
    setRole(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authSettings.signup(username, password, email, role);
    const path = `/`;
    history.push(path);
    console.log(username, password, email, role);
  };

  return (
    <div>
      <form className = 'login-form1' onSubmit = {handleSubmit}>
        <input className = 'login' name = {username} onChange = {handleUsername} type="text" placeholder = 'Enter Username' />
        <input className = 'login' name = {password} onChange = {handlePassword} type="text" placeholder = 'Enter Password' />
        <input className = 'login' name = {email} onChange = {handleEmail} type="text" placeholder = 'Enter Email' />
        <select onChange = {handleRole}>
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="admin">Admin</option>
        </select>
        <button className = 'login-button'>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
