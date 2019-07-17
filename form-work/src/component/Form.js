import React from 'react'
import uuidv4 from "uuid/v4"



function Form({inputForm, setInputForm, setPlayers, players, isEddit, setIsEddit, edditPlayers}) {

    const {name, email, role, id} = inputForm

    const handles = e => {
        setInputForm({
            ...inputForm, 
            [e.target.name]: e.target.value
        })
    }


    const addPlayer= player => {
        setPlayers([...players, {id: uuidv4(), ...player}])
        setInputForm({name:'', email:'', role:''})
    }


    const onSubmit = (e, player) => {
        e.preventDefault()
        isEddit ? edditPlayers(id, name, email, role, players) : addPlayer(player)
        setInputForm({name:"", email:"", role:""})
    }

    return(
        <div>
            <form onSubmit={(e) => onSubmit(e, inputForm)}>

                <input
                type='text'
                name='name'
                placeholder='name'
                value={name}
                onChange={handles} 
                />

                <input
                type='text'
                name='email'
                placeholder='email'
                value={email}
                onChange={handles} 
                />

                <input
                type='text'
                name='role'
                placeholder='role'
                value={role}
                onChange={handles} 
                />


                <button type='submit'>{isEddit ? 'Eddit' : 'Submit'}</button>

            </form>
        </div>
    )

} 



export default Form