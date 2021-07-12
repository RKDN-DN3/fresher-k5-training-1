import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom';
import musicData from './data';
import MusicTable from './component/table';
import AddMusic from './component/Add-music';
import EditMusic from './component/Edit-music';

function App() {
 
  const [musices, setMusices] = useState(musicData);
  const history = useHistory();
  const addMusic = (music) =>{
    console.log(music.length);
    music.id = musices.length +1
    setMusices([...musices,music])
  }

  const [editing, setEditing] = useState(false);
  const initialFormMusic = { id: null, musicName:"",singer:"", musician:""};
  const [musicInit, setMusicInit]= useState(initialFormMusic);

  const editMusic = (music)=>{
    setEditing(true);
    setMusicInit({id:music.id, musicName: music.musicName, singer: music.singer, musician: music.musician});
    console.log(music);
    <Link to={`/edit/${music.id}`}></Link>
  }
  const updateMusic = (id, newMusic)=>{
    setMusices(
      musices.map((music)=>(music.id === id ? newMusic:music))
    );
  }
  return (
    <Router>
    <div className="App"> 
      <div className="container"> 
        <h2>Project 01 - React CRUD</h2>
        <hr/>
        <Switch>
          <Route path="/" exact>
            <MusicTable 
            musices ={musices}
            editMusic ={editMusic}
            />
          </Route>
          <Route path="/add">
            <AddMusic 
            addMusic={addMusic}

            /> 
            {/* <EditMusic/> */}
          </Route>
          <Route path = '/edit/:id'>
            <EditMusic
              musicInit = {musicInit}
              setEditing = {setEditing}
              updateMusic = {updateMusic}
            />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
