import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <div className='sidebar'>
            <div className='sidebar-title'>
                <h1>CommonSpace</h1>
            </div>
            <nav>
                <NavLink
                    to="/"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Gallery
                </NavLink>
                <NavLink
                    to="list"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    List
                </NavLink>
            </nav>
        </div>
    )
}