import React from 'react'

export default function BookOptions(props) {
    return (
        <div className='bookOptions'>
            <button>Add to Library</button>
            <button>Go to Download ({parseInt(props.filesize)/1000} mb)</button>
        </div>
    )
}
