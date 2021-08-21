import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import ToDo from './components/ToDo/ToDo';
import ListContext from './context/settings/context';
import Login from './context/auth/login';
import { If, Else, Then } from 'react-if';
import { AuthContext } from './context/auth/context';


function App() {
  const authSettings = useContext(AuthContext);

  return (
    <>
      <Router>
        <Header/>
        <If condition = {!authSettings.loggedIn}>
          <Then>
            <Login/>
          </Then>
          <Else>
            <Switch>
              <ListContext>
                <Route exact path = '/'>
                  <ToDo/>
                </Route>
              </ListContext>
            </Switch>
          </Else>
        </If>
      </Router>
    </>
  );
}

export default App;
