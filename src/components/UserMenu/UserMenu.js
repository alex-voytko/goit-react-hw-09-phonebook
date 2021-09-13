import React, { useCallback } from 'react';
import { authSelectors, authOperations } from '../../redux/auth';
import { useSelector, useDispatch } from 'react-redux';
import defaultAvatar from '../../images/default-user-avatar.png';

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const onLogOut = useCallback(
        () => dispatch(authOperations.logOut()),
        [dispatch],
    );

    return (
        <>
            <div>
                <div className="avatar-container">
                    <img
                        src={defaultAvatar}
                        alt=""
                        width="32"
                        className="avatar-img"
                    />
                </div>
                <span>{name}, welcome!</span>
                <button
                    type="button"
                    onClick={onLogOut}
                    className="logout-button"
                >
                    Logout
                </button>
            </div>
        </>
    );
}
