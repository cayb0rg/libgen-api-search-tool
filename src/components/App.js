import React, {useState, useEffect} from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';

import gsap from 'gsap';
import axios from 'axios';

import Header from './Header.js';
import Home from './Home';
import BookInfoPage from './BookInfoPage';
import SearchResults from './SearchResults.js';

// API url
const api_url = 'https://we-search-for-books.herokuapp.com/api/';

export default function App() {
    const [searchResults, setSearchResults] = useState(JSON.parse(sessionStorage.getItem('searchResults')) || []);
    const [searchValue, setSearchValue] = useState(sessionStorage.getItem('searchValue') || '');
    const [searchPlaceholder, setSearchPlaceholder] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const [queryFields, setQueryFields] = useState('Title,Author,id');

    const [genre, setGenre] = useState('Nonfiction');

    const [errors, setErrors] = useState([]);

    const [redirectToResults, setRedirectToResults] = useState(false);

    const [redirectToHome, setRedirectToHome] = useState(false);

    const [mobile, setMobile] = useState(false);

    // const fakeData = [
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255661", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255662", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255663", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255664", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255665", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255666", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255667", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255668", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "255669", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "25565", coverurl:"../../public/images/cover.jpg" },
    //     { title: "Bob Marley: A Biography", author: "David Moskowitz Ph.D.", year: "2004", extension: "epub", filesize: '496963', id: "25564", coverurl:"../../public/images/cover.jpg" },
    // ]



    const onSubmit = async (event) => {
        event.preventDefault();
        setErrors({noResultsFound: false});
        setIsLoading(true);
        setRedirectToResults(true);
        if (searchValue != undefined && searchValue.replace(/\s/g, '').length > 0) {
            setErrors({noResultsFound: false})
            const query = searchValue.replace(' ', '+');
            const url = api_url + '?req=' + query + '&fields='
            + queryFields + (genre == 'Fiction' ? '&lg_topic=fiction' :  '');
            const results = await axios(url).catch(err => console.log(err))
            .then((results) => {
                if (results.data.notFound) {
                    setErrors({noResultsFound: true})
                } else {
                    setSearchResults(results.data);
                    sessionStorage.setItem('searchResults', JSON.stringify(results.data));
                    setIsLoading(false);
                }
            });
            // setTimeout(() => {
            //     setSearchResults(fakeData);
            //     sessionStorage.setItem('searchResults', JSON.stringify(fakeData));
            //     setIsLoading(false);
            // }, 2000);
        }

    }

    const onChange = (event) => {
        setSearchValue(event.target.value);
        sessionStorage.setItem('searchValue', event.target.value);
    }

    const textVerticalCarousel = (wordArray, state, setState) => {
        let index = wordArray.findIndex((word) => state == word);
        index = index + 1 == wordArray.length ? 0 : index + 1;

        setTimeout(() => {
            setState(wordArray[index]);
            if (document.getElementById('search-label')) {
                gsap.fromTo('#search-label', {y:-30}, {y: 0, duration: 0.5})
                gsap.to('#search-label', {y:25, delay: 1.5, duration: 0.5, ease: "none"})
            }
        }, 2000)

    }

    const typeText = (placeholders, i, j, increment) => {
        let typingSpeed;
        if (increment < 0) typingSpeed = 100;
        else typingSpeed = 250;
        setTimeout(() => {
            if (placeholders[i].length < j -1) {
                // Change to removing characters
                increment = -1;
            } else if (j < 1) {
                // Change to adding characters
                i += 1;
                increment = 1;
            }
            j += increment; // Change character index
            if (i >= placeholders.length) i = 0; // Restart list

            setSearchPlaceholder(placeholders[i].slice(0, j));

            typeText(placeholders, i, j, increment);
        }, typingSpeed)
    }

    useEffect(() => {
        const placeholders = ['ISBN', 'Author', 'Title', 'Topic', 'Year'];
        typeText(placeholders, 0, 0, 1);
    }, [])

    useEffect(() => {
        if (redirectToHome)
            setSearchValue('')
    }, [redirectToHome])



    useEffect(() => {
        if (window.innerWidth <= 500) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }, [window.innerWidth])

    return (
        <div className='app'>
            <Header
                search={false}
                loggedIn={false}
                placeholder={searchPlaceholder}
                onSubmit={onSubmit}
                searchValue={searchValue}
                onChange={onChange}
                searchClass='search-header'
                setGenre={setGenre}
                genre={genre}
                errors={errors}
                redirectToResults={redirectToResults}
                redirectToHome={redirectToHome}
            ></Header>

            {redirectToResults ? <Redirect to='/search'></Redirect> : <></>}

            <div className='main'>
                <Routes>
                    <Route exact path='/' render=
                    {(props) => <Home {...props} setRedirectToHome={setRedirectToHome} redirectToResults={redirectToResults}/>}>
                    </Route>
                    <Route path='/search' render={(props) => <SearchResults {...props}
                        results={searchResults}
                        errors={errors}
                        isLoading={isLoading}
                        setIsLoading={setIsLoading}
                        setRedirectToResults={setRedirectToResults}
                        mobile={mobile}
                        setMobile={setMobile}
                    />}></Route>
                    <Route path='/book/:id'>
                        <BookInfoPage></BookInfoPage>
                    </Route>
                </Routes>
            </div>

        </div>
    )
}
