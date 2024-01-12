import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactsAction } from '../redux/phoneSlice';
import css from '../App.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const deleteContact = id => {
    dispatch(deleteContactsAction(id));
  };

  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <ul className={css.contactList}>
        {findContacts.map(({ id, name, number }) => (
          <li key={id}>
            <p >
              {name} : {number}
            </p>
            <button 
              type="button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};