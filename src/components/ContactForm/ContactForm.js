import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import shortId from 'shortid';
import { contactsOperations } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

export default function ContactForm() {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const inputName = useCallback(event => {
        setName(event.currentTarget.value);
    }, []);

    const [number, setNumber] = useState('');
    const inputNumber = useCallback(event => {
        setNumber(event.currentTarget.value);
    }, []);

    const contacts = useSelector(contactsSelectors.getAllContacts);

    const handleSubmit = useCallback(
        event => {
            event.preventDefault();
            const nameExistCheck = contacts.find(
                contact => contact.name === name,
            );
            nameExistCheck
                ? alert('This name has already exists, try another one!')
                : dispatch(contactsOperations.addContact({ name, number }));
            setName('');
            setNumber('');
        },
        [dispatch, name, number],
    );

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <label htmlFor={name} className="form-label add-contact">
                    Name
                </label>
                <input
                    className="form-input add-contact"
                    type="text"
                    name="name"
                    id={shortId.generate()}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов."
                    required
                    onChange={inputName}
                    value={name}
                />
                <label htmlFor={number} className="form-label add-contact">
                    Number
                </label>
                <input
                    className="form-input add-contact"
                    type="tel"
                    name="number"
                    id={shortId.generate()}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={inputNumber}
                    value={number}
                />
                <button type="submit" className="form-button add-contact">
                    Add contact
                </button>
            </form>
        </>
    );
}
