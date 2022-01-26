import React, {useState, useEffect} from 'react';
import gsap from 'gsap';

export default function Dropdown(props) {

    const [dropdown, setDropdown] = useState(false)

    const removeDropdown = () => {
        setDropdown(false);
    }

    const toggleDropdown = (bool) => {
        setDropdown(!dropdown);
        let dropdownOptions = document.querySelector('#' + CSS.escape(props.id) + ' .dropdownOptions');
        let dropdownArrow = document.querySelector('#' + CSS.escape(props.id) + ' #dropdownArrow');
        let dropdownContainer = document.getElementById(props.id).parentElement;

        if (!dropdown) {
            gsap.to(dropdownArrow, {rotate: 180, transformOrigin: "center"})
            gsap.set(dropdownOptions, {display: 'flex'})
            gsap.fromTo(dropdownOptions, {y: -30, opacity: 0}, {y: 0, opacity: 1, display: 'flex'})
            gsap.set(dropdownContainer, {borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px'})
        }
        else {
            gsap.to(dropdownArrow, {rotate: 0, transformOrigin: "center"})
            gsap.to(dropdownOptions, {y: -30, display: 'none'})
            gsap.to(dropdownOptions, {opacity: 0, duration: 0.4})
            gsap.set(dropdownContainer, {borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px'})
        }
    }

    return (
        <div className={'dropdown'} id={props.id} onClick={() => toggleDropdown()}> 
            <div className='dropdownTop'>
                <div>
                    {props.chosenOption}
                </div>
                <div>
                    <svg id='dropdownArrow' width="15" height="15" viewBox="0 0 119 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.5 4L56.6716 57.1716C58.2337 58.7337 60.7663 58.7337 62.3284 57.1716L115.5 4" stroke="black" strokeWidth="9"/>
                    </svg>
                </div>
            </div>
            <div className='dropdownOptions'>
                {props.options.map((option) => {
                    return <div key={option}className='dropdownOption' onClick={() => props.setChosenOption(option)}>{option}</div>
                })}
            </div>
            
            
        </div>
    )
}
