import React, {useEffect} from 'react'

import gsap from 'gsap';

export default function Loading() {

    const loadingAnimation = () => {
        var tl = gsap.timeline({repeat: -1})
        tl.to('#book4', {x: 210, duration: 2, ease: 'none'});
        tl.to('#book4', {rotation: 100, x: 260, y: 15,  transformOrigin: "50% bottom", ease: 'power1.in', duration: 1});

        var tl2 = gsap.timeline({repeat: -1, delay: 0.75})
        tl2.to('#book3', {x: 210, duration: 2, ease: 'none'});
        tl2.to('#book3', {rotation: 100, x: 260, y: 10,  transformOrigin: "50% bottom", ease: 'power1.in', duration: 1});

        var tl3 = gsap.timeline({repeat: -1, delay: 1.5})
        tl3.to('#book2', {x: 210, duration: 2, ease: 'none'});
        tl3.to('#book2', {rotation: 100, x: 260, y: 10,  transformOrigin: "50% bottom", ease: 'power1.in', duration: 1});
        
        var tl4 = gsap.timeline({repeat: -1, delay: 2.25})
        tl4.to('#book1', {x: 210, duration: 2, ease: 'none'});
        tl4.to('#book1', {rotation: 100, x: 260, y: 10,  transformOrigin: "50% bottom", ease: 'power1.in', duration: 1});
    }

    useEffect(() => {
        loadingAnimation();
    }, []);

    return (
        <div>
            <svg width="520" height="264" viewBox="0 0 520 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group 1">
                    <g id="book4">
                        <rect x="0" width="55" height="217" rx="12" fill="#FF7455"/>
                    </g>
                    <g id="book3">
                        <rect x="0" width="55" height="217" rx="12" fill="#FF7455"/>
                    </g>
                    <g id="book2">
                        <rect x="0" width="55" height="217" rx="12" fill="#FF7455"/>
                    </g>
                    <g id="book1">
                        <rect x="0" width="55" height="217" rx="12" fill="#FF7455"/>
                    </g>
                    <rect id="table" y="220" width="255" height="45" rx="15.5" fill="#FF7455"/>
                </g>
            </svg>

        </div>
    )
}
