import React, {useState, useRef, useEffect} from 'react'
import BookOptions from './BookOptions';
import {Link} from 'react-router-dom'; 

export default function Card(props) {

    const [hoverActive, setHoverActive] = useState(false);
    const card = useRef(null);
    const bookCover = useRef(null);

    const revealOptions = (e) => {
        setHoverActive(true);
    }

    const hideOptions = (e) => {
        setHoverActive(false);
    }

    useEffect(() => {
        bookCover.current.style.backgroundImage = `url(${props.coverurl ? props.coverurl : '../../public/images/image-not-found.png'})`
        if (hoverActive) {
            bookCover.current.classList.add('blur');
        } else {
            bookCover.current.classList.remove('blur');
        }
    }, [hoverActive])

    return (
        <div className='card' ref={card}> 
            {!props.mobile ? 
                <div className='cardTop' onMouseEnter={(e) => revealOptions(e)} onMouseLeave={(e) => hideOptions(e)}>
                    <div ref={bookCover} className='bookCover'></div>
                    {hoverActive ? <BookOptions filesize={props.filesize} id={props.id}></BookOptions> : <></>}
                </div>
                :
                <div className='cardLeft'>
                    <div ref={bookCover} className='bookCover'></div>
                </div>
            }
            
            <div className='bookInfo'>
                <Link
                to={{
                    pathname: `/book/${props.id}`,
                }}><h4>{props.title}</h4></Link>
                <a href='#' id='card_title'></a>
                <p id='card_author'>{props.author}</p>
                <p id='card_extension'>{props.extension}</p>
                <p id='card_year'>{props.year}</p>
            </div>
        </div>
    )
}
