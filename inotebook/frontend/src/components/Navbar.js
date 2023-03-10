import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {

    let location = useLocation();

    return (

        <div>

            {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/contact' ? "active" : ""}`} to="/contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

// useEffect(() => {
        // console.log(location);
        // console.log(location.pathname);
    // }, [useLocation]);