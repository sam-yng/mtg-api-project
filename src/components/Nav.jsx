import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/index.css'

const Nav = () => {
    return (
        <nav className='flex flex-row justify-between mb-8'>
            <h1 className='font-kanitmedium text-2xl'>
                Magic the Gathering Duel
            </h1>

            <ul className='font-kanitregular mr-6 justify-between flex flex-row text-xl w-[15%]'>
                <li>
                    <NavLink to='/Battle' >
                        Battle
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Collection'>
                        Collection
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav