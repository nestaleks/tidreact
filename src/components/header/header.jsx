import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import logoImg from './img/logo.png';
import burgerImg from './img/burger-menu.svg';
import './header.css'; // импортируем стили

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    // закрывание мобильного меню при клике на пункт меню
    const toggleMenu = () => setIsOpen((isOpen) => !isOpen);

    return (
        <header className="header">
        <div className="container">
        <nav className="menu">
            <div className="menu_left">
                <NavLink to="/" onClick={toggleMenu} href="">
                    <img className="menu-logo" src={logoImg} alt=""/>
                </NavLink>

                <button className="menu-toggle" onClick={toggleMenu}>
                    <img className="burger-icon" src={burgerImg} alt=""/>
                    {/*☰*/}
                </button>
            </div>
            <div className={`menu_right ${isOpen ? 'open' : ''}`}>
                <ul className="menu-items">
                    <NavLink className="menu__link" onClick={toggleMenu} to="/">Home</NavLink>
                    <NavLink className="menu__link" onClick={toggleMenu} to="/about">About Us</NavLink>
                    <NavLink className="menu__link" onClick={toggleMenu} to="/#projects">Projects</NavLink>
                    <NavLink className="menu__link" onClick={toggleMenu} to="/investments">Investments</NavLink>
                    <NavLink className="menu__link" onClick={toggleMenu} to="/services">Services</NavLink>
                    <NavLink className="menu__link" onClick={toggleMenu} to="/contacts">Contacts</NavLink>
                </ul>
            </div>
        </nav>
        </div>
        </header>
    );
}

export default Header;