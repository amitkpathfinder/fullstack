import React from 'react'
import Button from "../components/button";

const ButtonContainer = () => {

   const txtInfo = 'Hi....';
   const hello = (text) => {
        console.log(text);
    }

    return (
        <div>
            <Button text={txtInfo} onClick = {() => hello(txtInfo)}/>
        </div>
    )
}
export default ButtonContainer;