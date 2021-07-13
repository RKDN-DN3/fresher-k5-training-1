import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useHistory } from 'react-router-dom';
import musicData from './data';
import MusicTable from './component/table';
import AddMusic from './component/Add-music';
import EditMusic from './component/Edit-music';
import DetailMusic from './component/Detail-music';

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

  }
  const updateMusic = (id, newMusic)=>{
    setMusices(
      musices.map((music)=>(music.id === id ? newMusic:music))
    );
    alert("Update thành công ")
  }

  const deleteMusic = (id)=>{
    console.log(id)
    setEditing(false)
    setMusices(musices.filter(music=> music.id !==id))
    alert("Xóa thành công")
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
            deleteMusic={deleteMusic}
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
          <Route path = '/detail/:id'>
            <DetailMusic
              musicInit = {musicInit}
             deleteMusic={deleteMusic}
            />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
