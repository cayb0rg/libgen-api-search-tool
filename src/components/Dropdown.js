import React from 'react'

export default function Dropdown(props) {
    return (
        <div className='dropdown' onMouseOut={(e) => props.removeDropdown()}>
            {props.options.map((option) => {
                console.log(option);
                return <div className='dropdownOption' onClick={() => props.setChosenOption(option)}>
                    {option}
                </div>
            })}
        </div>
    )
}
