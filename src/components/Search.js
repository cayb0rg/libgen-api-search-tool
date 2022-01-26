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
        document.querySelector('.search-box').style.boxShadow = "none";
        if (!document.getElementById('search-input').value) {
            document.getElementById('search-label').style.display = "flex";
        }
    }

    const setGenre = (genre) => {
        props.setGenre(genre);
        if (genre == 'Fiction') setOptions(['Nonfiction']);
        else setOptions(['Fiction']);
    }

    const rotateLabel = () => {
        gsap.fromTo('#search-label', {y:-30}, {y: 0})
    }

    useEffect(() => {
        if (document.getElementById('search-input').value) {
            document.getElementById('search-label').style.display = "none";
        }
    })

    useEffect(() => {
        /* gsap.fromTo('#search-label', {y:-30}, {y: 0, duration: 0.5})
        gsap.to('#search-label', {y:30, delay: 1.5, duration: 0.5, ease: "none"}) */
    }, [props.placeholder])

    return (
        <div className='search'>
            <div className='search-box'>
                <form onSubmit={props.onSubmit} autoComplete="off">
                    <label id='search-label' htmlFor='search-input'>
                        {props.placeholder}
                        <svg id='blinking_cursor' height='20' width='1'>
                            <path d="M 0 0 L 0 100%" strokeWidth='1' stroke='black'></path>
                        </svg>
                    </label>
                    <input id='search-input' type='text' autoFocus value={props.searchValue} onChange={props.onChange} onFocus={onFocus} onBlur={onBlur}></input>

                    <div className='genre'>
                        <Dropdown options={options}
                        setChosenOption={setGenre} chosenOption={props.genre} id={'searchID'}>
                        </Dropdown>
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
    )
}
