import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    const giveMargin = { margin: '10px' }
    const { h1, h2 } = props;
    return (
        <>
            <div className='navbar'>Navbar</div>
            <div>
                <a href="/" style={giveMargin}>Home</a>
                <a href="/about" style={giveMargin}>About</a>
                <a href="/" style={giveMargin}>contact</a>

                <Link to="/" style={giveMargin}>Home2 without loading</Link>
                <Link to="/about" style={giveMargin}>About2 without loading</Link>
                <Link to="/" style={giveMargin}>contact2 without loading</Link>

                <h1>{h1}</h1>
                <h2>{h2}</h2>
                <h3>{props.h3}</h3>



            </div>
        </>
    )
}
