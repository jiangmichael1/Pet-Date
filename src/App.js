import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import MainContainer from './Containers/MainContainer'



function App() {
  return (
    <div className="mainContainer">
      <Header />
      <MainContainer />
    </div>
  );
}

export default App;
