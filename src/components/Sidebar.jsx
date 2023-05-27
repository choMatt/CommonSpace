import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-title'>
                <h1>CommonSpace</h1>
            </div>
            <nav>
                <NavLink
                    to="/"
                >
                    Gallery
                </NavLink>
                <NavLink
                    to="list"
                >
                    List
                </NavLink>
            </nav>
        </div>
    )
}