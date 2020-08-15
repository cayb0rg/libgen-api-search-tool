import React, { useState, useEffect } from 'react'
import Card from './Card'
import Search from './Search';
import Loading from './Loading';

export default function SearchResults(props) {
    const [sortBy, setSortBy] = useState();
    const [sortDesc, setSortDesc] = useState(true);
    const [sortByChanged, setSortByChanged] = useState(false);

    return (
        <div>

            

            <Search  
                placeholder={props.placeholder}
                onSubmit={props.onSubmit} 
                searchValue={props.searchValue} 
                onChange={props.onChange}
                genre={props.genre}
                setGenre={props.setGenre} 
                searchClass={props.searchClass}
                setFiction={props.setFiction}
            />


            {props.errors.noResultsFound ? <p>No Results Found</p> : props.isLoading ? <Loading></Loading> :
                <div className='searchResults'>
                    {props.results.map((book) => {
                        return <Card key={book.id} 
                        title={book.title} 
                        author={book.author}
                        coverurl={book.coverurl}
                        filesize={book.filesize}
                        year={book.year}
                        extension={book.extension}></Card>
                    })}
                </div> 
            }
            
        </div>
    )
}
