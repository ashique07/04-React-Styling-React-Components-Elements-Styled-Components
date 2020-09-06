import React from 'react';
import './Person.css'
import styled from "styled-components";

const StyledDiv = styled.div`
    
        width: 50%;
        margin: auto;
        margin-top: 100px;
        border: 2px solid #8A2BE2;
        box-shadow: inset;
        padding: 25px;
        text-align: center;

        @media(min-width : 500px)
        {
            width : 450px;
        }
    
    `;

const person = ( props ) => {
    
return (
    <StyledDiv>
        <p onClick = {props.click}>My name is {props.name} and my age is {props.age}</p>
        <p>{props.children}</p>
        <input type = "text" onChange = {props.changed} value={props.name}/>
    </StyledDiv>
);

};

export default person;