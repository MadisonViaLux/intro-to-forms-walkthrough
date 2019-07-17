import React, { useState } from "react";
import Form from './component/Form'
import Player from './component/Player'



function App() {

  const [players, setPlayers] = useState([{
    name: 'Diddo',
    email: '5 Feet',
    role: '210lbs'
  },
  {
    name: 'Alexandar Nathanael Fabion Braxton Jr. III',
    email: '7.5 Feet',
    role: '140lbs'
  },
  {
    name: 'Jareld',
    email: '6.5 Feet',
    role: '280lbs'
  }]
  )
  

const [inputForm, setInputForm] = useState({
  name:'',
  email:'',
  role:''
})





  return (


    <div className="App">
      
      <Form inputForm={inputForm} 
      setInputForm={setInputForm} 
      setPlayers={setPlayers}
      players={players}/>

      {players.map((item, key) => (
        <div>
          <Player {...item} key={key} />
        </div>
      ))}

    </div>


  );
}

export default App;
