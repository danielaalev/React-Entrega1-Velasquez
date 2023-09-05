import React from 'react';
import NavBar from './components/NavBar'; //NavBar component
import ItemListContainer from './components/ItemListContainer'; //Item List Container component


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Hi there, welcome to our Vynil Store!" />
    </div>
  );
};

export default App;




