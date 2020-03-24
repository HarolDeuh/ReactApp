import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    width: 60%;
    margin: 10px auto;
    padding: 10px;
    border: 1px solid #eee;
    border-radius: 10px;

    @media (min-width: 500px) {
        width: 500px;
    }
`


const person = (props) => {
    return (
        <StyledDiv>
            <h4 onClick={props.click}>Présentation de {props.name} : </h4>
            <p>Je suis {props.name} et j'ai {props.age} ans</p>
            <h6>Quel est mon nom ? </h6>
            <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>
    )
}

export default person;