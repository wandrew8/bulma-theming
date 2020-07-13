import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const [isActive, setIsActive] = useState(false)

    const showOptions = () => {
        setIsActive(!isActive)
    }

    return (
        <nav className="navbar" role="navigation" aria-label="dropdown navigation">
            <a className="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>

            <div className={isActive ? "navbar-item has-dropdown is-active" : "navbar-item has-dropdown"}>
                <a className="navbar-link" onClick={showOptions}>
                    Navigation
                </a>
                <div className="navbar-dropdown">
                <Link to="/" className="navbar-item">
                    Home
                </Link>
                <Link to="/search" className="navbar-item">
                    Search
                </Link>
                <Link to="top-movies" className="navbar-item">
                    Top Movies
                </Link>
                </div>
            </div>
        </nav>
    )
}
