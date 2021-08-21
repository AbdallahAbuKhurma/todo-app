import React, { useContext } from 'react';
import {Navbar, Button, Alignment} from '@blueprintjs/core';
import { AuthContext } from '../../context/auth/context';
import { useHistory } from 'react-router-dom';
import { If, Else, Then } from 'react-if';

function Header() {
  const AuthSettings = useContext(AuthContext);
  const history = useHistory();

  const routeChange = () =>{
    let path = `/`;
    history.push(path);
  };

  return (
    <div className = 'body'>
      <Navbar className = 'bp3-dark'>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading style= {{margin: '0 10rem' ,width: '45rem'}}>ToDo List Manager</Navbar.Heading>
          <Navbar.Divider />
          <If condition = {AuthSettings.loggedIn}>
            <Then>
              <Button onClick = {routeChange} className="bp3-minimal" icon="home" text="Home"></Button>
              <Button className="bp3-minimal" icon = 'log-out' onClick={AuthSettings.logout}>Logout</Button>
            </Then>
            <Else>
              <Button onClick = {routeChange} className="bp3-minimal" icon="home" text="Home"></Button>
              <Button className="bp3-minimal" icon = 'log-in' text="Login" />
            </Else>
          </If>
        </Navbar.Group>
      </Navbar>
    </div>
  );
}

export default Header;
