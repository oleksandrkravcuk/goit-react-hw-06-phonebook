import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContactsAction } from '../../redux/phoneSlice';
import css from '../App.module.css';

export const FormContact = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleSubmitContact = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      dispatch(addContactsAction(newContact));

      e.target.reset();
    }
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmitContact}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>

        <label>
          Number
          <input type="tel" name="number" required />
        </label>

        <button  type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};