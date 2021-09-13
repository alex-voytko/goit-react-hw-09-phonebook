import React from 'react';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

export default function Navigation() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <>
            <nav className="nav-container-1 ">
                <NavLink
                    to="/"
                    exact
                    className="link"
                    activeClassName="active-link"
                >
                    Homepage
                </NavLink>
                {isLoggedIn && (
                    <NavLink
                        to="/contacts"
                        exact
                        className="link"
                        activeClassName="active-link"
                    >
                        Contacts
                    </NavLink>
                )}
            </nav>
        </>
    );
}
