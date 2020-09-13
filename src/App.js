import React from 'react';
import logo from './logo.svg';
import './App.css';
import weatherIcon from "./weatherIcon.png"
import Weath from './components/Weath';


function App() {
  return (
    <div>
      <div className="App-header">
         <h2><img src={weatherIcon} style={{width:"50px",height:"50px"}} alt=" "/> LiveWeather</h2> 
      </div>
     <Weath />
    </div>
  );
}

export default App;
