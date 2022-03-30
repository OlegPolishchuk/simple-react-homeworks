import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {ToggleBtn} from "../h4/common/ToggleBtn/ToggleBtn";

function Header() {

    const [toggle, setToggle] = useState<boolean>(false)
    const classNameLinksBox = toggle? s.show_links : '';

    const toggleLinks = () => {
        setToggle(toggle => !toggle)
    }

    return (
        <nav className={s.header_nav}>
            <div className={`${s.nav_wrapper} ${classNameLinksBox} ${toggle ? s.show_nav : ''}`}>
                <NavLink
                    to={'/pre-junior'}
                    className={({isActive}) => isActive ? s.active : ''}
                >
                    <h3>PreJunior</h3>
                </NavLink>
                <NavLink
                    to={'/junior'}
                    className={({isActive}) => isActive ? s.active : ''}
                >
                    <h3>Junior</h3>
                </NavLink>
                <NavLink
                    to={'/junior+'}
                    className={({isActive}) => isActive ? s.active : ''}
                >
                    <h3>Junior+</h3>
                </NavLink>
                <ToggleBtn  toggle={toggleLinks}/>
            </div>
        </nav>
    )
}

export default Header
