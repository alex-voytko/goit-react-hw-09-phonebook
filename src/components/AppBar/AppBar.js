import React from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import NavigationAuth from '../NavigationAuth/NavigationAuth';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <header>
            <Navigation />
            <h2 className="logo-title">Phonebook</h2>
            <div>{isLoggedIn ? <UserMenu /> : <NavigationAuth />}</div>
        </header>
    );
}
