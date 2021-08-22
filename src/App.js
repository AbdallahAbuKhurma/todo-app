import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ToDo from './components/ToDo/ToDo';
import ListContext from './context/settings/context';
import Login from './components/Login/Login';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context/auth/context';
import Signup from './components/Login/Signup';



function App() {
  const authSettings = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <If condition = {!authSettings.loggedIn}>
            <Then>
              <Route exact path = '/'>
                <Login/>
              </Route>
              <Route exact path = '/signup'>
                <Signup/>
              </Route>
            </Then>
            <Else>
              <ListContext>
                <Route exact path = '/'>
                  <ToDo/>
                </Route>
              </ListContext>
            </Else>
          </If>
        </Switch>
      </Router>
    </>
  );
}

export default App;
