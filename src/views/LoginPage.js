import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth/';

export default function LoginPage() {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const inputEmail = useCallback(e => setEmail(e.currentTarget.value), []);

    const [password, setPassword] = useState('');
    const inputPassword = useCallback(
        e => setPassword(e.currentTarget.value),
        [],
    );

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();
            dispatch(authOperations.logIn({ email, password }));
            setEmail('');
            setPassword('');
            return;
        },
        [dispatch, email, password],
    );
    return (
        <>
            <div>
                <h1 className="form-title">Log In</h1>

                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="form-container"
                >
                    <label className="form-label">
                        E-Mail
                        <input
                            className="form-input"
                            type="email"
                            name="email"
                            value={email}
                            onChange={inputEmail}
                        />
                    </label>

                    <label className="form-label">
                        Password
                        <input
                            className="form-input"
                            type="password"
                            name="password"
                            value={password}
                            onChange={inputPassword}
                        />
                    </label>

                    <button type="submit" className="form-button">
                        Enter
                    </button>
                </form>
            </div>
        </>
    );
}
