import React, {useState} from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
    const [isActive, setIsActive] = useState(false)

    const showOptions = () => {
        setIsActive(!isActive)
    }

    return (
        <nav className="navbar shadow" role="navigation" aria-label="dropdown navigation">
            <Link to="/" className="navbar-item">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>
            </Link>
        </nav>
    )
}
