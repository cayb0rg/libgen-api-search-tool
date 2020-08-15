import React, {useState, useEffect} from 'react'
import Search from './Search'

export default function Header(props) {
    const [offset, setOffset] = useState(0);
    const [home, setHome] = useState(true);

    const draw = () => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = '48px Segoe UI';
        ctx.strokeText('LIBGEN', 50, 50);
    }

    const main = () => {
        const canvas = document.getElementById('canvas');
        const gl = canvas.getContext('webgl');

        // Only continue if WebGL is available and working
        if (gl === null) {
            alert("Unable to initialize WebGL. Your browser or machine may not support it.");
            return;
        }

        // Set clear color to black, fully opaque
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        // Clear the color buffer with specified clear color
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    useEffect(() => {
        draw();
    }, [])

    return (
        <div>
            <a href='/'>
                <canvas id="canvas">
                </canvas>
            </a>
            
            <div>
                <a>{props.loggedIn ? 'User' : 'Log In'}</a>
            </div>
        </div>
    )
}
