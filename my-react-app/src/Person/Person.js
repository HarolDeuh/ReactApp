import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <h4 onClick={props.click}>Présentation de {props.name} : </h4>
            <p>Je suis {props.name} et j'ai {props.age} ans</p>
            <h6>Quel est mon nom ? </h6>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;