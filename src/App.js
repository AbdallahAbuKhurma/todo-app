import React from 'react';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ToDo from './components/ToDo/ToDo';
import ListContext from './context/settings/context';


function App() {
  return (
    <>
      <Header/>
      <ListContext>
        <ToDo/>
      </ListContext>
      {/* <Footer/> */}
    </>
  );
}

export default App;
