import React, {useState} from 'react'
import BookOptions from './BookOptions';

export default function Card(props) {

    const [hoverActive, setHoverActive] = useState(false);

    const revealOptions = (e) => {
        setHoverActive(true);
    }

    const hideOptions = (e) => {
        setHoverActive(false);
    }

    return (
        <div className='card' > 
            <div className='bookCover' onMouseEnter={(e) => revealOptions(e)} onMouseLeave={(e) => hideOptions(e)}>
                {hoverActive ? <BookOptions filesize={props.filesize}></BookOptions> : <></>}
                <img className={hoverActive ? 'blur' : ''}src={props.coverurl ? props.coverurl : '../../public/images/image-not-found.png'}></img>
            </div>
            <div className='bookInfo'>
                <a href='#'><h4>{props.title}</h4></a>
                <p>{props.author}</p>
                <p>{props.extension}</p>
                <p>{props.year}</p>
            </div>
        </div>
    )
}
