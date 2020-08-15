import React, {useState, useEffect} from 'react';
import Search from './Search';
import { Redirect } from 'react-router-dom';

export default function Home(props) {
    const [redirectToResults, setRedirectToResults] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        if (props.searchValue.replace(/\s/g, '').length > 1) {
            setRedirectToResults(true);
            props.onSubmit(e);
        }
    }

    useEffect(() => {
        props.setSearchValue('');
    }, [])

    return (
        <div>

            {redirectToResults ? 

                <Redirect to='/search'></Redirect>
            : <></>}

            <Search  
                
                genre={props.genre}
                setGenre={props.setGenre} 
                placeholder={props.placeholder}
                onSubmit={onSubmit} 
                searchValue={props.searchValue} 
                onChange={props.onChange} 
                searchClass={props.searchClass}
                setFiction={props.setFiction}
            />


            // Recently added books to LibGen
            // Recommended books based on user's list (by topic and author)
        </div>
    )
}
