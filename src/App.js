import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import ToDo from './components/todo/ToDo';
import ListContext from './context/settings/context';


function App() {
  return (
    <>
      <Header/>
      <ListContext>
        <ToDo/>
      </ListContext>
      <Footer/>
    </>
  );
}

export default App;
