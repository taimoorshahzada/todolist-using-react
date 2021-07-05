import React from 'react'
import "./Header.css";
export default function Header({logo}) {
    return (
        <div>
            <header className="header_">
                <div className="logo">
                    {logo}
                </div>
                <ul className="ul">
                    <li>About</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </header>
        </div>
    )
}
