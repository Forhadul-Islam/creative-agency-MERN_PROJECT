import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navbar = () => (
    <div className="nav">
        <img className="nav__logo" src={logo} alt="logo" />
        <div className="nav__space" />
        <ul className="nav__menu">
            <li className="nav__menu--item">
                <NavLink
                    to="/"
                    className="nav__menu--item-link"
                    activeClassName="nav__menu--item-link-active"
                >
                    Home
                </NavLink>
            </li>
            <li className="nav__menu--item">
                <NavLink
                    to="/pur-portfolio"
                    className="nav__menu--item-link"
                    activeClassName="nav__menu--item-link-active"
                >
                    Out Portfolio
                </NavLink>
            </li>
            <li className="nav__menu--item">
                <NavLink
                    to="/our-team"
                    className="nav__menu--item-link"
                    activeClassName="nav__menu--item-link-active"
                >
                    Our Team
                </NavLink>
            </li>
            <li className="nav__menu--item">
                <NavLink
                    to="/contact-us"
                    className="nav__menu--item-link"
                    activeClassName="nav__menu--item-link-active"
                >
                    Contact Us
                </NavLink>
            </li>
            <li className="nav__menu--item">
                <NavLink
                    to="/dashboard"
                    className="nav__menu--item-link"
                    activeClassName="nav__menu--item-link-active"
                >
                    Dashboard
                </NavLink>
            </li>
            <li className="nav__menu--item ">
                <NavLink to="/auth">
                    <button className="nav__menu--item-btn" type="button">
                        Login
                    </button>
                </NavLink>
            </li>
        </ul>
    </div>
);

export default Navbar;
