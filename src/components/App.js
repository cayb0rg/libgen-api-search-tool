import React, {useState, useEffect} from 'react';
import Search from './Search.js';
import SearchResults from './SearchResults.js';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header.js';
import Home from './Home';
import Loading from './Loading.js';
import gsap from 'gsap';

export default function App() {
    const [searchResults, setSearchResults] = useState(JSON.parse(sessionStorage.getItem('searchResults')) || []);
    const [search, setSearch] = useState(sessionStorage.getItem('search') || '');
    const [searchPlaceholder, setSearchPlaceholder] = useState('Title');

    const [isLoading, setIsLoading] = useState(false);

    const [queryFields, setQueryFields] = useState('Title,Author,id');
    
    const [genre, setGenre] = useState('Nonfiction');

    const [errors, setErrors] = useState([]);

    const fakeData = [
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
        { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: ".epub", filesize: '496963', id: "255661" },
    ]

    const onSubmit = async (event) => {
        event.preventDefault();
        if (search != undefined && search.replace(/\s/g, '').length > 0) {
            setIsLoading(true);
            setErrors({noResultsFound: false})
            const query = search.replace(' ', '+');
            const url = 'http://localhost:8080/api/?req=' + query + '&fields=' + queryFields + (genre == 'Fiction' ? '&lg_topic=fiction' :  '');
            console.log(url);
            /* const results = await axios(url).catch(err => console.log(err))
            .then((results) => {
                if (results.data.notFound) {
                    setErrors({noResultsFound: true}) 
                } else {
                    console.log(results.data)
                    setSearchResults(results.data);
                    sessionStorage.setItem('searchResults', JSON.stringify(results.data));
                }
                setIsLoading(false);
            }); */
            setTimeout(() => {
                setSearchResults(fakeData);
                console.log(searchResults);
                sessionStorage.setItem('searchResults', JSON.stringify(fakeData));
                setIsLoading(false);
            }, 2000)
        }

    }

    const onChange = (event) => {
        setSearch(event.target.value);
        sessionStorage.setItem('search', event.target.value);
    }

    const placeholderCarousel = () => {
        const placeholders = ['ISBN', 'Author', 'Title', 'Topic', 'Year'];
        let index = placeholders.findIndex((placeholder) => searchPlaceholder == placeholder);
        index = index + 1 == placeholders.length ? 0 : index + 1;

        setTimeout(() => {
            setSearchPlaceholder(placeholders[index]);
            if (document.getElementById('search-label')) {
                gsap.fromTo('#search-label', {y:-30}, {y: 0, duration: 0.5})
                gsap.to('#search-label', {y:25, delay: 1.5, duration: 0.5, ease: "none"})
            }
        }, 2000)

    }

    useEffect(() => {
        placeholderCarousel();
    }, [searchPlaceholder])

    return (
        <div>
            <Header search={false} loggedIn={false}></Header>

            <Switch>
                <Route exact path='/' render=
                {(props) => <Home {...props} 
                    placeholder={searchPlaceholder} 
                    onSubmit={onSubmit} 
                    searchValue={search}
                    setSearchValue={setSearch} 
                    onChange={onChange} 
                    searchClass='search-home'
                    setGenre={setGenre}
                    genre={genre}
                    errors={errors}
                />}>
                </Route>
                <Route path='/search' render={(props) => <SearchResults {...props} 
                    results={searchResults} 
                    placeholder={searchPlaceholder} 
                    onSubmit={onSubmit} 
                    searchValue={search} 
                    onChange={onChange} 
                    searchClass='search-header'
                    setGenre={setGenre}
                    genre={genre}
                    errors={errors}
                    isLoading={isLoading}
                    setIsLoading={setIsLoading}
                />}></Route>
            </Switch>
        </div>
    )
}
