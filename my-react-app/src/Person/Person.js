import React from 'react'

const person = (props) => {
    return (
        <div>
            <h4>Présentation de {props.name} : </h4>
            <p>Je suis {props.name} et j'ai {props.age} ans</p>
        </div>
    )
}

export default person;