import React, { Component } from 'react';
import './App.css';

//COMPONENTES
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

// Las clases tienen un me
class App extends Component{
  render() {
    return (
    <div> 
      <Header />;
      <ItemListContainer/>
    </div> 
    );
  }
}
export default App;
