import React, { useState } from "react";
import Form from './component/Form'
import Player from './component/Player'
import uuidv4 from "uuid/v4"





function App() {

  const [players, setPlayers] = useState([{
    id: uuidv4(),
    name: 'Diddo',
    email: '5 Feet',
    role: '210lbs'
  },
  {
    id: uuidv4(),
    name: 'Alexandar Nathanael Fabion Braxton Jr. III',
    email: '7.5 Feet',
    role: '140lbs'
  },
  {
    id: uuidv4(),
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

const[isEddit, setIsEddit] = useState(false)


const edditPlayers = (id, name, email, role, array) => {
  let edditArray = array;
  let index = edditArray.findIndex(obj => obj.id === id);
  edditArray[index].name=name;
  edditArray[index].email=email;
  edditArray[index].role=role;
  setPlayers(edditArray);
  setIsEddit(false);
}




  return (
    <div className="App">
      
      <Form inputForm={inputForm} 
      setInputForm={setInputForm} 
      setPlayers={setPlayers}
      players={players}
      isEddit={isEddit}
      setIsEddit={setIsEddit} 
      edditPlayers={edditPlayers}
      />

      {players.map((item, key) => (
        <div key={key}>
          <Player 
          {...item} 
          isEddit={isEddit} 
          setIsEddit={setIsEddit}
          inputForm={inputForm}
          setInputForm={setInputForm} 
          />
        </div>
      ))}

    </div>
  );
}

export default App;
