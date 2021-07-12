import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import musicData from './data';
import MusicTable from './component/table';
import AddMusic from './component/Add-music';

function App() {
 
  const [searchText, setSearchText] = useState("");
  const [musices, setMusices] = useState(musicData);
  
  const filterData =(value)=>{
    const lowercasedValue  = value.toLowerCase().trim();
    if(lowercasedValue === "") setMusices(musicData);
    else{
      const filteredData = musicData.filter(musicItem =>{
        return Object.keys(musicItem).some(key =>
          musicItem[key].toString().toLowerCase().includes(lowercasedValue)
          );
      });
      setMusices(filteredData)
    }
  }
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
