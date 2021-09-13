import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter, contactsSelectors } from '../../redux/contacts';

export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(contactsSelectors.getFilter);
    const onChange = useCallback(
        e => dispatch(changeFilter(e.currentTarget.value)),
        [dispatch],
    );

    return (
        <>
            <div className="filter-container">
                <label htmlFor="filter" className="form-label add-contact">
                    Search Contact
                </label>
                <input
                    value={value}
                    name="filter"
                    onChange={onChange}
                    className="form-input filter"
                />
            </div>
        </>
    );
}
