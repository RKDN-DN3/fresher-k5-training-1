import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import musicData from './data';
import MusicTable from './component/table';
import AddMusic from './component/Add-music';

function App() {
 
  const [musices, setMusices] = useState(musicData);
  return (
    <Router>
    <div className="App"> 
      <div className="container"> 
        <h2>Project 01 - React CRUD</h2>
        <hr/>
        <Switch>
          <Route path="/" exact>
            <MusicTable musices ={musices}/>
          </Route>
          <Route path="/add">
            <AddMusic/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
