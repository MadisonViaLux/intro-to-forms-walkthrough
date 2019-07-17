import React from 'react'



function Form({inputForm, setInputForm, setPlayers, players}) {

    const {name, email, role} = inputForm

    const handles = e => {
        setInputForm({
            ...inputForm, 
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = (e, player) => {
        e.preventDefault()
        setPlayers([...players, player])
    }

    return(
        <div>
            <form onSubmit={(e) => onSubmit(e, inputForm)}>

                <input
                type='text'
                name='name'
                placeholder='name'
                value={name}
                onChange={handles} />

                <input
                type='text'
                name='email'
                placeholder='email'
                value={email}
                onChange={handles} />

                <input
                type='text'
                name='role'
                placeholder='role'
                value={role}
                onChange={handles} />


                <button >submit</button>

            </form>
        </div>
    )

} 



export default Form