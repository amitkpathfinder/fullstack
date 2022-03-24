import React from 'react'

export const Input = props => {

    const {type, value, onChange} = props;

    return (
        <div>
            <input 
                type={ type ? type : 'text' }
                {...props}
                />

            {/* <input
                type={type?type:'text'}
                value={value}
                onChange={
                            (e)=> onChange(e)
                         }
                /> */}
        </div>
    )
}

