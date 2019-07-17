import React from 'react'




const Player = (props) => {


    return(

        <div style={{ border: '1px solid black', width: '300px', marginTop: '20px' }}>

            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.role}</p>
            <button>Edit</button>


        </div>
    )
}

export default Player