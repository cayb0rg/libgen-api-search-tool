import React, {useState, useEffect} from 'react'
import Search from './Search'
import gsap from 'gsap/gsap-core';
import Dropdown from './Dropdown';

export default function Header(props) {
    const [offset, setOffset] = useState(0);
    const [headerClass, setHeaderClass] = useState('header-home');
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        if (props.redirectToResults) {
            setHeaderClass('fixed')
        }
    }, [props.redirectToResults])

    const headerTransition = () => {
        if (document.body.scrollTop > 50) {
            document.querySelector('search-logo').classList.add('fixed');
        }
    }

    const main = () => {
        const l = document.getElementById('L');
        const i = document.getElementById('I');
        const b = document.getElementById('B');
        const g = document.getElementById('G');
        const e = document.getElementById('E');
        const n = document.getElementById('N');
        const lctx = l.getContext('2d');
        const ictx = i.getContext('2d');
        const bctx = b.getContext('2d');
        const gctx = g.getContext('2d');
        const ectx = e.getContext('2d');
        const nctx = n.getContext('2d');
        lctx.font = '48px Segoe UI';
        lctx.strokeText('L', 0, 40);
        ictx.font = '48px Segoe UI';
        ictx.strokeText('I', 0, 40);
        bctx.font = '48px Segoe UI';
        bctx.strokeText('B', 0, 40);
        gctx.font = '48px Segoe UI';
        gctx.strokeText('G', 0, 40);
        ectx.font = '48px Segoe UI';
        ectx.strokeText('E', 0, 40);
        nctx.font = '48px Segoe UI';
        nctx.strokeText('N', 0, 40);
    }

    useEffect(() => {
        main();
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', headerTransition());
    }, [])

    return (
        <header className={headerClass}>
            <div className='search-logo'>
                <a href='/' className='logo'>
                    <canvas id='L' width="30" height="50">
                    </canvas>
                    <canvas id='I' width="20" height="50">
                    </canvas>
                    <canvas id='B' width="32" height="50">
                    </canvas>
                    <canvas id='G' width="35" height="50">
                    </canvas>
                    <canvas id='E' width="30" height="50">
                    </canvas>
                    <canvas id='N' width="40" height="50">
                    </canvas>
                </a>
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
            </div>
        </header>
    )
}
