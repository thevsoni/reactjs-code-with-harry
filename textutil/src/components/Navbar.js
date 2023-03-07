import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const giveMargin = { margin: '10px' }
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



            </div>
        </>
    )
}
