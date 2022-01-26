import React, {useState} from 'react'
import Dropdown from './Dropdown'

export default function BookOptions(props) {

    const [userLibraries, setUserLibraries] = useState(['Library One']);
    const [chosenOption, setChosenOption] = useState('Add to Library');
    const [className, setClassName] = useState('add_to_library');

    return (
        <div className='bookOptions'>
            <div className='bookOptionsInner'>
                <button className='downloadBtn'>    Download
                </button>
                <div className='addToLibrary'>
                    <Dropdown options={userLibraries} chosenOption={chosenOption} setChosenOption={setChosenOption} id={props.id}></Dropdown>
                </div>
            </div>
        </div>
    )
}
