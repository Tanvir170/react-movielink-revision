import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';
import Country from './components/Country/Country';

function App() {
  return (
    <div className="App color">
      <Header></Header>
      <Countries></Countries>
    </div>
  );
}

export default App;
