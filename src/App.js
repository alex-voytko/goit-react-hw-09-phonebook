import React, { Suspense, lazy, useEffect } from 'react';
import Container from './components/Container';
import AppBar from './components/AppBar';
import Spinner from './components/Spinner/Spinner';
import { Switch } from 'react-router-dom';
import { authOperations } from './redux/auth';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import './styles/main.scss';

const HomePage = lazy(() => import('./views/HomePage'));
const RegisterPage = lazy(() => import('./views/RegisterPage'));
const LoginPage = lazy(() => import('./views/LoginPage'));
const ContactsPage = lazy(() => import('./views/ContactsPage'));

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authOperations.getCurrentUser());
    }, [dispatch]);

    return (
        <>
            <Container className="container-general">
                <AppBar />
                <Container className="container">
                    <Suspense fallback={<Spinner />}>
                        <Switch>
                            <PublicRoute exact path="/">
                                <HomePage />
                            </PublicRoute>
                            <PublicRoute
                                path="/register"
                                restricted
                                redirectTo="/contacts"
                            >
                                <RegisterPage />
                            </PublicRoute>
                            <PublicRoute
                                path="/login"
                                restricted
                                redirectTo="/contacts"
                            >
                                <LoginPage />
                            </PublicRoute>
                            <PrivateRoute
                                path="/contacts"
                                redirectTo="/login"
                                text="You should to log In to view your contacts"
                            >
                                <ContactsPage />
                            </PrivateRoute>
                        </Switch>
                    </Suspense>
                </Container>
            </Container>
        </>
    );
}
