import logo from './logo.svg';
import {React, useState} from 'react';
import './App.scss';
import {Switch, Route, Redirect}  from 'react-router-dom';


//components
import CordsForm from './cords_form';
import BingMap from './bing_map';

function App() {

  const [points, setPoints] = useState([]);

  const handlePointSubmit = (point) =>{
    let new_points = [...points];
    new_points.push(point);
    setPoints(new_points);
  }

  return (
    <div className="App">
      <CordsForm handlePointSubmit = {handlePointSubmit}/>
      <BingMap points={points}/>
    </div>
  );
}

export default App;
