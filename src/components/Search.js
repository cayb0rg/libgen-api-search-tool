import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Dropdown from './Dropdown';

export default function Search(props) {
    const search = useRef(null);
    const [dropdown, setDropdown] = useState(false);
    const [options, setOptions] = useState(['Fiction']);

    const onFocus = () => {
        document.querySelector('.search-box').style.boxShadow = "0 3px 10px 1px rgba(0,0,0,0.3)";
        document.getElementById('search-label').style.display = "none";
    }

    const onBlur = () => {
        document.querySelector('.search-box').style.boxShadow = "0 0";
        if (!document.getElementById('search-input').value) {
            document.getElementById('search-label').style.display = "block";
        }
    }

    const setGenre = (genre) => {
        props.setGenre(genre);
        if (genre == 'Fiction') setOptions(['Nonfiction']);
        else setOptions(['Fiction']);
    }

    const toggleDropdown = () => {
        setDropdown(!dropdown);
    }

    const removeDropdown = () => {
        setDropdown(false);
    }

    const rotateLabel = () => {
        gsap.fromTo('#search-label', {y:-30}, {y: 0})
    }

    useEffect(() => {
        /* gsap.fromTo('#search-label', {y:-30}, {y: 0, duration: 0.5})
        gsap.to('#search-label', {y:30, delay: 1.5, duration: 0.5, ease: "none"}) */
    }, [props.placeholder])

    return (
        <div className={props.searchClass} ref={search}>

            <div className='search'>
            
                {/* <svg width="100%" height="167" preserveAspectRatio="none slice"  viewBox="0 0 1059 167" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect id="Rectangle 1" width="1058" height="166" rx="83" stroke="black"/>
                </svg> */}
                <div className='search-box'>
                    <form onSubmit={props.onSubmit}>
                        <label id='search-label' htmlFor='search-input'>{props.placeholder}</label>
                        <input id='search-input' type='text' autoFocus value={props.searchValue} onChange={props.onChange} onFocus={onFocus} onBlur={onBlur}></input>

                        <div className='genre' onClick={(e) => toggleDropdown()}>
                            <div className='chosenGenre'>
                                {props.genre}
                            </div>
                            <div>
                            <svg width="15" height="15" viewBox="0 0 119 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {!dropdown ? <path d="M3.5 4L56.6716 57.1716C58.2337 58.7337 60.7663 58.7337 62.3284 57.1716L115.5 4" stroke="black" stroke-width="9"/> : <path d="M115.5 59L62.3284 5.82843C60.7663 4.26633 58.2337 4.26634 56.6716 5.82843L3.5 59" stroke="black" stroke-width="9"/>
                                }
                            </svg>
                            </div>
                            
                            {dropdown ? <Dropdown options={options}
                            setChosenOption={setGenre} removeDropdown={removeDropdown} ></Dropdown> : <></>}
                        </div>


                        <button className='search-btn-container' type='submit'>
                            <div className='search-btn-svg-container'>
                                <svg width='20px' height='20px'  className='search-btn'>
                                    <line x1='0' y1='50%' x2='100%' y2='50%' stroke='black'></line>
                                    <line x1='100%' y1='50%' x2='50%' y2='0' stroke='black'></line>
                                    <line x1='50%' y1='100%' x2='100%' y2='50%' stroke='black'></line>
                                </svg>
                            </div>
                        </button>
                    </form>
                </div>
                

            </div>
        </div>
    )
}
