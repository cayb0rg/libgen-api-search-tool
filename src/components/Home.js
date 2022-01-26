import React, {useState, useEffect} from 'react';
import Search from './Search';
import { Redirect } from 'react-router-dom';
import gsap from 'gsap';

export default function Home(props) {
    useEffect(() => {
        props.setRedirectToHome(true);
        draw();

    }, [])

    useEffect(() => {
        if (props.redirectToResults) {
            gsap.to('.search-logo', {
                display: 'flex', 
                flexDirection: 'row',
                alignContent: 'center',
                duration: 1
            })
            gsap.to('.logo', {
                marginLeft: 0, 
                duration: 1,
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
            })
            gsap.to('.search-logo', {
                y: 0, duration: 1
            });
            gsap.to('header', {
                flexDirection: 'row',
            })
            gsap.to('search-box', {
                flexDirection: 'row'
            })
        }
    }, [props.redirectToResults])

    const draw = () => {
        const tl = gsap.timeline({repeat: 0});
        tl.fromTo('#L', {y: -10, visibility: 'hidden'}, {y: 0, visibility: 'visible', ease: 'Power2.easeOut', duration: 0.4});
        tl.fromTo('#I', {y: -10, visibility: 'hidden'}, {y: 0, visibility: 'visible', ease: 'Power2.easeOut', duration: 0.4}, "-=0.25");
        tl.fromTo('#B', {y: -10, visibility: 'hidden'}, {y: 0, visibility: 'visible', ease: 'Power2.easeOut', duration: 0.4}, "-=0.25");
        tl.fromTo('#G', {y: -10, visibility: 'hidden'}, {y: 0, visibility: 'visible', ease: 'Power2.easeOut', duration: 0.4}, "-=0.25");
        tl.fromTo('#E', {y: -10, visibility: 'hidden'}, {y: 0, visibility: 'visible', ease: 'Power2.easeOut', duration: 0.4}, "-=0.25");
        tl.fromTo('#N', {y: -10, visibility: 'hidden'}, {y: 0, visibility: 'visible', ease: 'Power2.easeOut', duration: 0.4}, "-=0.25");
        /* tl.fromTo('.search', {y: 30, opacity: 0}, {opacity: 1, y: 0, duration: 3}, "-=3") */
    }

    useEffect(() => {
        let centerPointSearch = window.innerHeight/2 - (document.querySelector('.search-logo').offsetHeight);
        let centerXPointLogo = window.innerWidth/2 - (document.querySelector('.logo').offsetWidth/2);

        gsap.set(".search-logo", {
            y: centerPointSearch
        });
    }, [window.innerWidth])

    return (
        <div>

            

            {/* // Recently added books to LibGen
            // Recommended books based on user's list (by topic and author) */}
        </div>
    )
}
