import React from 'react'




const Player = ({name, email, role, id, setIsEddit, isEddit, setInputForm}) => {

    const populateForm = (e, name, email, role, id) => {
        e.preventDefault()
        setIsEddit(true);
        setInputForm({name:name, email:email, role:role, id:id})
    }

    return(

        <div style={{ border: '1px solid black', width: '300px', marginTop: '20px' }}>

            <p>{name}</p>
            <p>{email}</p>
            <p>{role}</p>
            <button onClick={e => populateForm(e, name, email, role, id)}>
                Edit
            </button>


        </div>
    )
}

export default Player