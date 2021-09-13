import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(contactsSelectors.getVisibleContacts);
    const onRemove = useCallback(
        id => dispatch(contactsOperations.removeContact(id)),
        [dispatch],
    );
    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);
    return (
        <>
            <ul className="contact-list">
                {contacts.map(({ id, name, number }) => (
                    <li key={id} id={id}>
                        <p className="text-name">{name}</p>
                        <p className="text-number">{number}</p>
                        <button
                            className="btn-delete"
                            onClick={() => onRemove(id)}
                        ></button>
                    </li>
                ))}
            </ul>
        </>
    );
}
