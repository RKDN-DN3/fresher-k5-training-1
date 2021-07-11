import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import musicData from './data';
import MusicTable from './component/table';
import AddMusic from './component/Add-music'

function App() {
 
  const [musices, setMusices] = useState(musicData);
  return (
    <div className="App">
      
      <div className="container"> 
        <h2>Project 01 - React CRUD</h2>
        <hr/>
        <MusicTable musices ={musices}/>
      </div>
    </div>
    
  );
}

export default App;
