import React, {useState} from 'react'
import {Input} from "../components/input";

export const InputContainer = () => {

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <Input 
                // type={'number'} 
                value={value} 
                onChange={(e) => onChange(e)}
                />
        </div>
    )
}
